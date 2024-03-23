const error = (message: any, ...other: any[]) => {
  console.error(`ERROR: ${message}`, ...other);
};

const warn = (message: any, ...other: any[]) => {
  console.warn(`WARNING: ${message}`, ...other);
};

const success = (message: any, ...other: any[]) => {
  console.info(`SUCCESS: ${message}`, ...other);
};

const info = (message: any, ...other: any[]) => {
  console.info(`INFO: ${message}`, ...other);
};

const dev = (...other: any[]) => {
  console.info(...other);
};

const prod = (...other: any[]) => {
  console.info(...other);
};

const log = {
  error,
  warn,
  dev,
  success,
  prod,
  info,
};

export default log;
