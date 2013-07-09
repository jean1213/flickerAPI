/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HelloMojitModel', function(Y, NAME) {

/**
 * The HelloMojitModel module.
 *
 * @module HelloMojit
 */

    /**
     * Constructor for the HelloMojitModel class.
     *
     * @class HelloMojitModel
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {
		
		// flicker api key
		apikey: 'e48cd503d56d7b984ec6e73c1e3abab3',

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {

			var params = {
				method: 'flickr.cameras.getBrands',
				api_key: this.apikey,
				format: 'json',
				nojsoncallback: 1
			};

			var url = "http://api.flickr.com/services/rest",
				config = {
					timeout: 5000,
					headers: {
						'Cache-Control': 'max-age=0'
					}
				};

			Y.mojito.lib.REST.GET(url, params, config, function(err, response) {
				if (err) {
					callback(err, null);
					return;
				}

				if (response._resp.status !== 200) {
					callback(err, null);
					return;
				}

				callback(err, Y.JSON.parse(response._resp.responseText).brands.brand);
			});

            //callback(null, { some: 'data' });
        }

    };

}, '0.0.1', {requires: ['mojito-rest-lib', 'json-parse']});
