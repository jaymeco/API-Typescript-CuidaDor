import fs from 'fs';
import path from 'path';

import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file'

if (!fs.existsSync('logs')) { // eslint-disable-line security/detect-non-literal-fs-filename
  fs.mkdirSync('logs'); // eslint-disable-line security/detect-non-literal-fs-filename
}

// Nomes do arquivo de log
const filename = path.join('logs', '%DATE%.log');

const transportsConfig = [
  new transports.DailyRotateFile({
    filename,
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '30d',
    format: format.combine(
      format.printf((info:any) => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`),
    ),
  }),
];

export default (caller: any) => createLogger({
  format: format.combine(
    format.label({ label: path.basename(caller) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  ),
  transports: transportsConfig,
  level: 'debug'
});
