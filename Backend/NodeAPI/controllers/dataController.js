const Data = require('../models/data').Data;
const async = require('async');

exports.data_list = function(req, res, next) {
	Data.find({}).sort({createdAt: -1}).exec(function(err,datas){
		if(err) return next(err);
		res.json(datas);
	});
};

exports.add_data = function(req, res, next) {
	const data = new Data(req.body);
	data.save(function(err, data){
		if(err) return next(err);
		res.status(201);
		res.json(data);
	});
};

exports.delete_data = function(req, res, next) {
	Data.remove({ _id: req.params.dID}, function(err, data){		
		if(err) return next(err);
		res.json(data);							
	});
};