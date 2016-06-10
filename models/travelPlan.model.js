/**
 * Created by lenovo on 30-05-2016.
 */
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TravelPlanSchema = mongoose.Schema({
  components:[{
  type:String,
  state:String,
  essential:Schema.Types.Mixed,
  childServices:Schema.Types.Mixed
}]
});


TravelPlanSchema.statics.getTravelPlan=function getTravelPlan(travelPlanId) {
      var deferred = Q.defer();
      this.findOne({_id:travelPlanId})
                .exec(function(err,data){
                  travelPlanData = data;
                   deffered.resolve(travelPlanData);
                 });

    return deferred.promise;
}

TravelPlanSchema.statics.postTravelPlan=function postTravelPlan(travelPlandata) {
    var deferred = Q.defer();
      this.create(travelPlandata,function(err,data){
      if ( err ) console.log(err);
      deferred.resolve(data._id);
    });


    return deferred.promise;
}

TravelPlanSchema.statics.putTravelPlan=function putTravelPlan(id,travelPlanNew) {
    var deferred = Q.defer();

     this.findByIdAndUpdate(id,travelPlanNew,{new:true},function(err,data){
       if ( err ) console.log(err);
       deferred.resolve(data._id);
     });
    return deferred.promise;
}

TravelPlanSchema.statics.deleteTravelPlan=function deleteTravelPlan(id) {
    var deferred = Q.defer();
    this.findByIdAndRemove(id, function (err,data) {
        if(err)  console.log(err);
        deferred.resolve(data);
 })
    return deferred.promise;
}

module.exports=TravelPlanSchema;
