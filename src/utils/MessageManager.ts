import fs from 'fs';
import { FileContent, MessageItem } from '../types/globalTypes';

export default class MessageManager {
  filename: string;

  constructor(file: string) {
    this.filename = file;
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify([]));
    }
  }

  addMessage(data: MessageItem) {
    const { ID, channel, nickname, mod, sub, vip, message } = data;
    const fileContent: FileContent[] = JSON.parse(
      fs.readFileSync(this.filename, 'utf-8'),
    );

    if (channel) {
      if (this.checkIfChannelExists(fileContent, channel)) {
        const updatedMessages = fileContent.map((item) => {
          if (item.channel === channel) {
            item.messages = [
              ...item.messages,
              {
                ID,
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
              ID,
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
  }

  checkIfChannelExists(data: FileContent[], channel: string) {
    if (data.some((item) => item.channel === channel)) {
      return true;
    } else {
      return false;
    }
  }

  readMessagesFromChannel(channel: string) {
    const messages: FileContent[] = JSON.parse(
      fs.readFileSync(this.filename, 'utf-8'),
    );
    const channelMessages =
      messages.length > 0
        ? messages.filter((obj) => obj.channel === channel)
        : [];

    return channelMessages.length > 0 ? channelMessages[0].messages : [];
  }
}
