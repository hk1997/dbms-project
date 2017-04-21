var express = require('express');
var router = express.Router();var mysql=require('mysql');
var connection=mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'aadhaar'
});

connection.connect(function(err)
{
	if(err)
		console.log(err);
	else
		console.log('connected successfully to the database');	
});


/*//get record of all the doctors
router.get('/', function(req, res, next) {
	connection.query('select * from doctor',function(err,result)
	{
		if(err)
			console.log(err);
		else
			res.json(result);
	});
});

//to add doctors
router.post('/add',function(req,res,next)
{
		console.log(req.body);
	connection.query('insert into doctor set ?',req.body,function(err)
	{
		if(err)
			console.log(err);
		else
			console.log('added');
		res.send();
	})
});

//to list doctors as per specialization
router.get('/list',function(req,res,next)
{
	var sp="flirt";
	//console.log(sp);
	var query="select * from doctor where specialization="+"\""+sp+"\"";
	connection.query(query,
		function(err,result)
	{
		if(err)
			console.log(err);
		else
			res.json(result);
	});
});
//to return list as per search string
router.post('/list',function(req,res,next)
{
	var sp=req.body.sp;
	//console.log(sp);
	var query="select * from doctor where specialization like"+"\""+sp+"%\"";
	connection.query(query,
		function(err,result)
	{
		if(err)
			console.log(err);
		else
			res.json(result);
	});

});
*/
router.get('/',function(req,res,next)
{
	connection.query('select * from cidr',function(err,result)
	{
		if(err)
			throw err;
		else
			console.log(result);
	})
	res.send();
});

router.post('/hospitals',function(req,res,next)
{
	var hid=req.body.Hid;
	connection.query('select * from hospital where Hid='+hid,function(err,result)
	{
		if(err)
			throw err;
		else
			{
				/*console.log(result.length);
				*/if(result!=0)
				{
				res.json({Hid:result[0].Hid,Address:result[0].Address,Name:result[0].Name});}
				else
					res.json(null);
			}
	});
	
});
router.post('/persons',function(req,res,next)
{
	var uid=req.body.Uid;
	connection.query('select * from cidr where Uid='+uid,function(err,result)
	{
		if(err)
			throw err;
		else
			{
				if(result.length!=0)
					res.json(result[0]);
				else
					res.json(null);
			}
	});
	
});

router.post('/insurance',function(req,res,next)
{
	var uid=req.body.Uid;
	connection.query('select * from medical_insurance where Uid='+uid,function(err,result)
	{
		if(err)
			throw err;
		else
			{
				console.log(result);
				res.json(result);
			}
	})
});

module.exports = router;
