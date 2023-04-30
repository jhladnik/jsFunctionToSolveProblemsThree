// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.


function bouncingBall(h,  bounce,  window) {
    //use a conditional to find if all the conditions are being met to find a result, if they are, create an array and set h in it;
    //use a while statement, while arr[arr.length-1]>window multiply arr[arr.length-1] by bounce, push result to arr, then
    //return the length of arr; else return -1
    
    if(h>0 && 1>bounce && window<h && bounce>0){
      let arr = [h];
      
      while(arr[arr.length-1]>window){
        let boing = arr[arr.length-1]*bounce;
        arr.push(boing);
      }
      return (arr.length-1)*2-1;
    }
    return -1;
}

//given 3 parameters, (h) which is height, (bounce) which is a multiplier for how high a ball will bounce given
//(h), and (window) which is how high an observation window is located
//return the number of times that the ball will cross up or down, window; if (h)<=0 || (bounce)>=1 || (bounce)
//<=0 || (window)>=(h), return -1
//console.log(bouncingBall(3.0, 0.66, 1.5), 3);
//console.log(bouncingBall(30.0, 0.66, 1.5), 15);
//console.log(bouncingBall(3.0, 1.0, 1.5), -1);