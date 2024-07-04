let path = require("path");
let express = require("express");

let router = express.Router();

const mongoose = require("mongoose")

const Data = require("./models/Data");

router.get("/",function(req,res){
    res.sendFile(path.resolve("./index.html"));
});

router.post('/create', async(req, res) => {
    console.log("doing a create")
    try {
        const aa = await Data.create({ident:85,name:"rocky",grade:11})
        console.log("done create")
        console.log(aa)
        res.json({error:true});
    } catch (error) {
        res.json({error:true});
    }
    
});

router.get('/read', async(req, res) =>{
    console.log("doing a read")
    try {
        const aa = await Data.find({ident:85})
        console.log("done read")
        console.log(aa)
        res.json({error:true});
    } catch (error) {
        res.json({error:true});
    }


});

router.put('/update', async(req, res) =>{
    console.log("doing a update")
    try {
        const aa = await Data.updateOne({ident:85},{ident:85,name:"koko",grade:16})
        console.log("done update")
        console.log(aa)
        res.json({error:true});
    } catch (error) {
        res.json({error:true});
    }


});
router.delete('/delete/:identifier', async(req, res) =>{
    console.log("doing a delete")
    try {
        const aa = await Data.deleteOne({ident:85})
        console.log("done delete")
        console.log(aa)
        res.json({error:true});
    } catch (error) {
        res.json({error:true});
    }


});
module.exports = router;

 