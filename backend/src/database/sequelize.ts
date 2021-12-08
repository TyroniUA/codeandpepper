
import { Sequelize } from 'sequelize-typescript';

import config from '../../db/database';
import {Human} from '../models/human';
import {StarShip} from '../models/starships';


export interface DBInstance {
  instance: Sequelize
  init(env: any): void;
  sync(): void;
}

/**
 * If we have more than one DB - it's a good approach to have such initialization. For example separate DB for analytics.
 */
export const initDB = async () => {
  type configType = keyof typeof config;
  const environment = process.env.NODE_ENV || 'development';
  const env: any = config[environment as configType];
  console.log("using environment <", environment, "> for data db init");

  const instance = new MainDB(); 
  instance.init(env);
  await instance.sync();

}

export class MainDB implements DBInstance {
  instance: Sequelize;

  init(env: any): void {
    const main: Sequelize = new Sequelize({
      dialect: 'postgres',
      host: env.host,
      port: env.port,
      database: env.database,
      username: env.username,
      password: env.password,
      pool: {
        max: 8,
        min: 0,
        acquire: 60000,
        idle: 20000
      },
      models: [
        Human,
        StarShip
      ]
    })
    this.instance = main;
  }

  async sync(): Promise<void> {
    await this.instance.sync({ force: false, alter: true });
  }
}



