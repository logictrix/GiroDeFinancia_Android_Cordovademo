cordova.define("com.giro.plugin.GiroDeFinancia", function(require, exports, module) {
var exec = require('cordova/exec');

 
function plugin() {

}

plugin.prototype.launcher  = function() {
    exec(function(res){}, function(err){}, "GiroDeFinancia", "launcher", []);
}

module.exports = new plugin();

});
