const connection = require('./config/connection');

connection.connect((err) => {
    if(err) {
        console.log((err));
        return;
    }
    console.log(`Connected to ThreadID: ${connection.threadID}`);
    connection.end()
});
