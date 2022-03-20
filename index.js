// code your solution here
saturdayFun();
function saturdayFun(fun = 'roller-skate') {
     
    return "This Saturday, I want to " + fun + "!" } 

function  mondayWork(doWhat = 'go to the office' ) {
    return "This Monday, I will " + doWhat + "."
}
 
const  wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
}