import express from 'express';

import EventEmitter from 'events';
import SampleSubscriber from './domain/events/SampleSubscriber';

const eventEmitter = new EventEmitter();
const app = express();
const port = 3000;

// Setup subscriber
const subscriber = new SampleSubscriber(eventEmitter);
subscriber.subscribe('requestRecieved');

app.get('/', (req, res) => {
    // Emit the event
    eventEmitter.emit('requestRecieved');
    res.send('Hello World!');
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});