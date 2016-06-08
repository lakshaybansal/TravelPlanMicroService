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


TravelPlanSchema.statics.getTravelPlan=function getTravelPlan(travelPlanId) {
      var deferred = Q.defer();
      this.findOne({travelPlanId: travelPlanId})
                .exec(function(err,data){
                  travelPlanData = data;
                   deffered.resolve(travelPlanData);
                 })

    return deferred.promise;
}

TravelPlanSchema.statics.postTravelPlan=function postTravelPlan(travelPlandata) {
    var deferred = Q.defer();
    var TravelPlandata=  this.create(travelPlandata);
      TravelPlandata.save(function(err){
      if ( err ) console.log(err);
      console.log(TravelPlandata.travelPlanId +" Saved Successfully");
    });


    return deferred.promise;
}

TravelPlanSchema.statics.putTravelPlan=function putTravelPlan(id,travelPlanNew) {
    var deferred = Q.defer();
     var TravelPlandata= new this.create(
      { travelPlanId:id
       components:travelPlanNew
     });
     TravelPlandata.save(function(err){
       if ( err ) console.log(err);
       console.log(TravelPlandata.travelPlanId +" Updated Successfully");
     });
    return deferred.promise;
}

TravelPlanSchema.statics.deleteTravelPlan=function deleteTravelPlan(id) {
    var deferred = Q.defer();
    this.remove({ travelPlanId: id }, function (err) {
        if(err)  console.log(err);
 })
    return deferred.promise;
}

module.exports=services;
