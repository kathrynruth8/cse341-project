const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Soda Recipe API',
    description: 'API for managing custom soda recipes',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/sodaRoutes.js']; // Adjust if your routes file is named differently

swaggerAutogen(outputFile, endpointsFiles, doc);
