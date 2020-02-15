
function _is_object(obj){
  return typeof(obj) === 'object' && !!obj
}
function _keys(obj){
  return _is_object(obj) ? Object.keys(obj) : []
}

function _each(list, iter){
  const keys = _keys(list)
  for (let i = 0, len = keys.length; i < len; i++){
    iter(list[keys[i]])
  }
}

_each({
  13 : 'ID',
  19 : 'HD',
  29 : 'YD',
  }, function(name){ console.log(name)})