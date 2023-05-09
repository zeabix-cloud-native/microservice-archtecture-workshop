import { createConnection } from 'mysql';


var con = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
});