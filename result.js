/**
* @author      Jesse Boyer <contact@jream.com>
* @copyright   Copyright (C), 2013 Jesse Boyer
* @license     GNU General Public License 3 (http://www.gnu.org/licenses/)
*              Refer to the LICENSE file distributed within the package.
*
* @link        http://jream.com
* @version     0.1
*
*
* Handles a result for two DOM elements with ids of #success and #error
*
* @example:
*   Accepts JSON only
*   ---
*   Result.success("You are good to go!");
*   Result.error('This is a string');
*
*   Multi Errors:
*   Result.error({'data': "Wrong", "Something", "wrong}
*/
var Result = function() {

    // ------------------------------------------------------------------------

    this.__construct = function() {};

    // ------------------------------------------------------------------------

    this.success = function(msg) {
        var dom = $("#success");
        var output = '';

        if (typeof msg === 'undefined') {
            output = "Success";
        }
        else {
            output = msg
        }

        $("#success").html(output);
        $("#success").show();
        setTimeout(function() {
            $("#success").fadeOut();
        }, 5000);

    };

    // ------------------------------------------------------------------------

    this.error = function(msg) {
        var dom = $("#error");
        var output = '';

        if (typeof msg == 'undefined') {
            output = "Error";
        }

        if (typeof msg == 'object') {
            for (var key in msg) {
                if (typeof msg[key] == 'object') {
                    for (var _key in msg[key]) {
                        output += msg[key][_key] + "<br />";
                    }
                } else {
                    output += msg[key] + "<br />";
                }
            }
        } else {
            output += msg;
        }

        $("#error").html(output)
        $("#error").show();
        setTimeout(function() {
            $("#error").fadeOut();
        }, 5000);

    };

    // ------------------------------------------------------------------------

    this.__construct();

};