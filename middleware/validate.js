// middleware/validate.js
const { validationResult } = require('express-validator');

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // This is the fix: use .msg and .param explicitly
  const extractedErrors = errors.array().map((err) => ({
    field: err.param,
    message: err.msg,
  }));
  return res.status(400).json({
    errors: extractedErrors,
  });
};
