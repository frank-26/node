const pwd = process.env.pwd;

module.exports = {
  secret: 'rest-jwt-secret',
  connectionStr: `mongodb+srv://elliot:${pwd}@rest-demo-af2ub.mongodb.net/test?retryWrites=true&w=majority`,
};