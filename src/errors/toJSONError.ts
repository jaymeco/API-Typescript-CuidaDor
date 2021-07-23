export default (err: any) => ({
  errorType: err.errorType,
  code: err.code,
  message: err.message,
  details: err.details
});
