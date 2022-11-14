// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

function catMouse(x){
    let arrOfX = x.split('');
    let catPos = arrOfX.indexOf("C");
    let mousePos = arrOfX.indexOf("m");
    return mousePos-catPos<=4? 'Caught!':'Escaped!'
}

//given a string of letters and symbols; "C" being a cat, "m" being a mouse; anything
//else in the string is "."; the cat can jump qty.3 "." or less
//return 'Caught!' if the cat can catch the mouse in the string; return
//'Escaped!' if the mouse can get away and there are more than 3 '.' between the two
//input('C...m'), output('Caught!');
//input('C....m'), output('Escaped!');
//input('Cm'), output('Caught!')