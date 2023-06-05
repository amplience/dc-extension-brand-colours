module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  core: {
    builder: 'webpack5'
  }
};
