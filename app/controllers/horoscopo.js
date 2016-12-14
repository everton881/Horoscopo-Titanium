var args = arguments[0] || {};
var db;
var result;
var signos = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagitarius','capricorn','aquarius','pisces'];
var backend = require('backend');
var dataBase = require('dataBase');	
var backendTaurus = require('backendTaurus');
var backendGemini = require('backendGemini');
var backendCancer = require('backendCancer');
var backendLeo = require('backendLeo');
var backendVirgo = require('backendVirgo');
var backendLibra = require('backendLibra');
var backendScorpio = require('backendScorpio');
var backendSagitarius = require('backendSagitarius');
var backendCapricorn = require('backendCapricorn');
var backendAquarius = require('backendAquarius');
var backendPisces = require('backendPisces');
var resultado;
var sig;
var a = 1;
var i;

dataBase('create', null, null, null);
var now = new Date();
var mes = now.getMonth() + 1;
var today = now.getFullYear() + '-' + mes + '-' + now.getDate();
signos.forEach(function(value, index){
	db = Titanium.Database.open('dataBaseName');
	rows = db.execute('SELECT * FROM horoscopo');
	Ti.API.info('today'  + today + ' hoje ' + rows.fieldByName('date'));	
if(signos[index] == 'aries'){	
	if(rows.rowCount != 12){
         backend.getHoroscopoAries(function(sunsign){	
         	dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '1');
       });
     }else if(rows.fieldByName('date') != today){
     	
     	backend.getHoroscopoAries(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
     
     
   }

if(signos[index] == 'taurus'){
	if(rows.rowCount != 12){
	    setTimeout(function(){
		   backendTaurus.getHoroscopoTaurus(function(sunsign){	
		   	 dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '2');
			});
		},300);
		}else if(rows.fieldByName('date') != today){
     	
     	backendTaurus.getHoroscopoTaurus(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}

if(signos[index] == 'gemini'){
	if(rows.rowCount != 12){
	    setTimeout(function(){
           backendGemini.getHoroscopoGemini(function(sunsign){	
	           dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '3');
             });
     },600);
   }else if(rows.fieldByName('date') != today){
     	
     	backendGemini.getHoroscopoGemini(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
 }

if(signos[index] == 'cancer'){
	if(rows.rowCount != 12){
setTimeout(function(){
backendCancer.getHoroscopoCancer(function(sunsign){
		dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '4');
           });
    },900);
  }else if(rows.fieldByName('date') != today){
     	
     	backendCancer.getHoroscopoCancer(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}

if(signos[index] == 'leo'){
	if(rows.rowCount != 12){
         setTimeout(function(){
	        backendLeo.getHoroscopoLeo(function(sunsign){	
	           dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '5');
	
           });
    },1100);
  }else if(rows.fieldByName('date') != today){
     	
     	backendLeo.getHoroscopoLeo(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}
if(signos[index] == 'virgo'){
	if(rows.rowCount != 12){
        setTimeout(function(){
           backendVirgo.getHoroscopoVirgo(function(sunsign){	
	          dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '6');

           });
    },1400);
  }else if(rows.fieldByName('date') != today){
     	
     	backendVirgo.getHoroscopoVirgo(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}

if(signos[index] == 'libra'){
	if(rows.rowCount != 12){
         setTimeout(function(){
            backendLibra.getHoroscopoLibra(function(sunsign){	
	           dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '7');

            });
    },1700);
  }else if(rows.fieldByName('date') != today){
     	
     	backendLibra.getHoroscopoLibra(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}
if(signos[index] == 'scorpio'){
	if(rows.rowCount != 12){
         setTimeout(function(){
            backendScorpio.getHoroscopoScorpio(function(sunsign){	
	            dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '8');

            });
    },2000);
  }else if(rows.fieldByName('date') != today){
     	
     	backendScorpio.getHoroscopoScorpio(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}
if(signos[index] == 'sagitarius'){
	if(rows.rowCount != 12){
        setTimeout(function(){
           backendSagitarius.getHoroscopoSagitarius(function(sunsign){	
	           dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '9');
	
            });
    },2300);
  }else if(rows.fieldByName('date') != today){
     	
     	backendSagitarius.getHoroscopoSagitarius(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}
if(signos[index] == 'capricorn'){
	if(rows.rowCount != 12){
         setTimeout(function(){
            backendCapricorn.getHoroscopoCapricorn(function(sunsign){	
	            dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '10');
            });
    },2600);
  }else if(rows.fieldByName('date') != today){
     	
     	backendCapricorn.getHoroscopoCapricorn(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }   
}

if(signos[index] == 'aquarius'){
	if(rows.rowCount != 12){
        setTimeout(function(){
           backendAquarius.getHoroscopoAquarius(function(sunsign){	
	            dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '11');

            });
    },2900);
  }else if(rows.fieldByName('date') != today){
     	
     	backendAquarius.getHoroscopoAquarius(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
     }  
}

if(signos[index] == 'pisces'){
     setTimeout(function(){
        backendPisces.getHoroscopoPisces(function(sunsign){
	       if(rows.rowCount != 12){
	            dataBase('insert', sunsign.sunsign, sunsign.date, sunsign.horoscope, '12');
	}else if(rows.fieldByName('sunsign') != today){
     	
     	backendPisces.getHoroscopoPisces(function(sunsign){	
         	dataBase('update', sunsign.sunsign, sunsign.date, sunsign.horoscope, null);
       });
      }
  setTimeout(function(){	
    carregar();
  },500);

           });
  },3200);
  }
  db.close();
});

function carregar(){
	
	db = Titanium.Database.open('dataBaseName');
result = db.execute('SELECT * FROM horoscopo');
		
var data = [];


 var concatena;
 var b = 0;
 var imgg;
while (result.isValidRow()) {	
 Ti.API.info('resultado  ' + result.fieldByName('sunsign'));
 imgg = parseInt(result.fieldByName('posicao')) - 1;
   concatena = '/icones/' + signos[imgg] + '.jpg';
 
    var view = Ti.UI.createView({
    	backgroundColor: "black", 
    	borderColor: "yellow",   	
    });
    var label = Ti.UI.createLabel({
    	left: 90,
    	font: { fontSize:20},
    	text: result.fieldByName('sunsign') + "\n" +result.fieldByName('date')
    });
   
    var iconeImage = Ti.UI.createImageView({
        image: concatena,
        left: 0,
        width: 80,
        height: 80
    });
    var tableRowView = Ti.UI.createTableViewRow({});
    
    view.add(label);
    view.add(iconeImage);
    tableRowView.add(view);
    data.push(tableRowView);
    b++;   
    result.next();
    }
result.close();
db.close();

var aTableView = $.signoTableView;
aTableView.setData(data);
 $.horoscopoWindow.add(aTableView);	

db.close();
};

function showDetails(e) {

 var ctr = Alloy.createController('signoDetalhe', e.index + 1);
  $.horoscopoTab.open(ctr.getView());  
}