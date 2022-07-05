const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://admin:user123@project1.cfkyt.mongodb.net/WishingData?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

const WishSchema = new Schema({

    yname:String,
    fname:String,
    email:String
})

const wishdata = mongoose.model("wishdata" , WishSchema)
module.exports = wishdata