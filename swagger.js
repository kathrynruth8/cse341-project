const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Soda Recipe API',
    description: 'API for managing custom soda recipes',
  },
  host: 'cse341-project-d23b.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
