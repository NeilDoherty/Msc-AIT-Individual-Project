var rootURL = "http://localhost:8080/individual_project/rest/players";
var rootURL3 = "http://localhost:8080/individual_project/rest/logins";
var payload = {};
var array1 = [];
var array2 = [];

var findById= function(currentPlayer){
	$.ajax({
		type: 'GET',
		url: "http://localhost:8080/individual_project/rest/players/"+currentPlayer,
		dataType: "json",
		success: renderList2
	});
};

var renderList = function(data) {
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
	
	$('#playersList li').remove();
	$.each(list, function(index, player) {
		$('#playersList').append('<li><a href="#" data-identity="' + player.id + '">'+player.name+'</a></li>');
	});
};

var renderList3 = function(data) {
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
	$('#userList li').remove();
	$.each(list, function(index, player3) {
		$('#userList').append('<li><a href="#" data-identity="' + player3[0] + '">'+player3[1]+'</a></li>');
	});
};

var renderList2 = function(data){
	var list = data == null ? [] : (data instanceof Array ? data : [data]);

	$.each(list,function(index,player){
		$('#tierText').val(data.name);
		$('#monitorText').val(data.monitor);
		$('#teamText').val(data.team);
		$('#countryText').val(data.country);
		$('#mouseText').val(data.mouse);
		$('#mousepadText').val(data.mousepad);
		$('#resolutionText').val(data.resolution);
		$('#picture').attr('src', 'images/' + data.picture);
	});
}

var findAll = function() {
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json",
		success: renderList,
	});
};

var findAll3 = function() {
	$.ajax({
		type: 'GET',
		url: rootURL3,
		dataType: "json",
		success: renderList3,
	});
};

var showDetails=function(playerId){
	var currentPlayer= new Player({id:playerId});
	currentPlayer.fetch({
		success:function(currentPlayer){
			$('#detailsModal2').html(new EditView({model:currentPlayer}).render());
			$('#addButton').hide();
			$('#saveButton').hide();
		}
	});
};

var test=function(playerId){
}

var editDetails=function(playerId){
	
	var currentPlayer = new Player({id:playerId});
	currentPlayer.fetch({
		success:function(currentPlayer){
			$('#detailsModal2').html(new EditView({model:currentPlayer}).render());
			$('#addButton').hide();
			$('#saveButton').show();
			$("#testDiv").show();
			$("#mainArea").hide();
			$("#rightArea").hide();
			$("#rightArea2").hide();
			$('#modal').modal('hide');
			$('#modal2').modal('show');
		}
	});
};

var newPlayer=function(playerId){
	$("#testDiv").hide();
	$('#mainArea').hide();
	$('#rightArea').hide();
	$("#rightArea2").hide();
	var currentPlayer = new Player();
	$('#detailsModal2').html(new EditView({model:currentPlayer}).render());
	$('#saveButton').hide();
};

var deletePlayer=function(playerId){
	var currentPlayer = new Player({id:playerId});
	
	if(confirm("Are you sure you want to delete this player?")){
		currentPlayer.destroy();
		location.reload();
	}
	
};

var renderNewPlayers=function(){
	$.ajax({
		type: 'GET',
		url: "http://localhost:8080/individual_project/rest/players",
		dataType:"json",
		success: function(data){
			var list = data == null ? [] : (data instanceof Array ? data : [data]);
			var cases = [];
			var inc = 0;
			var newPlayers;
			var newest = list.length-3;
			
			$.each(list, function(index, player) {
				data.push(player);
				if(cases.indexOf(player.resolution)==-1){
					cases.push(player.resolution);
				}
				if(inc >= newest){
					player.picture = "15.jpg";
					if (player.picture == "15.jpg") {
						player.picture = "placeholder.png";
					}
					newPlayers = '<div id="featuredDiv"><div class="intro-right" id="intro-right"><br><h3>'+player.name +'</h3><ul><li><b>Player name:</b> '+player.monitor +
					'</li><li><b>Team:</b> '+player.team + '</li><li><b>Country:</b> '+player.country +
					'</li><li><b>Mouse:</b> '+player.mouse +'</li><li><b>Mousepad:</b> '+player.mousepad +
					'</li><li><b>Resolution:</b> '+player.resolution+'</li></ul></div>'+
					'<div class="intro-right" id="intro-right"><img src=images/'+player.picture+' width="25%" height="25%"></div></div><hr>';
					$('#featured').append(newPlayers);
				}
				inc ++;
			});
		}			
	});
}

