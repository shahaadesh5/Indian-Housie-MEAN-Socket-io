var express     = require("express");
var router      = express.Router();

router.get("/admin", (req, res,next)=>{
    io.on('connection', socket=>{
        console.log("User connected");
    });
});

module.exports = router;