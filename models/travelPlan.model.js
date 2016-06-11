/**
 * Created by lenovo on 30-05-2016.
 */
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TravelPlanSchema = mongoose.Schema({
  components:[
     {
      types:String,
      state:String,
      essential:{ type:Schema.Types.Mixed, default:{} },
      childServices:{ type:Schema.Types.Mixed,default:{} }
     }
  ]
},{minimize: false});

TravelPlanSchema.statics.getTravelPlan=function getTravelPlan(travelPlanId) {
      var deferred = Q.defer();
      this.findOne({_id:travelPlanId})
                .exec(function(err,data){
                  if(err) deferred.resolve(err);
                  console.log("Inside error",err);
                  travelPlanData = data;
                  console.log("Inside getTravelPlan",data);
                   deferred.resolve(travelPlanData);
                 });

    return deferred.promise;
}

TravelPlanSchema.statics.postTravelPlan=function postTravelPlan(travelPlandata) {
    var deferred = Q.defer();
    console.log("Inside postTravelPlan model",travelPlandata);
      this.create(travelPlandata,function(err,data){
      if ( err ) deferred.resolve(err);
      console.log(data._id);
      console.log('Inside Callback of postTravelPlan method',data);
      deferred.resolve(data);
    });
    return deferred.promise;
}

TravelPlanSchema.statics.putTravelPlan=function putTravelPlan(id,travelPlanNew) {
    var deferred = Q.defer();

     this.findByIdAndUpdate(id,travelPlanNew,{new:true},function(err,data){
       if ( err ) deferred.resolve(err);
       deferred.resolve(data);
     });
    return deferred.promise;
}

TravelPlanSchema.statics.deleteTravelPlan=function deleteTravelPlan(id) {
    var deferred = Q.defer();
    this.findByIdAndRemove(id, function (err,data) {
        if(err)  deferred.resolve(err);
        deferred.resolve(data);
 })
    return deferred.promise;
}

module.exports=TravelPlanSchema;
