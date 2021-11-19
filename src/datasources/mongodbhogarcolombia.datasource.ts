import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodbhogarcolombia',
  connector: 'mongodb',
  url: 'mongodb+srv://hogarcolombia:Eveestudia2021@clusterhogarcolombia.ib4z8.mongodb.net/DataBaseHogarColombia?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: 'hogarcolombia',
  password: 'Eveestudia2021',
  database: 'DataBaseHogarColombia',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbhogarcolombiaDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodbhogarcolombia';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodbhogarcolombia', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
