import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import { JWT_COOKIE_NAME, REQUEST, RESPONSE } from '@org/platform-provider-pattern/domain';
import { defaultIfEmpty, isEmpty } from '@ngserveio/utilities';
import * as cookieParser from 'cookie-parser';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.use(cookieParser.default());

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.get('/login', (req, res) => {
    // https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6InBhdWxAbmdzZXJ2ZS5pbyIsIm5hbWUiOiJQYXVsIn0.s9vYoLO3WqJzQJeuNlNSkfrT58pdAO3Gct4etIXZuCA
    /* Setting a fake JWT cookie */
    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6InBhdWxAbmdzZXJ2ZS5pbyIsIm5hbWUiOiJQYXVsIn0.s9vYoLO3WqJzQJeuNlNSkfrT58pdAO3Gct4etIXZuCA';
    
    const jwtCookie = defaultIfEmpty(req, `cookie.${JWT_COOKIE_NAME}`);
    if (isEmpty(jwtCookie)) {
      // setting to http only 
      res.cookie(JWT_COOKIE_NAME, jwt, { httpOnly: true });
    }

    res.json({ jwt });
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: baseUrl },
          { provide: RESPONSE, useValue: res },
          { provide: REQUEST, useValue: req }
        ],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
