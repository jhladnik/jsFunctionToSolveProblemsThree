// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let arrayOfPig = str.split(" ");
    let punctuation = [];
    let igPay = [];
      for(let puncs of arrayOfPig){
        if(puncs==='!'|| puncs==='?'|| puncs==='.')
        punctuation.push(arrayOfPig.splice(arrayOfPig.length-1,1));
        }
          for (let els of arrayOfPig){
            let arrayOfEls = els.split("")
            let stringFor=[];
            stringFor.push(arrayOfEls[0]+'ay')
            let nextArray = arrayOfEls.slice(1).concat(stringFor);
            igPay.push(nextArray.join(""))
          }
    return igPay.concat(punctuation).join(" ")
  }
