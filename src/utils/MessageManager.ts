import fs from 'fs';

interface IMessage {
  channel: string;
  nickname: string;
  mod: number;
  sub: number;
  vip: number;
  message: string;
}

interface IFileContent {
  channel: string;
  messages: {
    nickname: string;
    message: string;
    mod: number;
    sub: number;
    vip: number;
  }[];
}

export default class MessageManager {
  filename: string;

  constructor(file: string) {
    this.filename = file;
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify([]));
    }
  }

  addMessage(data: IMessage) {
    const { channel, nickname, mod, sub, vip, message } = data;
    const fileContent: IFileContent[] = JSON.parse(
      fs.readFileSync(this.filename, 'utf-8'),
    );

    if (this.checkIfChannelExists(fileContent, channel)) {
      const updatedMessages = fileContent.map((item) => {
        if (item.channel === channel) {
          item.messages = [
            ...item.messages,
            {
              nickname,
              message,
              mod,
              sub,
              vip,
            },
          ];
        }

        return item;
      });

      fs.writeFileSync(this.filename, JSON.stringify(updatedMessages));
    } else {
      const data = {
        channel,
        messages: [
          {
            nickname,
            message,
            mod,
            sub,
            vip,
          },
        ],
      };

      fs.writeFileSync(this.filename, JSON.stringify([...fileContent, data]));
    }
  }

  checkIfChannelExists(data: IFileContent[], channel: string) {
    if (data.some((item) => item.channel === channel)) {
      return true;
    } else {
      return false;
    }
  }

  readMessagesFromChannel(channel: string) {
    const messages: IFileContent[] = JSON.parse(
      fs.readFileSync(this.filename, 'utf-8'),
    );
    return messages.filter((obj) => obj.channel === channel)[0]['messages'];
  }
}
