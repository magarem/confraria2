import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
// import vue from '@astrojs/vue';

import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  //   integrations: [tailwind()]
  output: 'server',
  adapter: vercel(),
  integrations: [solidJs()]
});