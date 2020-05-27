
const os = require('os');
console.log(os.freemem());
console.log(`Total memory : ${os.totalmem()}`);
const fs = require('fs');
const files = fs.readdir('./$',function(err,files){
    if(err) console.log(err);
    else console.log(files);
});
const Logger = require('./logger');
const logger  = new Logger();

//listener 

logger.on('messageLogged',function(arg){
    console.log('event raised',arg);
})

logger.log('Logging');
