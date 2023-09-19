const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");

const options = {
  transports: [
    new LokiTransport({
      labels: {
        appName: "express_digimart",
      },
      host: "http://127.0.0.1:3100",
    }),
  ],
};

exports.logger = createLogger(options);
