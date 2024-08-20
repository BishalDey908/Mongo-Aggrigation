const roomModel = require("../models/roomModel")
const express=require("express")
const app= express()

const roomController = async(req,res) =>{
    const{room_name,room_code,capacity,gender,status} = req.body
    try{
     const response = await roomModel.create({room_name,room_code,capacity,gender,status})
     res.status(200).json({"msg":"Success","data":response})
     
    

    }catch(err){
        res.status(400).json({"msg":"error","data":err})
    }
}

module.exports = roomController