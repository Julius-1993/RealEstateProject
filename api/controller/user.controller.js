import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler }  from '../utils/error.js';

export const test =  (req, res) => {
  res.send('Hello World from the controller!');
};  // This is the same as the snippet above, but in a controller file

export const updateUser = async(req, res, next) => {
  if(req.user.id !== req.params.id) return next(errorHandler(401, 'You are not authorized'));
  try{
    if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
  }

  const updateUser = await User.findByIdAndUpdate(req.params.id, {
    $set: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    },
  },  {new: true});
  
  const { password, ...rest } = updateUser._doc;
  res.status(200).json(rest);
} catch (error) {
  next(error);
} 
}; 

//DELETE USER ACCOUNT FROM DATABSE
export const deleteUser = async (req, res, next) => {
  if(req.user.id !== req.params.id) return next(errorHandler(401, 'You can only delete your own account'));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted!')
  } catch (error) {
    next(error);
  }
};