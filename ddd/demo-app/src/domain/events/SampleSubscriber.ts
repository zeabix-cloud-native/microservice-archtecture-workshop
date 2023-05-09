import EventEmitter from 'events'; 

export default class SampleSubscriber {
    emitter: EventEmitter
    counter: number

    constructor(emitter: EventEmitter) {
        this.counter = 0;
        this.emitter = emitter;
    }

    subscribe(event: string){
        this.emitter.on(event, () => {
            console.log('Event received. Increse counter');
            this.counter++;
            console.log(`Counter: ${this.counter}`);
        });
    }
}