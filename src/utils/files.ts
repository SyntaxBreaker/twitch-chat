import fs from 'fs';

const files = {
  addFile(file: string) {
    fs.writeFileSync(file, JSON.stringify({ channels: [] }));
  },
  checkIfFileExists(file: string) {
    if (fs.existsSync(file)) {
      return true;
    } else {
      return false;
    }
  },
  checkIfChannelExists(channel: string) {
    const { channels } = this.readChannels('channels.json');
    if (channels.includes(channel)) {
      return true;
    } else {
      return false;
    }
  },
  addChannel(file: string, channel: string) {
    const { channels } = files.readChannels(file);
    if (!channels) {
      fs.writeFileSync(file, JSON.stringify({ channels: [channel] }));
    } else {
      if(this.checkIfChannelExists(channel)) return;
      fs.writeFileSync(
        file,
        JSON.stringify({ channels: [...channels, channel] }),
      );
    }
  },
  readChannels(file: string) {
    if (this.checkIfFileExists('channels.json')) {
      const channels = fs.readFileSync(file, 'utf-8');
      return JSON.parse(channels);
    } else {
      this.addFile('channels.json');
      return { channels: [] };
    }
  },
};

export default files;
