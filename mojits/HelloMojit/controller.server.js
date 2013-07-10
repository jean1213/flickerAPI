/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HelloMojit', function(Y, NAME) {

/**
 * The HelloMojit module.
 *
 * @module HelloMojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.get('HelloMojitModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.assets.addCss('./pure-min.css');
                ac.done({
                    status: 'Get Brands from Flicker',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'HelloMojitModel']});
