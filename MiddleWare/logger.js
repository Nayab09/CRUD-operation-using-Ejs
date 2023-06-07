// ------using middelware
const moment = require('moment')  // install package moment (npm i momemt) to get time 
const logger = (req,res,next) =>
{
    console.log("Hello inside the middle ware");
   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}${moment().format()}`);
    next();

}

module.exports = logger;