module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    'storybook-addon-designs/register',
    '@storybook/addon-docs',
  ]
}
