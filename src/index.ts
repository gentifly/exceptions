export class Exception extends Error {
  public readonly status: number;

  constructor(name: string, message: string, status: number) {
    super();

    this.name = name;
    this.message = message;
    this.status = status;

    delete this.stack;
  }
}
