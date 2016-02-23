 var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = yyyy + '-' + mm + '-' +dd;

var EditView = Backbone.View.extend({
	model: Player,
	initialize: function(){
	},
	events:{
		  "click #saveButton" : "savePlayer",
		  "click #addButton" : "savePlayer",
	},
	savePlayer: function(e){
		  var playerDetails= {
				name:$('#enameText').val(),
	  			team:$('#eteamText').val(),
	  			monitor:$('#emonitorText').val(),
	  			country:$('#ecountryText').val(),
	  			mouse:$('#emouseText').val(),
	  			mousepad:$('#emousepadText').val(),
	  			resolution:$('#eresolutionText').val(),
	  			monitorHz:$('#emonitorHzText').val(),
	  			aspectRatio:$('#easpectRatioText').val(),
	  			finalAspectRatio:$('#efinalAspectRatioText').val(),
	  			aspectRatioDescription:$('#easpectRatioDescriptionText').val(),
	  			sensitivity:$('#esensitivityText').val(),
	  			windowsSensitivity:$('#ewindowsSensitivityText').val(),
	  			hz:$('#ehzText').val(),
	  			zoomSensitivityRatio:$('#ezoomSensitivityRatioText').val(),
	  			xAxis:$('#exAxisText').val(),
	  			mPitch:$('#emPitchText').val(),
	  			mYaw:$('#emYawText').val(),
	  			mRawInput:$('#emRawInputText').val(),
	  			rinputExe:$('#erinputExeText').val(),
	  			mouseAcceleration:$('#emouseAccelerationText').val(),
	  			cm360:$('#ecm360Text').val(),
	  			lightboostBlurReduction:$('#elightboostBlurReductionText').val(),
	  			digitalVibranceSaturation:$('#edigitalVibranceSaturationText').val(),
	  			notes:$('#enotesText').val(),
	  			lastUpdate:today,
	  			picture:('placeholder.png'),
	  		};
		  
		  if (($('#eidText').val()) == null){
			  
			  this.model.save({
				  	id:parseInt($('#eidText').val()),
					name:$('#enameText').val(),
		  			team:$('#eteamText').val(),
		  			monitor:$('#emonitorText').val(),
		  			country:$('#ecountryText').val(),
		  			mouse:$('#emouseText').val(),
		  			mousepad:$('#emousepadText').val(),
		  			resolution:$('#eresolutionText').val(),
		  			monitorHz:$('#emonitorHzText').val(),
		  			aspectRatio:$('#easpectRatioText').val(),
		  			finalAspectRatio:$('#efinalAspectRatioText').val(),
		  			aspectRatioDescription:$('#easpectRatioDescriptionText').val(),
		  			sensitivity:$('#esensitivityText').val(),
		  			windowsSensitivity:$('#ewindowsSensitivityText').val(),
		  			hz:$('#ehzText').val(),
		  			zoomSensitivityRatio:$('#ezoomSensitivityRatioText').val(),
		  			xAxis:$('#exAxisText').val(),
		  			mPitch:$('#emPitchText').val(),
		  			mYaw:$('#emYawText').val(),
		  			mRawInput:$('#emRawInputText').val(),
		  			rinputExe:$('#erinputExeText').val(),
		  			mouseAcceleration:$('#emouseAccelerationText').val(),
		  			cm360:$('#ecm360Text').val(),
		  			lightboostBlurReduction:$('#elightboostBlurReductionText').val(),
		  			digitalVibranceSaturation:$('#edigitalVibranceSaturationText').val(),
		  			notes:$('#enotesText').val(),
		  			lastUpdate:today,
				  	picture:('placeholder.png'),

					  },{
						  success:function(player){
							  alert("Successfully added player")
							  $('#eidText').val(player.id);
							  location.reload();
						  }
					  });
			  }
		  else{
			  this.model.save({
				  	id:parseInt($('#eidText').val()),
					name:$('#enameText').val(),
		  			team:$('#eteamText').val(),
		  			monitor:$('#emonitorText').val(),
		  			country:$('#ecountryText').val(),
		  			mouse:$('#emouseText').val(),
		  			mousepad:$('#emousepadText').val(),
		  			resolution:$('#eresolutionText').val(),
		  			monitorHz:$('#emonitorHzText').val(),
		  			aspectRatio:$('#easpectRatioText').val(),
		  			finalAspectRatio:$('#efinalAspectRatioText').val(),
		  			aspectRatioDescription:$('#easpectRatioDescriptionText').val(),
		  			sensitivity:$('#esensitivityText').val(),
		  			windowsSensitivity:$('#ewindowsSensitivityText').val(),
		  			hz:$('#ehzText').val(),
		  			zoomSensitivityRatio:$('#ezoomSensitivityRatioText').val(),
		  			xAxis:$('#exAxisText').val(),
		  			mPitch:$('#emPitchText').val(),
		  			mYaw:$('#emYawText').val(),
		  			mRawInput:$('#emRawInputText').val(),
		  			rinputExe:$('#erinputExeText').val(),
		  			mouseAcceleration:$('#emouseAccelerationText').val(),
		  			cm360:$('#ecm360Text').val(),
		  			lightboostBlurReduction:$('#elightboostBlurReductionText').val(),
		  			digitalVibranceSaturation:$('#edigitalVibranceSaturationText').val(),
		  			notes:$('#enotesText').val(),
		  			lastUpdate:today,
				  	picture:('placeholder.png'),
				  	
				  },{
					  success:function(Player){
						  alert("Successfully added/edited player");
						  location.reload();
					  }
				  });
			  }
		  return false;
	  },
	  add: function(e){
		  $('#saveButton').hide();
		  id:$('#eidText').val();
		  name:$('#enameText').val();
		  team:$('#eteamText').val();
		  monitor:$('#emonitorText').val();
		  country:$('#ecountryText').val();
		  mouse:$('#emouseText').val();
		  mousepad:$('#emousepadText').val();
		  resolution:$('#eresolutionText').val();
		  monitorHz:$('#emonitorHzText').val();
		  aspectRatio:$('#easpectRatioText').val();
		  finalAspectRatio:$('#efinalAspectRatioText').val();
		  aspectRatioDescription:$('#easpectRatioDescriptionText').val();
		  sensitivity:$('#esensitivityText').val();
		  windowsSensitivity:$('#ewindowsSensitivityText').val();
		  hz:$('#ehzText').val();
		  zoomSensitivityRatio:$('#ezoomSensitivityRatioText').val();
		  xAxis:$('#exAxisText').val();
		  mPitch:$('#emPitchText').val();
		  mYaw:$('#emYawText').val();
		  mRawInput:$('#emRawInputText').val();
		  rinputExe:$('#erinputExeText').val();
		  mouseAcceleration:$('#emouseAccelerationText').val();
		  cm360:$('#ecm360Text').val();
		  lightboostBlurReduction:$('#elightboostBlurReductionText').val();
		  digitalVibranceSaturation:$('#edigitalVibranceSaturationText').val();
		  notes:$('#enotesText').val();
		  lastUpdate:today;
		  picture:('placeholder.png');
		  return false;
	  },
  render: function(){
	 var template= _.template($('#Player-edit').html())( this.model.toJSON());
	 return this.$el.html(template);
  }
});