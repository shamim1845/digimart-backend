const app = require("./app")

const dotenv = require('dotenv');

const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shuting down the server due to Uncaught Exception');

    process.exit(1);``
   })


//config
dotenv.config({path: "./config/config.env"});

// connecting to database
connectDatabase()

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})



// Unhandle Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shuting down the server due to Unhandle Promise Rejection');

    server.close(() => {
        process.exit(1);
    })
})