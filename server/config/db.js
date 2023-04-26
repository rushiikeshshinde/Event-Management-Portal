const mongoose = require('mongoose')


const connectWithDb = () => {
    mongoose.set('strictQuery',false);
    // establishing connection to the database using mongoose.connect
    mongoose.connect(process.env.DB_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB connection succesfull..")) 
    .catch(error=> {
        console.log("DB connection failed");
        console.log(error);
        process.exit(1)
    })
}

module.exports =connectWithDb