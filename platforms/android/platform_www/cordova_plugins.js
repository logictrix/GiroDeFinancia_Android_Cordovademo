cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.giro.plugin.GiroDeFinancia",
      "file": "plugins/com.giro.plugin/www/GiroDeFinancia.js",
      "pluginId": "com.giro.plugin",
      "clobbers": [
        "cordova.plugins.GiroDeFinancia"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "com.giro.plugin": "1.0.0"
  };
});