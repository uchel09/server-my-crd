import ErrorHandler from "./errorClass.js";

const errorMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || 500,
    message: err || "internal server error",
  };

  if (err.name === "ValidationError") {
    defaultError.statusCode = 404;
    defaultError.message = Object.values(err.errors)
      .map((el) => el.message)
      .join(",");
  }

  // Duplicate error
  if (err.code && err.code === 11000) {
    defaultError.statusCode = 404;
    defaultError.message = `${Object.values(
      err.keyValue
    )}: field has to be unique ! `;
  }

  // Create an instance of ErrorHandler
  const errorHandler = new ErrorHandler(
    defaultError.message,
    defaultError.statusCode
  );

  // Call the handle function of ErrorHandler
  errorHandler.handle(req, res, next);
};

export default errorMiddleware;
