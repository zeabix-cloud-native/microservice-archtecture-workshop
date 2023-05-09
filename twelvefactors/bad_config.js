import { host as _host, user as _user, password as _password } from './config.json';
import { createConnection } from 'mysql';


var con = createConnection({
    host: _host,
    user: _user,
    password: _password
});

