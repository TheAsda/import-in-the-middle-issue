// import "./import-fix.js";
import { Hook } from 'import-in-the-middle';

new Hook(['fastify'], { internals: false }, (moduleExport) => {
  console.log('applying patch1');
  function fastify(...args) {
    console.log('calling fastify with patch1');
    /** @type {import('fastify').FastifyInstance} */
    const app = moduleExport.fastify.apply(this, args);
    app.decorate('patch1', true);
    return app;
  }
  fastify.fastify = fastify;
  fastify.default = fastify;
  return fastify;
});
