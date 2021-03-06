define(['Ti/_/declare', 'Ti/Tizen/SystemInfo/SystemInfoProperty'], function(declare, SystemInfoProperty) {
	return declare('Ti.Tizen.SystemInfo.SystemInfoWifiNetwork', SystemInfoProperty, {
		constructor: function(args) {
			this._obj = args;
		},

		constants: {
			status: {
				get: function() {
					return this._obj.status;
				}
			},
			ssid: {
				get: function() {
					return this._obj.ssid;
				}
			},
			ipAddress: {
				get: function() {
					return this._obj.ipAddress;
				}
			},
			ipv6Address: {
				get: function() {
					return this._obj.ipv6Address;
				}
			},
			signalStrength: {
				get: function() {
					return this._obj.signalStrength;
				}
			},
		},

	});
});