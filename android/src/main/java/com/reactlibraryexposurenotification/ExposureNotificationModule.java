package com.reactlibraryexposurenotification;

import android.content.Context;
import android.widget.Toast;

import java.util.*;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ExposureNotificationModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public ExposureNotificationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ExposureNotification";
    }

    @ReactMethod
    public void start() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "start", Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public boolean isEnabled() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "isEnabled", Toast.LENGTH_LONG).show();
      return true;
    }

    @ReactMethod
    public void stop() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "stop", Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public List<String> getTemporaryExposureKeyHistory() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "getTemporaryExposureKeyHistory", Toast.LENGTH_LONG).show();
      return new ArrayList<String>();
    }

    @ReactMethod
    public void provideDiagnosisKeys() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "getReactApplicationContext", Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public int getMaxDiagnosisKeys() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "getMaxDiagnosisKeys", Toast.LENGTH_LONG).show();
      return 0;
    }

    @ReactMethod
    public String getExposureSummary() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "getExposureSummary", Toast.LENGTH_LONG).show();
      return "";
    }

    @ReactMethod
    public List<String> getExposureInformation() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "getExposureInformation", Toast.LENGTH_LONG).show();
      return new ArrayList<String>();
    }

    @ReactMethod
    public void resetAllData() {
      Context context = getReactApplicationContext();
      Toast.makeText(context, "resetAllData", Toast.LENGTH_LONG).show();
    }
}
