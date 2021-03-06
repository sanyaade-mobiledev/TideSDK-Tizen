define(['Ti/_/declare', 'Ti/_/Evented'], function(declare, Evented) {
	return declare('Ti.Tizen.Application.ApplicationServiceData', Evented, {
		constructor: function(args) {
			if (args.toString() === '[object ApplicationServiceData]') {
				this._obj = args;
			} else {
				this._obj = new tizen.ApplicationServiceData(args.key, args.value);
			}
		},

		properties: {
			key: {
				get: function() {
					return this._obj.key;
				},
				set: function(value) {
					this._obj.key = value;
				}
			},
			value: {
				get: function() {
					return this._obj.value;
				},
				set: function(value) {
					this._obj.value = value;
				}
			},
		},

	});
});