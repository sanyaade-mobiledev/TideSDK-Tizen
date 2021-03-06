define(['Ti/_/declare', 'Ti/Tizen/AbstractFilter'], function(declare, AbstractFilter){
	return declare('Ti.Tizen.CompositeFilter', AbstractFilter, {
		constructor: function(args) {
			if(args.toString() === '[object CompositeFilter]') {
				this._obj = args;
			} else {
				var i = 0,
					filters = args.filters,
					filtersCount = filters.length,
					result = [];
				for (; i < filtersCount; i++) {
					result.push(filters[i]._obj);
				}
				args.filters = result;
				this._obj = new tizen.CompositeFilter(args.type, args.filters);
			}
		},

		properties: {
			type: {
				get: function() {
					return this._obj.type;
				},
				set: function(value) {
					this._obj.type = value;
				}
			},
			filters: {
				get: function() {
					return this._obj.filters;
				},
				set: function(value) {
					this._obj.filters = value;
				}
			},
		},

	});
});