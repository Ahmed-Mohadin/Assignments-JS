const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`))

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Connected to DB');
})
.catch((err)=>{
  console.log(err);
})