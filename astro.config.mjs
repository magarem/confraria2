import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
// import vue from '@astrojs/vue';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  //   integrations: [tailwind()]
  integrations: [solidJs()]
});