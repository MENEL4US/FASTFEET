import Sequelize from 'sequelize';

// import User from '../app/models/User';

import databaConfig from '../config/database';

// const models = [User];
const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
