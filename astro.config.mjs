import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
// import vue from '@astrojs/vue';

import vercel from "@astrojs/vercel/serverless";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  //   integrations: [tailwind()]
  output: 'server',
  adapter: vercel(),
  integrations: [solidJs()]
});