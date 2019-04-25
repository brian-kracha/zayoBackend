var express = require('express');
var router = express.Router();
var knex = require('../../knex')

let allowCrossDomain = (req, res, next)=> {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}

/* GET home page. */
router.get('/',allowCrossDomain, (req, res, next) => {
  let revenue
  knex("revenue").select('*').then((ret)=>{
      revenue=ret
      console.log('revenue',revenue);
      return knex("expense").select()
    }).then((exp)=>{
      console.log("expense",exp);
      res.status(200).send({
        "revenue": revenue,
        "expense": exp
      })
    })
  })



module.exports = router
