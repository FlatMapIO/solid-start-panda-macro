import panda from '@pandabox/unplugin/vite'
import { defineConfig } from "@solidjs/start/config"
export default defineConfig({
  vite: {
    plugins: [panda({
      // optimizeCss:true,
      // optimizeJs:'auto',
      outfile: 'src/app.css',
    })]
  }
});
