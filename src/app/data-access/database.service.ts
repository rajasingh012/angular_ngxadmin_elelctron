import { Injectable } from '@angular/core';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { Person } from './entities/person';
import { User } from './entities/user';

@Injectable()
export class DatabaseService {

    public connection: Promise<Connection>;
    private readonly options: ConnectionOptions;

    constructor() {
        this.options = {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'rajasingh',
            entities: [
                Person,
                User
            ],
            synchronize: false,
            logging: false
        };
        this.connection = createConnection(this.options);
    }
}
