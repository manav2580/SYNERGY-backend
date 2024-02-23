const app = require("./app");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
// app.use(cors())
app.use(cors());
// const cors = require('cors');
const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

process.on("uncaughtException", (err) => {
	console.log(`Error:${err.message}`);
	console.log("Shutting down the server due to uncaught exception");
	process.exit(1);
});
//Config
dotenv.config({ path: "config/config.env" });
connectDatabase();
app.listen(process.env.PORT, () => {
	console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log("Shutting down the server due to unhandled Promise Rejection");
	server.close(() => {
		process.exit(1);
	});
});
