function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  var i = 0
<<<<<<< HEAD
  if (deliLine.length > 0){
    return `Currently serving ${deliLine.shift()}.`;
=======
  if (i === 0){
    return `Currently serving ${deliLine[i]}.`;
  deliLine.unshift()
>>>>>>> 63ee56ac5e09bd8a4f686ad634f5a78b4134eea1
} else{
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line){
  var array = []
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {for(let i = 0; i < line.length; i++)
    {array.push(`${i + 1}. ${line[i]}`)}
    return `The line is currently: ${array.join(", ")}`
  }
}
