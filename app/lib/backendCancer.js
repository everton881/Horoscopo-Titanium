var xhr = Ti.Network.createHTTPClient();

exports.getHoroscopoCancer = function(callback) {
	var url = 'http://theastrologer-api.herokuapp.com/api/horoscope/cancer/today';			
	xhr.open('GET', url);
	
		xhr.onload = function () {				
		var data = JSON.parse(this.responseText);
		callback(data);
		
		
};
	xhr.onerror = function(e) {
		alert(e.error);
	};
	xhr.send();

};
 
 