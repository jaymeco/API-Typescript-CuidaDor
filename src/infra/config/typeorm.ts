import path from 'path';
export default {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "0000",
  database: "cuidador",
  migrations: [
    path.resolve(__dirname, '..', 'typeorm', 'migrations', '*.ts')
  ],
  cli: {
    migrationsDir: path.resolve(__dirname, '..', 'typeorm', 'migrations')
  },
  entities: [
    path.resolve(__dirname, '..', '..', 'domain', 'entities', '*.ts')
  ]
}
