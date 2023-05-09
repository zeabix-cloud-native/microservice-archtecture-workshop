const redis = require('redis');
const client = redis.createClient();

// By default createClient() will use 127.0.0.1 and 6379 as the hostname
// and port respectively

client.on('connect', function() {
    console.log('Connected');
})

