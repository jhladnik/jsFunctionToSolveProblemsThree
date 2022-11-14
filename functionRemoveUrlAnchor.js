// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
   //lets find out if this has a octothingy
   if(url.includes('#')){
     //change the url to an array
     let arrOfUrl = Array.from(url);
     //samurai
     let finalArr = arrOfUrl.slice(0, arrOfUrl.indexOf('#'));
    //return the diced url as a string
    return finalArr.join("")
   }else{
      //ooorrrrrrrrr return the original url
      return url
    }
}
  
  //given a url as a string
  //return the url string with anything after and including the octothorp ommitted;
  //if there is no octothorp, return the url
  //input('www.reddit.com#about'), output('www.reddit.com'); input('www.codewars.com/kata/'), output('www.codewars.com/kata/')