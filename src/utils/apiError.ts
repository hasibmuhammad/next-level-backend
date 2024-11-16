class ApiError extends Error {
  success: boolean;
  statusCode: number;
  data: any;
  errors: string[];
  constructor(
    statusCode: number,
    message: string = "Something went wrong!",
    errors: string[] = [],
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
