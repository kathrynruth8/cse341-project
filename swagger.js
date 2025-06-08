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
const endpointsFiles = ['./routes/sodaRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js');
});

// host: 'localhost:3000',
// schemes: ['http']

// "host": "cse341-project-d23b.onrender.com",
// "basePath": "/",
// "schemes": ["https"],
