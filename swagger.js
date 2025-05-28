const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Soda Recipe API',
    description: 'API for managing custom soda recipes',
  },
  host: 'https://cse341-project-d23b.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/sodaRoutes.js']; // Adjust if your routes file is named differently

swaggerAutogen(outputFile, endpointsFiles, doc);
