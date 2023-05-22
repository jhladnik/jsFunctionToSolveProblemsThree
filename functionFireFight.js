// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

function fireFight(s){
    //use the replace method globally
    return s.replace(/Fire/g, "~~");
}

//given a string of words
//return the string of words with the substring "Fire" changed to "~~"
//console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire"), "Boat Rudder Mast Boat Hull Water ~~")
//console.log(fireFight("Mast Engine Water"), "Mast Engine Water")
//console.log(fireFight("Fire Fire Fire"), "~~ ~~ ~~")