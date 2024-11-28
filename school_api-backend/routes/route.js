const express = require("express");
const router = express.Router();
const con = require("../utils/connection.js");



router.post("/addSchool", async(req,res) =>{
    try{
        var Name = req.body.Name;
        var Address = req.body.Address;
        var Latitude = req.body.Latitude;
        var Longitude = req.body.Longitude;
        
    con.connect(function (error) {
        if( error) throw error;
         
        var sql =  "INSERT INTO schools(Name,Address,Latitude, Longitude) VALUES(?, ?, ?, ?)";
        con.query(sql,[Name,Address,Latitude, Longitude],function(error,result) {
            if (error) throw error;
            res.send(`Your registration is successful!`);
        });
    })
    }catch(error){
        console.log(error);
    }
})



router.get("/listSchools",(req, res) =>{
    try{
     con.query("SELECT * FROM schools",function(err,user){
        if(err){
            console.log(err);
        }else{
           res.send(user);
        }
     })

    }catch(error){
        console.log(error);
    }
  })
module.exports = router;