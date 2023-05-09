import kafka from "kafka-node";

const client = new kafka.Client("localhost:2181");

const topics = [
    {
        topic: "sale-transaction"
    }
];

const options = {
    autoCommit: false
};

const consumer = new kafka.HighLevelConsumer(client, topics, options);

consumer.on("message", function(message){
    console.log(message);
    // Do some other business logic here.
})