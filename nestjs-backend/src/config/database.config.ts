import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/models/entities/user.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User],
  migrations: [__dirname + '../migrations/**/*{.ts,.js}'],
  synchronize: true,
  logging: true,
};
