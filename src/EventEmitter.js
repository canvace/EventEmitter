/**
 * Represents an object that can bind event handlers to arbitrary event names
 * and fire events.
 *
 * Inheriting this class gives a descendant the ability to register and fire
 * arbitrary events. You can inherit this class by using the
 * {{#crossLink "Function"}}Function{{/crossLink}}.call method of the
 * EventEmitter constructor in your class's constructor (see the example below).
 *
 * @class EventEmitter
 * @constructor
 * @example
 *	function Descendant() {
 *		EventEmitter.call(this);
 *	
 *		this.otherMethod = function () {
 *			// ...
 *		};
 *	
 *		// other methods and properties
 *	}
 *	
 *	var object = new Descendant();
 *	
 *	object.on('salute', function () {
 *		alert('Hello, world!');
 *	});
 *	
 *	object.emit('salute');
 */
function EventEmitter() {
	'use strict';

	var thisObject = this;
	var handlerMap = {};

	/**
	 * Binds the specified event handler to the specified event name.
	 *
	 * The event name can contain any characters.
	 *
	 * @method bind
	 * @chainable
	 * @param name {String} The name of the event.
	 * @param handler {Function} The event handler.
	 * @param [scope] {Object} An optional object used as `this` when the
	 * handler is invoked.
	 */

	/**
	 * An alias for {{#crossLink "EventEmitter/bind"}}bind{{/crossLink}}.
	 *
	 * @method on
	 * @chainable
	 * @param name {String} The name of the event.
	 * @param handler {Function} The event handler.
	 * @param [scope] {Object} An optional object used as `this` when the
	 * handler is invoked.
	 */

	this.bind = this.on = function (name, handler, scope) {
		if (!handlerMap.hasOwnProperty(name)) {
			handlerMap[name] = [];
		}
		handlerMap[name].push(handler.bind(scope));
		return thisObject;
	};

	/**
	 * Unbinds a previously bound event handler from the specified event name.
	 *
	 * @method unbind
	 * @chainable
	 * @param name {String} The name of the event.
	 * @param handler {Function} The previously bound event handler. It must be
	 * *exactly* the same function reference used in the
	 * {{#crossLink "EventEmitter/bind"}}bind{{/crossLink}} or
	 * {{#crossLink "EventEmitter/on"}}on{{/crossLink}} call.
	 */

	/**
	 * An alias for {{#crossLink "EventEmitter/unbind"}}unbind{{/crossLink}}.
	 *
	 * @method un
	 * @chainable
	 * @param name {String} The name of the event.
	 * @param handler {Function} The previously bound event handler. It must be
	 * *exactly* the same function reference used in the
	 * {{#crossLink "EventEmitter/bind"}}bind{{/crossLink}} or
	 * {{#crossLink "EventEmitter/on"}}on{{/crossLink}} call.
	 */

	this.unbind = this.un = function (name, handler) {
		if (handlerMap.hasOwnProperty(name)) {
			for (var i in handlerMap[name]) {
				if (handlerMap[name].hasOwnProperty(i) && (handlerMap[name][i] === handler)) {
					handlerMap.splice(i, 1);
					break;
				}
			}
		}
		return thisObject;
	};

	/**
	 * Fires the specified event.
	 *
	 * You can optionally pass any number of arguments that will be forwarded to
	 * the handlers.
	 *
	 * @method trigger
	 * @chainable
	 * @param name {String} The name of the event to fire.
	 * @param [arguments]* {Any} Zero or more arguments to forward to the
	 * handlers.
	 */

	/**
	 * An alias for {{#crossLink "EventEmitter/trigger"}}trigger{{/crossLink}}.
	 *
	 * @method emit
	 * @chainable
	 * @param name {String} The name of the event to fire.
	 * @param [arguments]* {Any} Zero or more arguments to forward to the
	 * handlers.
	 */

	this.trigger = this.emit = function (name) {
		if (handlerMap.hasOwnProperty(name)) {
			var parameters = [];
			for (var i = 1; i < arguments.length; i++) {
				parameters.push(arguments[i]);
			}
			for (var j in handlerMap[name]) {
				if (handlerMap[name].hasOwnProperty(j)) {
					handlerMap[name][j].apply(null, parameters);
				}
			}
		}
		return thisObject;
	};
}