$(document).ready(function () {	
	$.get('http://localhost:8080/individual_project/rest/logins', function(data) {
		   $.extend(
		      true,      //this forces the object to be deep copied
		      payload,   //the target object to extend
		      data       //Extend to this object
		   );
		}, 'json').complete(function(){
			array1 = $.map(payload, function(data, index) {
				localStorage.setItem(array1,[data].toString()); 
			    return [data].toString();
			});
		   //do what ever you want here with the extended payload
		});
	
	$('#mainArea').hide();
	$('#rightArea').hide();
	$("#testDiv").hide();
	$('#mainArea2').hide();
	$('#transfersHeader').hide();
	
	$('#btnSave').click(function() {
		if ($('#userId').val() == '')
			addUser();
		else
			updateUser();
		return false;
	});
	
	$('#btnDelete').click(function() {
		deleteUser();
		return false;
	});
	
	$('#newUserButton').click(function() {
		newUser();
		return false;
	});
	
	var loginVar = localStorage.getItem('loginVar');
	var loggedinUser = localStorage.getItem('loggedinUser');
	
	
	if ((loginVar == null) || (loginVar == 0)) {		//logged out
		$('#urH1').show();
		$('#urContainer').show();
		$('#urH21').show();
		$('#urH22').show();
		$('#urp1').show();
		$('#urp2').show();
		$('#urp3').show();
		$('#urp4').show();
		$('#rp1').hide();
		$('#ap1').hide();
		$("#rightArea2").show();
		$('#navUsers').hide();
		$('#menuLogin').show();
		$('#menuRegister').show();
		$('#menuLogout').hide();
		$("#transfers").hide();
		$('#transfersHeader').hide();
		$("#testDiv").hide();
	}
	
	else if (loginVar == 1) {	//Admin
		$('#urH1').hide();
		$('#urContainer').hide();
		$('#urH21').hide();
		$('#urH22').hide();
		$('#urp1').hide();
		$('#urp2').hide();
		$('#urp3').hide();
		$('#urp4').hide();
		$('#rp1').hide();
		$('#ap1').show();
		$("#rightArea2").hide();
		$("#menuLogin").hide();
		$('#menuRegister').hide();
		$("#menuLogout").show();
		$("#transfers").show();
		$('#transfersHeader').show();
		$("#testDiv").show();
	}
	
	else if (loginVar == 2) {	//Registered user
		$('#urH1').hide();
		$('#urContainer').hide();
		$('#urH21').hide();
		$('#urH22').hide();
		$('#urp1').hide();
		$('#urp2').hide();
		$('#urp3').hide();
		$('#urp4').hide();
		$('#rp1').show();
		$('#ap1').hide();
		$("#rightArea2").hide();
		$('#navUsers').hide();
		$("#menuLogin").hide();
		$('#menuRegister').hide();
		$("#menuLogout").show();
		$("#transfers").show();
		$('#transfersHeader').show();
		$("#editButton").hide();
		$("#testDiv").show();
	}
	
	determineEmails();
	
	//findAll();
	
	findAll3();
	
	//renderNewPlayers();
	
	$('.carousel').carousel({
		interval: 5000,
		pause: 'none'
	}) 
	
	$(document).on("click", '#infoButton', function(){
		$("#form-horizontal").hide();
		$("#form-horizontal2").hide();
		$("#testDiv").hide();
		$("#rightArea2").hide();
		$("#mainArea").show();
		$("#rightArea").show();
		findById2($(this).data('identity'));
	});
	$(document).on("click", '#editButton', function(){
		editDetails($(this).data('identity'));
	});
	
	$(document).on("click", '#uploadButton', function(){
		alert("Successfully uploaded image");
		window.location.reload(true);
	});
	
	$(document).on("click", '#deleteButton', function(){
		console.log(loginVar);
		if (loginVar == 1) {
			deletePlayer($(this).data('identity'));
		}
	});
	 
	$(document).on("click", '#newButton', function(){
		console.log(loginVar);
	 if ((loginVar == 1) || (loginVar == 2)) {
	
		 newPlayer(); 
	 }
	});
	
	 $("#playerList").dataTable({
	        "bFilter": true,
	        "sPaginationType": "full_numbers",
	        "aoColumns": [
	            { "mData":function(player){
	                     return '<a id="infoButton" title="'+player.country+'" data-identity ="'+player.flag+'"><img src="images/flags/' + player.country + '.png" width="18px" height="14px"></a>'}
	            },
	            { "mData": "name" },
	            { "mData": "team" },
	            { "mData": "lastUpdate" },
	            {
		        	 sortable: false,
		        	 "mData":function(player){
	                     return '<a href="javascript:void(0)" id="infoButton" data-toggle="modal" data-target="#modal" data-identity ="'+player.id+'"><img src="images/info.png" width="14px" height="14px"></a>'}
	            },
	            {
		        	 sortable: false,
		        	 "mData":function(player){
		        		 var loginVar = localStorage.getItem('loginVar');
		        		 var tgl;
		        		 if ((loginVar == 1) || (loginVar == 2)) {
		        			 tgl = player.id;
		        		 } else {
		        			 tgl = "";
		        		 }
	                     return '<a href="javascript:void(0)" id="editButton" data-toggle="modal" data-target="#modal" data-identity ="'+tgl+'"><img src="images/edit.png" width="14px" height="14px"" ></a>'}
		        		 
	            }, 
	            {
		        	 sortable: false,
		        	 "mData":function(player){
		        		 var loginVar = localStorage.getItem('loginVar');
		        		 var tgl;
		        		 if ((loginVar == 1) || (loginVar == 2)) {
		        			 tgl = "id=\"deleteButton\"";
		        		 } else {
		        			 tgl = "";
		        		 }
	                     return '<a href="javascript:void(0)"'+ tgl + 'data-identity ="'+player.id+'" ><img src="images/delete.png" width="14px" height="14px""  ></a>'}
	            }
	        ],
	        "bProcessing": true,
	        "bServerSide":true,
	        "sAjaxSource": "rest/players"
	    });

	 
	 $('#navLogin').click(function() {
		 $(this).hasClass('keep_open')
	 });
	 
	 $('#loginButton').click(function() {
			if (($('#password').val() == "") || ($('#username').val() == "")){
				 $("#invalidMessage").modal();
		        return false;
		    } else {
		    	takeDetails();
		    }
			return false;
	 });
	 
	 $('#registerButton').click(function() {
			if (($('#passwordRegister').val() == "") || ($('#emailRegister').val() == "")){
				 $("#invalidMessage").modal();
		        return false;
		    } else if ($('#passwordRegister').val() != $('#passwordConfirmRegister').val()){
			        return false;
			     
		    } else {
		    	addUserRegistration();
		    }
			return false;
	 });
	
	 $('#logoutButton').click(function() {
		 loginVar = null;
		 localStorage.setItem('loginVar', 0);
		 localStorage.setItem('loggedinUser', "");
		 window.location.reload(true);
	 });
});

