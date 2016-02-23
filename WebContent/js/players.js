var rootURL = "./rest/players";
var Player = Backbone.Model.extend({
	urlRoot:rootURL,
	defaults:{       
		"id":"", 
		"name":"",     
		"team":"",  
		"monitor":"", 
		"country":"",  
		"mouse":"",      
		"mousepad":"",  
		"resolution":"",
		"monitorHz":"",
		"aspectRatio":"",
		"finalAspectRatio":"",
		"aspectRatioDescription":"",
		"sensitivity":"",
		"windowsSensitivity":"",
		"hz":"",
		"zoomSensitivityRatio":"",
		"xAxis":"",
		"mPitch":"",
		"mYaw":"",
		"mRawInput":"",
		"rinputExe":"",
		"mouseAcceleration":"",
		"cm360":"",
		"lightboostBlurReduction":"",
		"digitalVibranceSaturation":"",
		"notes":"",
		"lastUpdate":"",
		"picture":""
		},
  initialize: function(){
    this.on('change', function(){
    });
  }
});

var PlayerList = Backbone.Collection.extend({
	model: Player,
	url: "http://localhost:8080/individual_project/rest/players/"});