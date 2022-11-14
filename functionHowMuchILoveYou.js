// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    //create an array of the phrases
  let loveArr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  //create a conditional if the nbPetals is greater than the array element count, the same as the array count in cycles, or less than the array element count
  if(nbPetals%6==0){
    return 'not at all'
  }else if(nbPetals>6){
    return loveArr[(nbPetals%6)-1]
  }else{
    return loveArr[nbPetals-1]
  }
}