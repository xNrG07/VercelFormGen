import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        index:               resolve(__dirname, 'index.html'),
        generator:           resolve(__dirname, 'generator.html'),
        impressum:           resolve(__dirname, 'impressum.html'),
        datenschutz:         resolve(__dirname, 'datenschutz.html'),
        kontakt:             resolve(__dirname, 'kontakt.html'),
        notfound:            resolve(__dirname, '404.html'),
        kuendigung:          resolve(__dirname, 'vorlagen/kuendigung.html'),
        maengelruege:        resolve(__dirname, 'vorlagen/maengelruege.html'),
        mahnung:             resolve(__dirname, 'vorlagen/mahnung.html'),
        widerruf_onlinekauf: resolve(__dirname, 'vorlagen/widerruf-onlinekauf.html'),
        dsgvo_auskunft:      resolve(__dirname, 'vorlagen/dsgvo-auskunft.html'),
        widerspruch_bescheid:resolve(__dirname, 'vorlagen/widerspruch-bescheid.html'),
        mietminderung:       resolve(__dirname, 'vorlagen/mietminderung.html'),
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
