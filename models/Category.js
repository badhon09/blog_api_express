const mongoose = require('mongoose')

const CatSchema = new Schema({
	name:{
		type:String,
		required:true
		
	},
	

},
{timestamps:true}
);

module.exports = mongoose.model('Category',CatSchema);
