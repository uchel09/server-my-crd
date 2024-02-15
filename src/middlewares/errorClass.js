class ErrorHandler extends Error {
  constructor(message, statusCode = 500) {
    super(typeof message === "string" ? message : String(message));
    this.statusCode = typeof message === "number" ? message : statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  handle(req, res, next) {
    res.status(this.statusCode).json({
      success: false,
      message: this.message,
    });
  }
}

export default ErrorHandler;
