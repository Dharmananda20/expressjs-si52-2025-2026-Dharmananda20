import mongoose from "mongoose"

const LinkSchema = new mmongoose.Schema(
    {
        title : {
            type : String,
            required : [true,"Display name wajib di isi"],
            unique : true,
            trim : true
        },
        icon : {
            type : String,
            required : [true,"Profile pitcure wajib di isi"],
            unique : true,
            trim : true
        },
        url :{
            type : String,
            minLength : [10,"minimal 10 karakter"],
            maxLength : [150,"maximal 150 karakter"],
            required : [true,"url wajib di isi"],
            trim: true 
        },
        user :{
            type : mongoose.Schema.Types.ObjectId,
            ref: "true"
            
        }
        },
        {
            timestamps : true
        }
)

const userModel = mongoose.Model("user", userSchema)

export default userModelv