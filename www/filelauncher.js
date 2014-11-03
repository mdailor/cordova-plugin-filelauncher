/** @preserve
 * FileLauncher - Saves an ArrayBuffer as a file in the app's local storage folder, 
 * displays a picker dialog to allow the user to choose what to do with the file
 *
 * Copyright (c) 2014 Next Wave Software, Inc., http://nextwavesoftware.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s): Mike Dailor, https://github.com/mdailor
 */

var exec = require('cordova/exec');
var platform = require('cordova/platform');

module.exports = {

    /**
     * Saves an ArrayBuffer as a file in the app's local storage folder, 
     * displays a picker dialog to allow the user to choose what to do with the file
     *
     * @param {String} fileName     The name of the file to be created
     * @param {Function} data       The arraybuffer containing the file contents
     */
    saveAndLaunch: function (fileName, data, successCallback, failCallback) {
        exec(successCallback, failCallback, "FileLauncher", "saveAndLaunch", [fileName, data]);
    }
};