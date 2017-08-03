const express = require('express');
const router = express.Router();


//Index
router.get('/', function(req, res){
	res.render('index', {layout: false});
});

router.get('/contact', function(req, res){
	res.render('contact', {layout: false});
});

router.get('/newborn', function(req, res){
	res.render('newborn', {layout: false});
});

router.get('/newborn/imani', function(req, res){
	res.render('imani', {layout: false});
});

router.get('/maternity/kmitch', function(req, res){
	res.render('kmitch', {layout: false});
});

router.get('/couples/vtyl', function(req, res){
	res.render('vtyl', {layout: false});
});

router.get('/newborn/alyrica', function(req, res){
	res.render('alyrica', {layout: false});
});

router.get('/couples', function(req, res){
	res.render('couples', {layout: false});
});

router.get('/maternity', function(req, res){
	res.render('maternity', {layout: false});
});

router.get('/family', function(req, res){
	res.render('family', {layout: false});
});

router.get('/family/cao', function(req, res){
	res.render('cao', {layout: false});
});

router.get('/adventure', function(req, res){
	res.render('adventure', {layout: false});
});

router.get('/portraits', function(req, res){
	res.render('portraits', {layout: false});
});


module.exports = router;