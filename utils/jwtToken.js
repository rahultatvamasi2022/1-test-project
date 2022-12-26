/* eslint-disable import/no-anonymous-default-export */

export default (user, statusCode, res) => {
  const token = user.getJWTToken();

  res.status(statusCode).json({
    message: "Account created",
    token,
  });
};
