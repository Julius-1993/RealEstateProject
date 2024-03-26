import jwt  from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if(!token) return next(errorHandlerandler(401, "Unauthorized" ))

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err) return next(errorHandler(401, "Unauthorized" ));
    req.user = user;
    next();
  });

};