function takeDetails() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    approveDetails(username, password);
}

function renderEmail(login) {
	var invalid = 0;
	var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
	$('#loginId').val(login.id);
	$('#email').val(login.email);
	$('#password').val(login.password);
	for (var i = 0; i < login.length; i++){
    	if ((login[i][1] == username) && (login[i][2] == password)){
    		if (login[i][3] == '1') {
    			var credOut = 'Administrator';
    			loginVar = 1;
	    		localStorage.setItem('loginVar', 1);
	    		localStorage.setItem('loggedinUser', login[i][1]);
    		}
    		else if (login[i][3] == '2') {
    			var credOut = 'Registered user';
    			loginVar = 2;
	    		localStorage.setItem('loginVar', 2);
	    		localStorage.setItem('loggedinUser', login[i][1]);
    		}
    		else {
    			localStorage.setItem('loggedinUser', "");
    		}
            window.location.reload(true);
            invalid = 1;
    	}
	}
	if (invalid == 0){
			$("#invalidMessage").modal();
    }
}

var approveDetails = function(username) {
	$.ajax({
		type: 'GET',
		url: "http://localhost:8080/individual_project/rest/logins",
		dataType: "json",
		success: renderEmail,
	});
};

var determineEmails = function() {
	$.ajax({
		type: 'GET',
		url: "http://localhost:8080/individual_project/rest/logins",
		dataType: "json",
		success: determineEmail,
	});
};

