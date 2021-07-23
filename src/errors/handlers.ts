import logger from './logger';
import toJSONError from './toJSONError';

const isTrustedError = (err: any) => {
  return err.isOperational;
}
const myLogger = logger('app');
const breakOrSendResponse = (err: any, res: any) => {
  if (!isTrustedError(err)) {
    process.exit(1);
  }

  res.status(err.status || 404).json(toJSONError(err));
}

export default {
  handle: (err: any, res?: any) => {
    if (err.errors && err.errors.lenght > 0) {
      myLogger.error(`code=${err.code || 404} message=${err.message} - ${JSON.stringify(err.errors)}`);
    } else {
      myLogger.error(`code=${err.code || 404} - ${err}`);
    }

    breakOrSendResponse(err, res);
  },
  log: (err: any, req: any) => {
    // TODO: Work here to change location of request error logs
    myLogger.error(`code=${err.code || 404} path=${req.originalUrl} method=${req.method} ip=${req.ip} message=${err.message}
${JSON.stringify(err, null, 2)}`);
  }
}
