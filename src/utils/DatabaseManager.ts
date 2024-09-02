import sqlite3 from 'sqlite3';
import path from 'path';
import { app } from 'electron';

const filename = 'database.db';

export default class DatabaseManager {
  db;

  constructor() {
    this.db = new sqlite3.Database(
      path.join(app.getPath("appData"), filename),
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          throw new Error(err.message);
        }

        this.db.run(`CREATE TABLE IF NOT EXISTS channels (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
      )`);

        this.db.run(`CREATE TABLE IF NOT EXISTS messages (
        ID TEXT UNIQUE NOT NULL,
        channel TEXT NOT NULL,
        nickname TEXT NOT NULL,
        color TEXT NOT NULL,
        message TEXT NOT NULL,
        mod BOOLEAN NOT NULL,
        sub BOOLEAN NOT NULL,
        vip BOOLEAN NOT NULL
      )`);
      },
    );
  }
}
