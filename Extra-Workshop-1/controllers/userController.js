const User = require("../models/userModel");

/**
 * Creates a task
 *
 * @param {*} req
 * @param {*} res
 */
const userPost = (req, res) => {
  var user = new User();

  user.name = req.body.name;
  user.lastname = req.body.lastname;

  if (user.name && user.lastname) {
    user.save(function (err) {
      if (err) {
        res.status(422);
        console.log('error while saving the user', err)
        res.json({
          error: 'There was an error saving the user'
        });
      }
      res.status(201);//CREATED
      res.send(user.name+' '+user.lastname+' user was created');
      res.header({
        'location': `http://localhost:3000/api/users/?id=${user.id}`
      });
      res.json(user);
    });
  } else {
    res.status(422);
    console.log('error while saving the user')
    res.json({
      error: 'No valid data provided for user'
    });
  }
};

module.exports = {
      userPost
  }