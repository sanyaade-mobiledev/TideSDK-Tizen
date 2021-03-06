define(['Ti/_/declare', 'Ti/Tizen/Calendar/CalendarEventId', 'Ti/Tizen/Time/TimeDuration', 'Ti/Tizen/Time/TZDate'], function(declare, CalendarEventId, TimeDuration, TZDate) {
	return declare('Ti.Tizen.Calendar.CalendarItem', null, {
		constructor: function(args) {
			this._obj = args;
		},

		constants: {
			id: {
				get: function() {				
					return (this._obj == '[object CalendarEvent]') ? (new Ti.Tizen.Calendar.CalendarEventId(this._obj.id)) : this._obj.id;
				}
			},
			lastModificationDate: {
				get: function() {
					return this._obj.lastModificationDate;
				}
			},
		},

		properties: {
			description: {
				get: function() {
					return this._obj.description;
				},
				set: function(value) {
					this._obj.description = value;
				}
			},
			summary: {
				get: function() {
					return this._obj.summary;
				},
				set: function(value) {
					this._obj.summary = value;
				}
			},
			isAllDay: {
				get: function() {
					return this._obj.isAllDay;
				},
				set: function(value) {
					this._obj.isAllDay = value;
				}
			},
			startDate: {
				get: function() {
					return new TZDate(this._obj.startDate);
				},
				set: function(value) {
					if (value instanceof TZDate) {
						this._obj.startDate = value._obj;					
					} else {
						this._obj.startDate = value;
					}
				}
			},
			duration: {
				get: function() {
					return new TimeDuration(this._obj.duration);
				},
				set: function(value) {
					if (value == '[object TimeDuration]') {
						this._obj.duration = value;
					} else if (value == '[object TiTizenTimeTimeDuration]') {
						this._obj.duration = value._obj;
					} else {
						Ti.API.error('Error when set duration.');
					}	
				}
			},
			location: {
				get: function() {
					return this._obj.location;
				},
				set: function(value) {
					this._obj.location = value;
				}
			},
			geolocation: {
				get: function() {
					return this._obj.geolocation;
				},
				set: function(value) {
					this._obj.geolocation = value;
				}
			},
			organizer: {
				get: function() {
					return this._obj.organizer;
				},
				set: function(value) {
					this._obj.organizer = value;
				}
			},
			visibility: {
				get: function() {
					return this._obj.visibility;
				},
				set: function(value) {
					this._obj.visibility = value;
				}
			},
			status: {
				get: function() {
					return this._obj.status;
				},
				set: function(value) {
					this._obj.status = value;
				}
			},
			priority: {
				get: function() {
					return this._obj.priority;
				},
				set: function(value) {
					this._obj.priority = value;
				}
			},
			alarms: {
				get: function() {
					return this._obj.alarms;
				},
				set: function(value) {
					this._obj.alarms = value;
				}
			},
			categories: {
				get: function() {
					return this._obj.categories;
				},
				set: function(value) {
					this._obj.categories = value;
				}
			},
			attendees: {
				get: function() {
					return this._obj.attendees;
				},
				set: function(value) {
					this._obj.attendees = value;
				}
			},
		},

		convertToString: function(format /*CalendarTextFormat*/) {
			return this._obj.convertToString(format);
		},

		clone: function() {
			return new (require('Ti/Tizen/Calendar/CalendarEvent'))(this._obj.clone());
		}
	});
});