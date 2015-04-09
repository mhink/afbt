var Reflux = require("reflux");

var FlexboxTutorialStore = module.exports = Reflux.createStore({
  init: function() {
    this.flexDirection  = this.getState().flexDirection;
    this.writingMode    = this.getState().writingMode;
    this.justifyContent = this.getState().justifyContent;
    this.alignItems     = this.getState().alignItems;
    this.alignContent     = this.getState().alignContent;
  },

  setFlexDirection: function(newDirection) {
    this.flexDirection = newDirection;
    this.trigger(this.getState());
  },

  setWritingMode: function(newMode) {
    this.writingMode = newMode;
    this.trigger(this.getState());
  },

  setJustifyContent: function(newJc) {
    this.justifyContent= newJc;
    this.trigger(this.getState());
  },

  setAlignItems: function(newAi) {
    this.alignItems = newAi;
    this.trigger(this.getState());
  },

  setAlignContent: function(newAc) {
    this.alignContent = newAc;
    this.trigger(this.getState());
  },


  getState: function() {
    return {
      writingMode:    (this.writingMode     || 'wm-htb'),
      flexDirection:  (this.flexDirection   || 'fd-row'),
      justifyContent: (this.justifyContent  || 'jc-fs'),
      alignItems:     (this.alignItems      || 'ai-fs'),
      alignContent:   (this.alignContent    || 'ac-fs'),
    };
  },
});
