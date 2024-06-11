const fastify = require('fastify');

const app = fastify();

if (app.patch1) {
  console.log('patch1 applied');
}
if (app.patch2) {
  console.log('patch2 applied');
}
