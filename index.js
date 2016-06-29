/**
  * @param {Array} data – массив CSS классов
  */
module.exports = function(data) {

  var obj = {};
  var count = 0;

  for( var i = 0 , len = data.length ; i < len ; i++ ) {

    if( typeof obj[data[i]] === 'undefined' ){

      count++;

      if( count.toString(36).charAt(0).match(/[a-z]/i) === null ){
        count = count * 10;
      }

      obj[data[i]] = count.toString(36);
    }else{
      //obj[data[i]] = obj[data[i]] + 1;
    }

  }

  

  return obj;
};
