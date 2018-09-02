 authController = require('../controllers/auth');


module.exports = function(app){
    app.get('/',(req,res,next)=>{
        res.send({hi:'send'});
    })
    app.post('/signup',authController.signup);
    app.post('/signin',authController.signin);

}