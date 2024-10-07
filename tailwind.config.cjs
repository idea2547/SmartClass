module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/routes/**/*.{svelte,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};