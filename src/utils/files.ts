import fs from 'fs';

const files = {
  addFile(file: string) {
    fs.writeFileSync(file, JSON.stringify({}));
  },
  checkIfFileExists(file: string) {
    if (fs.existsSync(file)) {
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
      fs.writeFileSync(
        file,
        JSON.stringify({ channels: [...channels, channel] }),
      );
    }
  },
  readChannels(file: string) {
    if (this.checkIfFileExists('channels.json')) {
      const channels = fs.readFileSync(file, 'utf-8');
      if (channels.length > 0) {
        return JSON.parse(channels);
      } else {
        return [];
      }
    } else {
      this.addFile('channels.json');
      return [];
    }
  },
};

export default files;
