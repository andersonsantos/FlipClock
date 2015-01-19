/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function() {

	"use strict";
	
	/**
	 * The FlipClock.Translate object will translate string to a specified 
	 * locale.
	 */
	
	FlipClock.Translator = FlipClock.Base.extend({

		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,

		/**
		 * The available options for this class
		 */		
		
		options: {

			/**
			 * The default language
			 */	
			 
			defaultLanguage: 'english',
			 
			/**
			 * The language being used to display labels (string)
			 */	
			 
			language: 'english'
		},

		/*
		 * Constructor
		 *
		 * @param  string
		 * @return 
		*/

		constructor: function(options) {
			this.base(options);
			this.loadLanguage(this.getOption('language'));
		},

		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 */
		 
		loadLanguage: function(name) {	
			var lang;
			
			if(FlipClock.Lang[name.ucfirst()]) {
				lang = FlipClock.Lang[name.ucfirst()];
			}
			else if(FlipClock.Lang[name]) {
				lang = FlipClock.Lang[name];
			}
			else {
				lang = FlipClock.Lang[this.getOption('defaultLanguage')];
			}
			
			return this.lang = lang;
		},
					
		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 */

		localize: function(index, obj) {
			var lang = this.lang;

			if(!index) {
				return null;
			}

			var lindex = index.toLowerCase();

			if(typeof obj == "object") {
				lang = obj;
			}

			if(lang && lang[lindex]) {
				return lang[lindex];
			}

			return index;
		}

	});

}());