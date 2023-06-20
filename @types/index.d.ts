declare module '@gentifly/exceptions' {
  export class Exception extends Error {
    public readonly status: number;

    constructor(name: string, message: string, status: number)
  }
}
