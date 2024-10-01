import mongoose, { Schema } from "mongoose"


const userSchema = new mongoose.Schema(
	{
		who_are_u : {
			type: string,
			required : [true, '"It is required"'],
			lowercase: true,

		},

		fullName : {
				type: string,
				required : [true, '"Name is required"'],
				lowercase: true,
				trim: true,
				index : true,
			 },

		username : {
			type: string,
			required : [true, '"userName is required"'],
			unique: true,
			lowercase: true,
			index : true,
			trim : true,
		 },

		email : {
			type: string,
			required : [true, 'email is required'],
			unique: true,
			lowercase: true,
			trim: true,
			index : true,
		 },
		password : {
			type: string,
			required : [true, 'Password is required'],
			unique: true,
			trim: true,
			
		 },	{timestamps: true},

	}


);

export const User = mongoose.model("User", userSchema)

