import fastify from 'fastify';
import cors from '@fastify/cors';

const app = fastify();

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server runnign on port: 3333');
});
