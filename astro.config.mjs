import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  // Enable strict mode for better error handling
  vite: {
    ssr: {
      external: [],
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
        },
      },
    },
  },

  // Configure integrations
  integrations: [
    tailwind(),
    compress({
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
        },
      },
      CSS: true,
      JavaScript: true,
      Image: false, // Garder les images au format d'origine pour la qualité
      SVG: true,
    }),
  ],

  // Build configuration
  build: {
    assets: 'assets',
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  // Output configuration
  output: 'static',

  // Site configuration for sitemap and RSS
  site: 'https://seniorgeek.ca',

  // Markdown configuration
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  // Routing configuration
  routing: {
    // Astro 2.0+
  },

  // Experimental features (optional)
  experimental: {
    // Enable experimental features if needed
  },
});
