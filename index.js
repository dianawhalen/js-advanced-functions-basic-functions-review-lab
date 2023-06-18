// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair='*') {
  return function(adj='special') {
    return `You are ${flair}${adj}${flair}!`
  }
}

let Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(start, array) {
  if(array.length === 0){
    return start;
  }
  else {
    let result = start;
    for(let i = 0; i < array.length; i++) {
      result = array[i](result);
    }
    return result;
  }
}
