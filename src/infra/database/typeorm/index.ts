import { Connection, createConnection, ConnectionOptions } from 'typeorm';
import connectioConfig from '../../config/typeorm';

createConnection();
// export default async (): Promise<Connection> =>{
//   return await createConnection();
// }
