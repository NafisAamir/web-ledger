const mongoose=require("mongoose");

const recipeSchema=new mongoose.Schema({
    id:{type:String,required:true}
})
const recipeModel=mongoose.model("recipe",recipeSchema)
module.exports={
    recipeModel
}