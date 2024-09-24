class ApiResponse{
  constructor(message = "success", data){
    this.message = message,
    this.data = data,
    this.success = statusCode < 400;
  }
}

module.exports = ApiResponse;