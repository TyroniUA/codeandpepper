
import { initApp } from './app';
import {initDB} from "./database/sequelize";


(async () => {
  await initDB();
  await initApp();
})();