function determineEmail(login) {
	var loggedinUser = localStorage.getItem('loggedinUser');
	if ((loggedinUser != "") || (loggedinUser != null)) {
		var value = loggedinUser;
	} else {
		var value = "";
	}
	$('.emailMessage').html(value);
}

$(document).on("click", '#userList a', function(){
	$('#mainArea2').show();
	findById($(this).data('identity'));
});

var findById= function(searchKey) {
	$.ajax({
		type:		'GET',
		url:		"./rest/logins/" + searchKey,
		dataType:	"json",
		success:	renderList4
	});
};

var findById2= function(searchKey) {
	$.ajax({
		type:		'GET',
		url:		"./rest/players/" + searchKey,
		dataType:	"json",
		success:	renderList5
	});
};

var renderList4= function(data){
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
	$.each(list,function(index,user){
		$('#userId').val(data.id);
		$('#userEmail').val(data.email);
		$('#userPassword').val(data.password);
		$('#userCredentials').val(data.credentials);
		if (data.credentials == 1) {
			$("#userCredentialsDropdown").val("dropdownAdmin");
		} else {
			$("#userCredentialsDropdown").val("dropdownRegisteredUser");
		}
	});
}

var addUser = function() {
	$.ajax({
		type:			'POST',
		contentType:	'application/json',
		url:			rootURL3,
		dataType:		"json",
		data:			formToJSON(),
		success:		function(data, textStatus, jqXHR) {
							alert('User created successfully');
							window.location.reload(true);
						},
		error:			function(jqXHR, textStatus, errorThrown) {
							alert('addUser error: ' + textStatus);
						}
	});
};

var updateUser=function () {
	$.ajax({
		type:			'PUT',
		contentType: 	'application/json',
		url:			rootURL3,
		dataType: 		"json",
		data: 			formToJSON(),
		success: function(data, textStatus, jqXHR){
			alert('User updated successfully');
			window.location.reload(true);
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updateUser error: ' + textStatus);
		}
	});
};

var addPlayer = function() {
	$.ajax({
		type:			'POST',
		contentType:	'application/json',
		url:			rootURL,
		dataType:		"json",
		data:			formToJSON8(),
		success:		function(data, textStatus, jqXHR) {
							alert('User created successfully');
							
						},
		error:			function(jqXHR, textStatus, errorThrown) {
							alert('addUser error: ' + textStatus);
						}
	});
};

var addUserRegistration = function() {
	$.ajax({
		type:			'POST',
		contentType:	'application/json',
		url:			rootURL3,
		dataType:		"json",
		data:			formToJSON2(),
		success:		function(data, textStatus, jqXHR) {
							alert('Registration successful');
							window.location.reload(true);
						},
		error:			function(jqXHR, textStatus, errorThrown) {
							alert('addUser error: ' + textStatus);
						}
	});
};

var deleteUser=function () {
	$.ajax({
		type: 'DELETE',
		url: rootURL3 + '/' + $('#userId').val(),
		success: function(data, textStatus, jqXHR){
			alert('User deleted successfully');
			window.location.hash = 'users';
			window.location.reload(true);

		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('deleteUser error');
		}
	});
};

function formToJSON() {
	var userId = $('#userId').val();
	var credString;
	if ($("#userCredentialsDropdown").val() == ("dropdownAdmin")) {
		credString = "1"
	} else {
		credString = "2"
	}
	return JSON.stringify({
		"id":			userId == "" ? null : userId,
		"email":		$('#userEmail').val(),
		"password":		$('#userPassword').val(),
		"credentials":	credString,
	});
};

function formToJSON2() {
	return JSON.stringify({
		"id":			null,
		"email":		$('#emailRegister').val(),
		"password":		$('#passwordRegister').val(),
		"credentials":	2,
	});
};

