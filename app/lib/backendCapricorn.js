var xhr = Ti.Network.createHTTPClient();

exports.getHoroscopoCapricorn = function(callback) {
	var url = 'http://theastrologer-api.herokuapp.com/api/horoscope/capricorn/today';			
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
 
 