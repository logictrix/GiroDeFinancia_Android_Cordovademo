package com.giro.plugin;

import android.content.Context;
import android.content.Intent;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class GiroDeFinancia extends CordovaPlugin {

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Context context = cordova.getActivity().getApplicationContext();
        if(action.equals("launcher")) {
            this.openNewActivity(context);
            return true;
        }
        return false;
    }

    private void openNewActivity(Context context) {
        Intent intent = new Intent(context, LuncherActivity.class);
        this.cordova.getActivity().startActivity(intent);
		this.cordova.getActivity().finish();
		 
    }
}
