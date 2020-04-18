const express = require('express');
const graphqlHTTP = require('express-graphql');
const db = require('./config/db');
const path = require('path');
const PORT = process.env.PORT || 4000;

// MongoDB
db();

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: require('./schema/schema'),
    graphiql: process.env.NODE_ENV === 'production' ? false : true,
  })
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/graphql`));
