import { createConnection } from 'typeorm';
import { Lists } from '../entities/Lists';
// db connection handler

const dbConnect = async (db: any) => {
  try {
    const connection = await createConnection({
      type: db.type,
      host: db.host,
      port: db.port,
      username: db.username,
      password: db.password,
      database: db.name,
      entities: [Lists],
      synchronize: true,
    });
    console.log('connected');
  } catch (e) {
    console.log(e);
    console.log('connection fault');
  }
};

export default dbConnect;
