const { Plugin, PluginSettingTab, Setting, FuzzySuggestModal, TFile } = require('obsidian');

const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg'];

const DEFAULT_SETTINGS = {
	backgroundType: 'none', // 'none' | 'color' | 'gradient' | 'image'
	applyToGlobalGraph: true,
	applyToLocalGraph: true,

	color: '#1e1e2e',

	gradientType: 'linear', // 'linear' | 'radial'
	gradientAngle: 135,
	gradientColor1: '#2b2d42',
	gradientColor2: '#8d99ae',

	imageMode: 'vault', // 'vault' | 'url'
	imagePath: '', // vault-relative path, used when imageMode === 'vault'
	imageUrl: '', // external URL, used when imageMode === 'url'
	imageFit: 'cover', // 'cover' | 'contain' | 'repeat' | 'center'

	opacity: 100, // 0-100, overall transparency of the background layer
	dim: 0, // 0-100, darkens the background
	blur: 0, // 0-20 (px), blurs the background only, never the graph itself
};

const STYLE_EL_ID = 'graph-background-plugin-styles';

function escapeForCssUrl(str) {
	return String(str).replace(/["\\]/g, '\\$&');
}

module.exports = class GraphBackgroundPlugin extends Plugin {
	async onload() {
		await this.loadSettings();
		this.addSettingTab(new GraphBackgroundSettingTab(this.app, this));
		this.applyStyles();
	}

	onunload() {
		const el = document.getElementById(STYLE_EL_ID);
		if (el) el.remove();
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.applyStyles();
	}

	// Resolves the currently selected vault image to a URL the webview can load.
	getVaultImageResourceUrl() {
		const path = this.settings.imagePath;
		if (!path) return '';
		const file = this.app.vault.getAbstractFileByPath(path);
		if (!(file instanceof TFile)) return '';
		return this.app.vault.getResourcePath(file);
	}

	// Builds the background layer description (used by both the live stylesheet
	// and the in-settings preview box) from current settings.
	getBackgroundLayer() {
		const s = this.settings;
		const layer = {
			backgroundColor: 'transparent',
			backgroundImage: 'none',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			opacity: (s.opacity ?? 100) / 100,
			filter: 'none',
		};

		if (s.backgroundType === 'color') {
			layer.backgroundColor = s.color;
		} else if (s.backgroundType === 'gradient') {
			layer.backgroundImage =
				s.gradientType === 'radial'
					? `radial-gradient(circle, ${s.gradientColor1}, ${s.gradientColor2})`
					: `linear-gradient(${s.gradientAngle}deg, ${s.gradientColor1}, ${s.gradientColor2})`;
		} else if (s.backgroundType === 'image') {
			const url = s.imageMode === 'vault' ? this.getVaultImageResourceUrl() : s.imageUrl;
			if (url) {
				layer.backgroundImage = `url("${escapeForCssUrl(url)}")`;
				if (s.imageFit === 'contain') {
					layer.backgroundSize = 'contain';
				} else if (s.imageFit === 'repeat') {
					layer.backgroundSize = 'auto';
					layer.backgroundRepeat = 'repeat';
				} else if (s.imageFit === 'center') {
					layer.backgroundSize = 'auto';
				} else {
					layer.backgroundSize = 'cover';
				}
			}
		}

		const brightness = Math.max(0, 1 - s.dim / 100);
		const filters = [];
		if (brightness !== 1) filters.push(`brightness(${brightness})`);
		if (s.blur > 0) filters.push(`blur(${s.blur}px)`);
		layer.filter = filters.length ? filters.join(' ') : 'none';

		return layer;
	}

	buildCSS() {
		const s = this.settings;
		if (s.backgroundType === 'none') return '';

		const viewTypes = [];
		if (s.applyToGlobalGraph) viewTypes.push('graph');
		if (s.applyToLocalGraph) viewTypes.push('localgraph');
		if (viewTypes.length === 0) return '';

		// Only render the image layer if there is actually something to show.
		if (s.backgroundType === 'image') {
			const url = s.imageMode === 'vault' ? this.getVaultImageResourceUrl() : s.imageUrl;
			if (!url) return '';
		}

		const layer = this.getBackgroundLayer();

		const containerSelectorList = viewTypes.map(
			(t) => `.workspace-leaf-content[data-type="${t}"] .view-content`
		);
		const containerSelectors = containerSelectorList.join(',\n');
		const beforeSelectors = containerSelectorList.map((sel) => `${sel}::before`).join(',\n');

		return `
/* Graph Background plugin — generated styles */
${containerSelectors} {
	position: relative;
	z-index: 0;
}
${beforeSelectors} {
	content: "";
	position: absolute;
	inset: 0;
	z-index: -1;
	opacity: ${layer.opacity};
	background-color: ${layer.backgroundColor};
	background-image: ${layer.backgroundImage};
	background-size: ${layer.backgroundSize};
	background-repeat: ${layer.backgroundRepeat};
	background-position: ${layer.backgroundPosition};
	filter: ${layer.filter};
	pointer-events: none;
}
`.trim();
	}

	applyStyles() {
		let el = document.getElementById(STYLE_EL_ID);
		if (!el) {
			el = document.createElement('style');
			el.id = STYLE_EL_ID;
			document.head.appendChild(el);
		}
		el.textContent = this.buildCSS();
	}
};

class ImageSuggestModal extends FuzzySuggestModal {
	constructor(app, onChoose) {
		super(app);
		this.onChooseCb = onChoose;
		this.setPlaceholder('Type to search images in your vault…');
	}

	getItems() {
		return this.app.vault
			.getFiles()
			.filter((f) => IMAGE_EXTENSIONS.includes(f.extension.toLowerCase()));
	}

	getItemText(item) {
		return item.path;
	}

	onChooseItem(item) {
		this.onChooseCb(item);
	}
}

class GraphBackgroundSettingTab extends PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display() {
		this.display_();
	}

	// Re-saves + re-applies the live stylesheet, then refreshes the preview box
	// without necessarily rebuilding the whole settings UI.
	async commit() {
		await this.plugin.saveSettings();
		this.updatePreview();
	}

	updatePreview() {
		if (!this.previewEl) return;
		const layer = this.plugin.getBackgroundLayer();
		const style = this.previewEl.style;
		style.backgroundColor = layer.backgroundColor;
		style.backgroundImage = layer.backgroundImage;
		style.backgroundSize = layer.backgroundSize;
		style.backgroundRepeat = layer.backgroundRepeat;
		style.backgroundPosition = layer.backgroundPosition;
		style.filter = layer.filter;
	}

	display_() {
		const { containerEl } = this;
		containerEl.empty();
		const s = this.plugin.settings;

		containerEl.createEl('h2', { text: 'Graph background' });
		containerEl.createEl('p', {
			text: 'Choose a solid color, gradient, or image to show behind your graph view nodes.',
			cls: 'setting-item-description',
		});

		// Preview box
		this.previewEl = containerEl.createDiv({ cls: 'graph-bg-preview-box' });

		new Setting(containerEl)
			.setName('Background type')
			.setDesc('What to show behind the graph.')
			.addDropdown((drop) =>
				drop
					.addOptions({
						none: 'None (default)',
						color: 'Solid color',
						gradient: 'Gradient',
						image: 'Image',
					})
					.setValue(s.backgroundType)
					.onChange(async (value) => {
						s.backgroundType = value;
						await this.commit();
						this.display_();
					})
			);

		new Setting(containerEl)
			.setName('Apply to global graph')
			.setDesc('The full vault graph view.')
			.addToggle((t) =>
				t.setValue(s.applyToGlobalGraph).onChange(async (value) => {
					s.applyToGlobalGraph = value;
					await this.commit();
				})
			);

		new Setting(containerEl)
			.setName('Apply to local graph')
			.setDesc('The local graph shown for the current note.')
			.addToggle((t) =>
				t.setValue(s.applyToLocalGraph).onChange(async (value) => {
					s.applyToLocalGraph = value;
					await this.commit();
				})
			);

		if (s.backgroundType === 'color') {
			this.renderColorSection(containerEl, s);
		} else if (s.backgroundType === 'gradient') {
			this.renderGradientSection(containerEl, s);
		} else if (s.backgroundType === 'image') {
			this.renderImageSection(containerEl, s);
		}

		if (s.backgroundType !== 'none') {
			this.renderOverlaySection(containerEl, s);
		}

		this.updatePreview();
	}

	renderColorSection(containerEl, s) {
		containerEl.createEl('h3', { text: 'Color' });
		new Setting(containerEl).setName('Background color').addColorPicker((picker) =>
			picker.setValue(s.color).onChange(async (value) => {
				s.color = value;
				await this.commit();
			})
		);
	}

	renderGradientSection(containerEl, s) {
		containerEl.createEl('h3', { text: 'Gradient' });

		new Setting(containerEl).setName('Gradient type').addDropdown((drop) =>
			drop
				.addOptions({ linear: 'Linear', radial: 'Radial' })
				.setValue(s.gradientType)
				.onChange(async (value) => {
					s.gradientType = value;
					await this.commit();
					this.display_();
				})
		);

		new Setting(containerEl).setName('Color 1').addColorPicker((picker) =>
			picker.setValue(s.gradientColor1).onChange(async (value) => {
				s.gradientColor1 = value;
				await this.commit();
			})
		);

		new Setting(containerEl).setName('Color 2').addColorPicker((picker) =>
			picker.setValue(s.gradientColor2).onChange(async (value) => {
				s.gradientColor2 = value;
				await this.commit();
			})
		);

		if (s.gradientType === 'linear') {
			new Setting(containerEl)
				.setName('Angle')
				.setDesc(`${s.gradientAngle}°`)
				.addSlider((slider) =>
					slider
						.setLimits(0, 360, 1)
						.setValue(s.gradientAngle)
						.setDynamicTooltip()
						.onChange(async (value) => {
							s.gradientAngle = value;
							await this.commit();
						})
				);
		}
	}

	renderImageSection(containerEl, s) {
		containerEl.createEl('h3', { text: 'Image' });

		new Setting(containerEl).setName('Image source').addDropdown((drop) =>
			drop
				.addOptions({ vault: 'Pick from vault', url: 'External URL' })
				.setValue(s.imageMode)
				.onChange(async (value) => {
					s.imageMode = value;
					await this.commit();
					this.display_();
				})
		);

		if (s.imageMode === 'vault') {
			new Setting(containerEl)
				.setName('Vault image')
				.setDesc(s.imagePath ? s.imagePath : 'No image selected yet.')
				.addButton((btn) =>
					btn.setButtonText('Choose image…').onClick(() => {
						new ImageSuggestModal(this.app, async (file) => {
							s.imagePath = file.path;
							await this.commit();
							this.display_();
						}).open();
					})
				)
				.addExtraButton((btn) =>
					btn
						.setIcon('trash')
						.setTooltip('Clear')
						.onClick(async () => {
							s.imagePath = '';
							await this.commit();
							this.display_();
						})
				);
		} else {
			new Setting(containerEl)
				.setName('Image URL')
				.setDesc('A direct link to an image (https://...).')
				.addText((text) =>
					text
						.setPlaceholder('https://example.com/background.jpg')
						.setValue(s.imageUrl)
						.onChange(async (value) => {
							s.imageUrl = value.trim();
							await this.commit();
						})
				);
		}

		new Setting(containerEl).setName('Fit').addDropdown((drop) =>
			drop
				.addOptions({
					cover: 'Cover (fill, may crop)',
					contain: 'Contain (fit, may letterbox)',
					repeat: 'Repeat (tile)',
					center: 'Center (original size)',
				})
				.setValue(s.imageFit)
				.onChange(async (value) => {
					s.imageFit = value;
					await this.commit();
				})
		);
	}

	renderOverlaySection(containerEl, s) {
		containerEl.createEl('h3', { text: 'Readability overlay' });
		containerEl.createEl('p', {
			text: 'Adjust opacity, dim, or blur the background so node labels stay easy to read — this never affects the graph itself.',
			cls: 'setting-item-description',
		});

		new Setting(containerEl)
			.setName('Opacity')
			.setDesc(`${s.opacity ?? 100}%`)
			.addSlider((slider) =>
				slider
					.setLimits(0, 100, 1)
					.setValue(s.opacity ?? 100)
					.setDynamicTooltip()
					.onChange(async (value) => {
						s.opacity = value;
						await this.commit();
					})
			);

		new Setting(containerEl)
			.setName('Dim')
			.setDesc(`${s.dim}%`)
			.addSlider((slider) =>
				slider
					.setLimits(0, 100, 1)
					.setValue(s.dim)
					.setDynamicTooltip()
					.onChange(async (value) => {
						s.dim = value;
						await this.commit();
					})
			);

		new Setting(containerEl)
			.setName('Blur')
			.setDesc(`${s.blur}px`)
			.addSlider((slider) =>
				slider
					.setLimits(0, 20, 1)
					.setValue(s.blur)
					.setDynamicTooltip()
					.onChange(async (value) => {
						s.blur = value;
						await this.commit();
					})
			);
	}

	hide() {
		this.previewEl = null;
	}
};

/* nosourcemap */