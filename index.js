function takeANumber(currentLine, name){
  currentLine.push(name);
  
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

line = []
takeANumber(line) -> 1  [1]
takeANumber(line) -> 2  [1,2]
nowServing(line) -> 1   [2]
nowServing(line) -> 2   []
takeANumber(line) -> 3  [3]



var i = 0;
function takeANumber(line){
  if (i++){
  line.push(i)}
  return line
}















function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}







function currentLine(katzDeliLine){
    if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
    
    var newArray = [];
    for (var i = 0; i < katzDeliLine.length; i++){
      
      newArray.push(` ${i + 1}. ${katzDeliLine[i]}`)
    } return `The line is currently:${newArray}`
}


