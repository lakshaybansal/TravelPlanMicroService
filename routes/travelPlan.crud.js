/**
 * Created by lenovo on 30-05-2016.
 */

var express = require('express');
var mongoose=require('mongoose');
var router = express.Router();
var TravelPlanSchema= require('../models/travelPlan.model');
var TravelPlan= mongoose.model('TravelPlan', TravelPlanSchema,'TravelPlans_Collection');

router.get('/travelPlan/:id', function (req, res, next) {
  var travelPlanId=req.params.id;
    TravelPlan.getTravelPlan(travelPlanId).then(function (data) {
        res.send(data);
    });

});
router.post('/travelPlan', function (req, res, next) {
    travelPlandata=req.body;
    TravelPlan.postTravelPlan(travelPlandata).then(function () {
  res.send("data saved successfully");
    });
});
router.put('/travelPlan/:id', function (req, res, next) {
             var travelPlanId=req.params.id;
      TravelPlan.putTravelPlan(id,travelPlanNew).then(function () {
      res.send("data updated successfully");
    });

});
router.delete('/travelPlan/:id', function (req, res, next) {
     var travelPlanId=req.params.id;
    TravelPlan.deleteTravelPlan(travelPlanId).then(function () {
     res.send("travelplan deleted");
    });

});


module.exports = router;
