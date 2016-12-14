function dataBase(request, nome, data, msg, pos){
	
	if(request == 'create'){
								 
						var instalar = Ti.Database.install('dataBaseName', 'dataBaseName');
						instalar.close();
						var db = Ti.Database.open('dataBaseName');
				db.execute('CREATE TABLE IF NOT EXISTS horoscopo(sunsign TEXT, date TEXT, horoscope TEXT, posicao TEXT)');
				if(db != null){
					
					Ti.API.info("Banco Criado");
					
				}else{
					Ti.API.info("Banco não  Criado");
					
				}
				db.close();
										
					}
		
		  else if(request == 'insert'){
		  	

		        var db = Ti.Database.open('dataBaseName');
		        db.execute('INSERT INTO horoscopo (sunsign, date, horoscope, posicao) VALUES(?,?,?,?)',nome, data, msg, pos);
		       
		         if(db != null){
		         	var aew = db.execute('select *from horoscopo where sunsign = ?', nome);
		        Ti.API.info("Dados inseridos" + aew.fieldByName('sunsign').toString());
		        	        }
		        db.close();
		       
		
	}
	
	 else if(request == 'delete'){
		
		        var db = Ti.Database.open('dataBaseName');
		        db.execute('delete from horoscopo');
		        db.close();
  
		
	}
	
	
	else if (request == 'update'){
		
		 var db = Ti.Database.open('dataBaseName');
		        db.execute('UPDATE horoscopo set date = ?, horoscope = ? WHERE sunsign = ? ', data, msg, nome);
		         if(db != null){
		        Ti.API.info("Dados Atualizados");
		}
		        db.close();
		        
		
	}
		
}

module.exports = dataBase;

