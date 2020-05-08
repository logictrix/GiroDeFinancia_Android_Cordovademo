
var app = {
   
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

   
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

  
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
		document.getElementById("launcher").addEventListener("click", luchactivity);
    }
};

app.initialize();

function luchactivity(){
	cordova.plugins.GiroDeFinancia.launcher()
}