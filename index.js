/**
  * @param {Array} data
  */
module.exports = function(data) {

  var obj = {};
  var sortable=[];
  var count = 0;

  for( var i = 0 , len = data.length ; i < len ; i++ ) {
    if( typeof obj[data[i]] === 'undefined' ){
      obj[data[i]] = 1;
    }else{
      obj[data[i]] = obj[data[i]] + 1;
    }
  }

  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      sortable.push([key, obj[key]]);
    }
  }

  sortable.sort(function(a, b){
    return b[1]-a[1];
  });

  obj = {};
  for( var i = 0 , len = sortable.length ; i < len ; i++ ) {
    count++;
    if( count.toString(36).charAt(0).match(/[a-z]/i) === null ){
      count = count * 10;
    }
    obj[sortable[i][0]] = count.toString(36);
  }

  return obj;
};
