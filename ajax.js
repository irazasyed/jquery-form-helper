/**
* @author      Jesse Boyer <contact@jream.com>
* @copyright   Copyright (C), 2013 Jesse Boyer
* @license     GNU General Public License 3 (http://www.gnu.org/licenses/)
*              Refer to the LICENSE file distributed within the package.
*
* @link        http://jream.com
* @version     0.1
*
* Handles a standard form for an AJAX submission with JSON data.
*
* @param el The element name to use, eg: #form-name
* @param success_text Display custom text
* @param success_callback Pass a custom function to handle any return data (Must be json)
*
* @example:
*   handle_form('#project-form', 'Profile successfully updated.', function(e) {
*       alert(e)
*   });
*/
function handle_form(el, success_text, success_callback) {

    $(el).submit(function(e) {
        e.preventDefault();
        var url = $(this).attr('action');
        var postData = $(this).serialize();

        $.post(url, postData, function(o) {
            if (o.result == 1) {
                // Display custom success text
                if (typeof success_text != 'undefined') {
                    Result.success(success_text);
                } else {
                    Result.success('Success.');
                }

                // Run the callback
                if (typeof success_callback == 'function') {
                    success_callback(o)
                }
            } else {
                Result.error(o.error);
            }
        }, 'json');
    })
}