export class Notification {
  constructor(
    public imagePath: string,
    public user: string,
    public content: string,
    public timestamp: string,
    public unread: boolean,
    public subject?: string,
  ) {}
}
