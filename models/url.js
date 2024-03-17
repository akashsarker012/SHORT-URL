import mongoose from 'mongoose';
const { Schema } = mongoose;

const urlSchema = new Schema({
 shortId:{
    type:String,
    required:true,
    unique:true,
 },
 redirectURL:{
    
 }
});