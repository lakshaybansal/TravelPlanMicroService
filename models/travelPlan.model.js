/**
 * Created by lenovo on 30-05-2016.
 */
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TravelPlanSchema = mongoose.Schema({
  travelPlanId:String,
  components:[{
  type:String,
  cityName:{type:String,required:false},
  essentials:Schema.Types.Mixed,
  childServices:Schema.Types.Mixed,}]
});
var TravelPlan= mongoose.model('TravelPlan', TravelPlanSchema,'TravelPlans_Collection');


var services = {};

services.getTravelPlan = getTravelPlan;
services.postTravelPlan = postTravelPlan;
services.putTravelPlan = putTravelPlan;
services.deleteTravelPlan = deleteTravelPlan;

function getTravelPlan(travelPlanId) {
      var deferred = Q.defer();
      TravelPlan.findOne({travelPlanId: travelPlanId})
                .exec(function(err,data){
                  travelPlanData = data;
                   deffered.resolve(travelPlanData);
                 })

    return deferred.promise;
}

function postTravelPlan(travelPlandata) {
    var deferred = Q.defer();
    var TravelPlandata= new TravelPlan(travelPlandata);

    TravelPlandata.save(function(err){
      if ( err ) console.log(err);
      console.log(TravelPlandata.travelPlanId +" Saved Successfully");
    });


    return deferred.promise;
}

function putTravelPlan(id,travelPlanNew) {
    var deferred = Q.defer();
     var TravelPlandata= {
       travelPlanId:id,
       components:travelPlanNew
     }
     TravelPlandata.save(function(err){
       if ( err ) console.log(err);
       console.log(TravelPlandata.travelPlanId +" Updated Successfully");
     });
    return deferred.promise;
}

function deleteTravelPlan(id) {
    var deferred = Q.defer();
    TravelPlan.remove({ travelPlanId: id }, function (err) {
        if(err)  console.log(err);
 })
    return deferred.promise;
}

module.exports=services;
