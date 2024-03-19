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

interface IMessages {
  nickname: string;
  message: string;
  mod: boolean;
  sub: boolean;
  vip: boolean;
}
[];

export { IMessage, IFileContent, IMessages };
