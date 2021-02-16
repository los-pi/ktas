module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-backgrounds",
		"@storybook/preset-create-react-app",
		"@storybook/addon-docs",
		"@storybook/addon-essentials",
		"@storybook/addon-jest",
		"@storybook/addon-knobs",
		"@storybook/addon-links",
		"@storybook/addon-storyshots",
		// "@storybook/addon-console",
		// "@storybook/addon-actions",
	],
};
