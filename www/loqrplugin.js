// Empty constructor
function LoqrPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
LoqrPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'show', [options]);
}

LoqrPlugin.prototype.initLoqr = function(successCallback, errorCallback) {
  var options = {};
  
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'initLoqr', [options]);
}

LoqrPlugin.prototype.createOnboarding = function(successCallback, errorCallback) {
  var options = {};
  
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'createOnboarding', [options]);
}

LoqrPlugin.prototype.bindDevice = function(successCallback, errorCallback) {
  var options = {};
  
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'bindDevice', [options]);
}

LoqrPlugin.prototype.validateMobileNumber = function(successCallback, errorCallback) {
  var options = {};
  
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'validateMobileNumber', [options]);
}

LoqrPlugin.prototype.initCamera = function(successCallback, errorCallback) {
  var options = {};
  
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'initCamera', [options]);
}

LoqrPlugin.prototype.hasPermissions = function(successCallback, errorCallback) {
  var options = {};
  
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'hasPermissions', [options]);
}

LoqrPlugin.prototype.requestPermissions = function(successCallback, errorCallback) {
  var options = {};
  
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'requestPermissions', [options]);
}

// Installation constructor that binds ToastyPlugin to window
LoqrPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.loqrPlugin = new LoqrPlugin();
  return window.plugins.loqrPlugin;
};
cordova.addConstructor(LoqrPlugin.install);