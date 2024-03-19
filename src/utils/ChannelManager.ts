import fs from 'fs';

export default class ChannelManager {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
    if (!fs.existsSync(this.filename)) {
      fs.writeFileSync(this.filename, JSON.stringify({ channels: [] }));
    }
  }

  addChannel(channel: string) {
    const { channels } = this.readChannels();
    if (!channels) {
      fs.writeFileSync(this.filename, JSON.stringify({ channels: [channel] }));
    } else {
      if (this.checkIfChannelExists(channel)) return;
      fs.writeFileSync(
        this.filename,
        JSON.stringify({ channels: [...channels, channel] }),
      );
    }
  }

  checkIfChannelExists(channel: string) {
    const { channels } = this.readChannels();
    if (channels.includes(channel)) {
      return true;
    } else {
      return false;
    }
  }

  readChannels() {
    const channels = fs.readFileSync(this.filename, 'utf-8');
    return JSON.parse(channels);
  }
}
