import { defineConfig } from 'vite';
import { resolve } from 'path';

// Multi-page build: list every HTML entry so Vite includes it in /dist
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        generator: resolve(__dirname, 'generator.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
        impressum: resolve(__dirname, 'impressum.html'),
        datenschutz: resolve(__dirname, 'datenschutz.html'),
        notfound: resolve(__dirname, '404.html'),
        kuendigung: resolve(__dirname, 'vorlagen/kuendigung.html'),
        maengelruege: resolve(__dirname, 'vorlagen/maengelruege.html'),
        widerruf_onlinekauf: resolve(__dirname, 'vorlagen/widerruf-onlinekauf.html'),
        mahnung: resolve(__dirname, 'vorlagen/mahnung.html'),
        dsgvo_auskunft: resolve(__dirname, 'vorlagen/dsgvo-auskunft.html'),
        mietminderung: resolve(__dirname, 'vorlagen/mietminderung.html'),
        widerspruch_bescheid: resolve(__dirname, 'vorlagen/widerspruch-bescheid.html')
      }
    }
  }
});
