import DatabaseManager from './DatabaseManager';

export default class ChannelManager extends DatabaseManager {
  constructor() {
    super();
  }

  addChannel(channel: string) {
    const data = [channel, channel];

    this.db.run(
      `
      INSERT INTO channels (name)
      SELECT ?
      WHERE NOT EXISTS (SELECT * FROM channels WHERE name = ?)
    `,
      data,
    );
  }

  removeChannel(channel: string) {
    this.db.run(
      `
      DELETE FROM channels
      WHERE name = ?
    `,
      channel,
    );
  }

  updateChannel(channel: string, newValue: string) {
    const data = [newValue, channel];

    this.db.run(
      `
      UPDATE channels
      SET name = ?
      WHERE name = ?  
    `,
      data,
    );
  }

  async readChannels(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT * FROM channels`, (err, row) => {
        if (err) {
          return reject(new Error(err.message));
        }

        resolve(row.map((item: any) => item.name));
      });
    });
  }
}