var renderList5= function(data){
	var list = data == null ? [] : (data instanceof Array ? data : [data]);
	var uploadForm;
	uploadForm = '<div id="testDiv"><form action="rest/files/upload" method="post" enctype="multipart/form-data"><p>Select a file : <input type="file" name="file" size="50" /></p><input type="submit" id="uploadButton" class="'+ data.id + '"value="Upload It" /></form></div>'
	$.each(list,function(index,wine){
		$('#nameList').val(data.name);
		$('#teamList').val(data.team);		
		$('#countryList').val(data.country);
		$('#monitorList').html("<div> <a target=\"_blank\" href=\"https://www.google.com/search?hl=en&output=search&tbm=shop&q=" + data.monitor + "\">" + data.monitor + "</a> </div>");
		$('#mouseList').html("<div> <a target=\"_blank\" href=\"https://www.google.com/search?hl=en&output=search&tbm=shop&q=" + data.mouse + "\">" + data.mouse + "</a> </div>");
		$('#mousepadList').html("<div> <a target=\"_blank\" href=\"https://www.google.com/search?hl=en&output=search&tbm=shop&q=" + data.mousepad + "\">" + data.mousepad + "</a> </div>");
		$('#resolutionList').val(data.resolution);
		$('#monitorHzList').val(data.monitorHz);
		$('#aspectRatioList').val(data.aspectRatio);
		$('#finalAspectRatioList').val(data.finalAspectRatio);
		$('#aspectRatioDescriptionList').val(data.aspectRatioDescription);
		$('#sensitivityList').val(data.sensitivity);
		$('#windowsSensitivityList').val(data.windowsSensitivity);
		$('#hzList').val(data.hz);
		$('#zoomSensitivityRatioList').val(data.zoomSensitivityRatio);
		$('#xAxisList').val(data.xAxis);
		$('#mPitchList').val(data.mPitch);
		$('#mYawList').val(data.mYaw);
		$('#mRawInputList').val(data.mRawInput);
		$('#imageUpload').html(uploadForm);
		$('#rinputExeList').val(data.rinputExe);
		$('#pic').attr('src', 'images/' + data.id + '.jpg');
		$('#mouseAccelerationList').val(data.mouseAcceleration);
		$('#cm360List').val(data.cm360);
		$('#lightboostBlurReductionList').val(data.lightboostBlurReduction);
		$('#digitalVibranceSaturationList').val(data.digitalVibranceSaturation);
		$('#notesList').val(data.notes);
		$('#lastUpdateList').val(data.lastUpdate);
	});
}

var newUser=function() {
	$('#mainArea2').show();
	currentPlayer = {};
	renderList4(currentPlayer);
};

function formToJSON8() {
	var playerId = $('#eidText').val();
	return JSON.stringify({
		"id":			playerId == "" ? null : playerId,
		"name":		$('#enameText').val(),
		"team":		$('#eteamText').val(),
		"monitor":$('#emonitorText').val(),
		"country":$('#ecountryText').val(),
		"mouse":$('#emouseText').val(),
		"mousepad":$('#emousepadText').val(),
		"resolution":$('#eresolutionText').val(),
		"monitorHz":$('#emonitorHzText').val(),
		"aspectRatio":$('#easpectRatioText').val(),
		"finalAspectRatio":$('#efinalAspectRatioText').val(),
		"aspectRatioDescription":$('#easpectRatioDescriptionText').val(),
		"sensitivity":$('#esensitivityText').val(),
		"windowsSensitivity":$('#ewindowsSensitivityText').val(),
		"hz":$('#ehzText').val(),
		"zoomSensitivityRatio":$('#ezoomSensitivityRatioText').val(),
		"xAxis":$('#exAxisText').val(),
		"mPitch":$('#emPitchText').val(),
		"mYaw":$('#emYawText').val(),
		"mRawInput":$('#emRawInputText').val(),
		"rinputExe":$('#erinputExeText').val(),
		"mouseAcceleration":$('#emouseAccelerationText').val(),
		"cm360":$('#ecm360Text').val(),
		"lightboostBlurReduction":$('#elightboostBlurReductionText').val(),
		"digitalVibranceSaturation":$('#edigitalVibranceSaturationText').val(),
		"notes":$('#enotesText').val(),
		"lastUpdate":$('#elastUpdateText').val(),
	});
};

function helloWorld() {
	  return "Hello world!";
}