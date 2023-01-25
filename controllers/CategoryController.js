const Category = require('../models/Category');

exports.add = (req,res) => {

    const newCat = new Category({
        name:req.body.name
    })

    newCat.save();
    res.status(200).json(newCat);

}