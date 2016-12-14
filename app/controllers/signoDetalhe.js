var args = arguments[0] || {};
var dataBase = require('dataBase');
var signos = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagitarius','capricorn','aquarius','pisces'];
var total = args.toString();
var db = Titanium.Database.open('dataBaseName');
var result = db.execute('SELECT * FROM horoscopo where posicao = ?', total);

var view = Ti.UI.createView({borderColor: "yellow", width: 360, height: 200, top:0});
var imagem = result.fieldByName('posicao');

var imagem2 = '/icones/'+ signos[parseInt(imagem) - 1] + '.jpg';
//var botao = Ti.UI.createButton({backgroundImage:'/imagens/compartilha.png', width: 60, height:60, right:10, bottom:10});
var icone = Ti.UI.createImageView({image:imagem2, width:350 , height:190, top:0});
var titulo = Ti.UI.createLabel({font: { fontSize:40},  text: result.fieldByName('sunsign'), bottom:10, left: 5});
var data = Ti.UI.createLabel({font: { fontSize:20}, text: result.fieldByName('date'), top:210, left: 5});
var mensagem = Ti.UI.createLabel({font: { fontSize:20}, text: result.fieldByName('horoscope'), top: 250, left: 5});


view.add(icone);
//view.add(botao);
view.add(titulo);
//$.HoroscopoDetail.add(icone);
$.HoroscopoDetail.add(view);
$.HoroscopoDetail.add(data);
$.HoroscopoDetail.add(mensagem);
db.close;



