import { defineConfig } from "@solidjs/start/config";
import panda from '@pandabox/unplugin/vite'
export default defineConfig({
  vite: {
    plugins: [panda({
      outfile: 'src/app.css',
    })]
  }
});
