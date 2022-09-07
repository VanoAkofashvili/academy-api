function transformSuccess(data, message) {
  let response = {
    success: true,
    errors: null,
  };

  if (data) response.data = data;
  if (message) response.message = message;

  return response;
}

module.exports = {
  transformSuccess,
};
