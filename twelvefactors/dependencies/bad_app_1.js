/*
 * Node.JS Demo using COM
*/
(function () {
    try {
        var win32ole = require('win32ole');     
        var WSH = win32ole.client.Dispatch('WScript.Shell');
        WSH.popup("Hello, world!");
    } catch (e) {
        console.log(e);
    }
})();