import path from 'path';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const CAREERS_REDIRECT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeiRKSBupPoSoC0XybKUXTg9xvw8T4Vu2saCdEoCrUE0Lb9Wg/viewform';

const careersRedirectPlugin = (): Plugin => {
  const middleware = (req: any, res: any, next: () => void) => {
    const pathname = (req.url || '').split('?')[0].replace(/\/+$/, '').toLowerCase();
    if (pathname === '/careers') {
      res.statusCode = 302;
      res.setHeader('Location', CAREERS_REDIRECT_URL);
      res.end();
      return;
    }
    next();
  };

  return {
    name: 'careers-redirect',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
};

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), careersRedirectPlugin()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
