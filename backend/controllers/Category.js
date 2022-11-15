const { request } = require("express");
const { validationResult } = require("express-validator");
const CategoryModel = require("../models/Category");

class Category {
    async create(req, res) {
        const errors = validationResult(req);
        const {name} = req.body;
        if(errors.isEmpty()) {
            const exist = await CategoryModel.findOne({name});
            if(!exist){
                await CategoryModel.create({name});
                res.status(201).json({message: 'Category has been created!'});
            } else{
                return res.status(401).json({errors: [{msg: `${name} already exists!!`}]});
            }
        } else{
            return res.status(401).json({errors: errors.array()});
        }
    }
}

module.exports = new Category;