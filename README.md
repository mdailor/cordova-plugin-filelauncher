FILE LAUNCHER PLUGIN FOR CORDOVA/PHONEGAP

This plugin allows you to save the contents of an ArrayBuffer as a file in the device's local storage and then
displays a picker dialog so the user can choose what to do with the file. My specific need for this: I needed to create a PDF
and then allow the user to open it with the PDF reader, e-mail it to someone, etc. Right now the plugin only supports
Windows 8 as I was able to achieve the desired functionality on Android & iOS by writing the file with the standard
Cordova "File" plugin (https://github.com/apache/cordova-plugin-file) and then launching it with plwin's 
"FileLauncher2" plugin (https://github.com/pwlin/cordova-plugin-file-opener2).

CORDOVA/PHONEGAP PLUGIN ID:

(You'll need this if you're using a build environment like Intel XDK, etc.):
com.nextwavesoftware.filelauncher

ADDING THE PLUGIN TO YOUR PROJECT:

$ cordova plugin add https://github.com/mdailor/cordova-plugin-filelauncher.git

USING THE PLUGIN:

navigator.filelauncher.saveAndLaunch(
    "MyFile.txt",
    "Hello, this is some text in my file",
    function success(message) {
        console.log("Yay, the plugin said " + message);
    },
    function failure(message) {
        console.log("Boo, the plugin said " + message);
    }
);

RELEASE NOTES

November 3, 2014
Initial release

LICENSE

Copyright (c) 2014 Next Wave Software, Inc., http://nextwavesoftware.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
