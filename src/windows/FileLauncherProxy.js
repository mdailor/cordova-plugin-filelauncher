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

/*global Windows:true */

var cordova = require('cordova');

module.exports = {
    saveAndLaunch: function(win, lose, args) {

        // 1st arg is the file name ("MyFile.pdf"), 2nd is a JavaScript ArrayBuffer containing the file contents
        var fileName = args[0];
        var fileData = new Uint8Array(args[1]);

        // We'llbe writing to the app's local storage folder
        var localFolder = Windows.Storage.ApplicationData.current.localFolder;

        // Create the file, overwriting it if it already exists
        var fileOption = Windows.Storage.CreationCollisionOption.replaceExisting;
        var createPromise = localFolder.createFileAsync(fileName, fileOption);
        createPromise.done(function createFileSuccess(launchFile) {

            // Write to the file
            var writePromise = Windows.Storage.FileIO.writeBytesAsync(launchFile, fileData);
            writePromise.done(function writeFileSuccess() {

                // Display the Windows Application Picker dialog so the user can choose what to do with the file
                var launchOptions = new Windows.System.LauncherOptions();
                launchOptions.displayApplicationPicker = true;
                var launchPromise = Windows.System.Launcher.launchFileAsync(launchFile, launchOptions);
                launchPromise.done(function launchSuccess(success) {

                    // Successfully displayed the Application Picker dialog
                    if (success) {
                        win && win("File successfully launched");
                    } else {
                        win && win("User canceled");
                    }
                }, function launchFail(error) {
                    lose && lose("File launch failed: " + error);
                });

            }, function writeFileFail(error) {
                lose && lose("Could not write to file: " + error);
            });
        }, function createFileFail(error) {
            lose && lose("Could not create file: " + error);
        });
    }
};

require("cordova/exec/proxy").add("FileLauncher", module.exports);