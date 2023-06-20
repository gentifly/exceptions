declare module '@gentifly/exceptions' {
  export class ExceptionException extends Error {
    public readonly status: number;

    constructor(name: string, message: string, status: number)
  }
}
