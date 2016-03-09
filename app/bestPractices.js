exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
  var myObject = {
      name : 'Jory'
    };

    return myObject;
  },
//EXPLANATION: added "var" b/c a variable is automatically GLOBAL if you assign a value w/o
//it being declared


  functions : function(flag) {
    var getValue;
    if (flag) {
      getValue = function  () { return 'a'; };
    } else {
      getValue = function(){ return 'b'; };
    }

    return getValue();
  },
//EXPLANATION: Declared variable on line 22, so that it's not overwritten when getValue() is used the
//second time on a line 26. 


  parseInt : function(num) {
    return parseInt(num, 10);
  },

  //EXPLANATION: added 10 to radix which is decimals

  identity : function(val1, val2) {
    return val1 === val2;
  }
};
