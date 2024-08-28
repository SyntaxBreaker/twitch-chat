import { MessageItem } from '../types/globalTypes';
import DatabaseManager from './DatabaseManager';

export default class MessageManager extends DatabaseManager {
  constructor() {
    super();
  }

  addMessage(data: MessageItem) {
    const { channel, nickname, color, mod, sub, vip, message } = data;

    function formatMessage(message: string) {
      const emoticonRegex =
        /(<figure class="emotettv-emote"[^>]*>)(<img[^>]*>)/g;
      const urlRegex =
        /https?:\/\/(?!static-cdn\.jtvnw\.net|cdn\.7tv\.app|cdn\.betterttv\.net|cdn\.frankerfacez\.com)[^\s]+/g;

      message = message.replace(
        emoticonRegex,
        (fullMatch, figureTag, imageTag) => {
          const altTextMatch = imageTag.match(/alt="([^"]*)"/);
          const altText = altTextMatch ? altTextMatch[1] : '';
          return (
            figureTag + imageTag.replace(/(<img\s)/, `$1title="${altText}" `)
          );
        },
      );

      message = message.replace(urlRegex, (url) => {
        return `<a href=${url} target="_blank">${url}</a>`;
      });

      return message;
    }

    const formattedMessage = formatMessage(message);

    const newMessage = [
      channel,
      nickname,
      color,
      formattedMessage,
      mod,
      sub,
      vip,
    ];

    this.db.run(
      `
      INSERT INTO messages (channel, nickname, color, message, mod, sub, vip)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
      newMessage,
    );
  }

  async readMessagesFromChannel(channel: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT * FROM messages WHERE channel = ?`,
        channel,
        (err, row) => {
          if (err) {
            return reject(new Error(err.message));
          }

          resolve(row.map((item: any) => item));
        },
      );
    });
  }
}
