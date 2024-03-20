interface IMessage {
  channel?: string;
  nickname: string;
  mod: boolean;
  sub: boolean;
  vip: boolean;
  message: string;
}

interface IFileContent {
  channel: string;
  messages: {
    nickname: string;
    message: string;
    mod: boolean;
    sub: boolean;
    vip: boolean;
  }[];
}

type UserType = 'mod' | 'vip' | 'sub';

export { IMessage, IFileContent, UserType };
