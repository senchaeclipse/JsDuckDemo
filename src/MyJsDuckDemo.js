Ext.define("MyJsDuckDemo", {

	// properties
	/**
	 * @property {Object} a Object with properties expected extended properties
	 * @property {Ext.Button} a.b Ext Button type
	 * @property {String} [a.name="default-value"] optional argument creating an
	 *           override
	 */
	a : null

	// methods
	/**
	 * Simple method which takes 2 arguments by default 3rd argument is optional
	 * indicated by square brackets
	 * 
	 * @param {Date} a Js Date
	 * @param {Ext.Button} b Ext Button type
	 * @param {String} [name="default-value"] optional argument creating an
	 *            override
	 */
	,
	doIt : function(a, b, name) {

	}

	/**
	 * Simple method which takes 2 arguments by default 3rd argument is optional
	 * indicated by square brackets Returns Js Date object
	 * 
	 * @return {Date}
	 * @param {Date} a Js Date
	 * @param {Ext.Button} b Ext Button type
	 * @param {String} [name="default-value"] optional argument creating an
	 *            override
	 */
	,
	doIt2 : function(a, b, name) {
		return new Date();
	}

	/**
	 * Simple method which takes 2 arguments by default 3rd argument is optional
	 * indicated by square brackets Returns Js Date object
	 * 
	 * @return {Date}
	 * @param {Date} a Js Date
	 * @param {Ext.Button} b Ext Button type
	 * @param {String} [name="default-value"] optional argument creating an
	 *            override
	 */
	,
	doIt2 : function(a, b, name) {
		return new Date();
	}
	/**
	 * Simple method which takes 1 complex config object as argument
	 * 
	 * @return {Date}
	 * @param {Object} a Js Date
	 * @param {Ext.Button} a.b Ext Button type
	 * @param {String} [a.name="default-value"] optional argument creating an
	 *            override
	 */
	,
	doIt3 : function(a) {
		return new Date();

	}
	/**
	 * Simple method which takes function /callback function as an argument
	 * 
	 * @return {Date}
	 * @param {Function} a Js Date
	 * @param {Ext.Button} a.b Ext Button type
	 * @param {String} [a.name="default-value"] optional argument creating an
	 *            override
	 * @param {String} a.return optional argument creating an override
	 */
	,
	doIt4 : function(a) {

		return new Date();

	}

	/**
	 * Private method with 2 arguments ... one specifies String or Date can be
	 * passed and 2nd argument p2 is optional
	 * 
	 * @private
	 * @param {String/Date} param
	 * @param {String} [p2]
	 * @return {String}
	 */
	,
	foo : function(param, p2) {
		return "test";
	}

	/**
	 * Protected method with 2 arguments ... one specifies String or Date can be
	 * passed and 2nd argument p2 is optional
	 * 
	 * @protected
	 * @param {String/Date} param
	 * @param {String} [p2]
	 * @return {String}
	 */
	,
	bar : function(param, p2) {
		return "test";
	}

})