module.exports = {
  type: 'mysql',
  url: process.env.MYSQL_UNMSM_BANKING_NEST_URL,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false
//  migrations: ['dist/app/infra/migrations/*.js'],
//  cli: {
//    migrationsDir: './app/infra/migrations',
//  },
//  migrationsRun: true,
//  logging: true,
//  timezone: '+0',
//  entities: [
//    'dist/**/command/infra/persistence/typeorm/entities/**.typeorm.js',
//  ],
};
