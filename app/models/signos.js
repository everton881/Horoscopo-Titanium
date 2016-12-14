
exports.definition = {
	config: {
		columns: {
		    "sunsign": "text",
		    "date": "text",
		    "horoscope": "text",
		    "signoDetalhe": "integer",
		},
		adapter: {
			type: "sql",
			collection_name: "horoscopo"
		}
	}, 
	extendModel: function(Model) {
		_.extend(Model.prototype, {
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			});

		return Collection;
	}
};
