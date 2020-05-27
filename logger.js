const EventEmitter = require('events');

var url = 'https://google.com';
class Logger extends EventEmitter{
    log(msg) {
        console.log(msg);    
        this.emit('messageLogged',{id: 1 , str: 'jwalit'});
    }
}

module.exports = Logger;