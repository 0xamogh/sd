const jsonFiles = require('./measurementFiles')
var arr
Object.keys(jsonFiles).forEach(function(key)
{
  arr = {
    ...arr,
    [key]: require(jsonFiles[key])
 }
})

module.exports = arr