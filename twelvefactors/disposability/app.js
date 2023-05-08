const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const conn = process.env.CONNECTION_STR

mongoose.connect(conn, (err) => {
  if (err) throw err;
  console.log('Database connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

const server = app.listen(3000, () => console.log('Disposability app listening on port 3000!'));


// Always detect the SIGTERM and handle it propery for gracefully shutdown
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received. Gracefully shutting down');
  server.close(() => {
    console.info("Stopped http server, drain all requests");
    mongoose.disconnect();
    console.log("Disconnect from Database")
  })
});