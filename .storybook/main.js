const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        transpileManager: true,
        include: [
          path.resolve(__dirname, "../src"),
        ]
      },
    },
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    'storybook-addon-designs/register',
  ]
}
