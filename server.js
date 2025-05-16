import http from 'http';
import { routes } from './routes.js';

const server = http.createServer((req, res) => {
  const matchedRoute = routes.find(route =>
    req.method === route.method && route.path.test(req.url)
  );

  if (matchedRoute) {
    const match = req.url.match(matchedRoute.path);
    const id = match && match[1] ? parseInt(match[1]) : null;

    matchedRoute.handler(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(4444, () => {
  console.log('Books API server is running on port 4444');
});


