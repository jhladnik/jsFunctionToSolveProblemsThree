// Task
// You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in both of the respective bins
// The order of the type's in each bin should be the same as the order of their respective objects was in the input list

function recycle(array) {
    //create for sub arrays for the categories; loop through the array and find the material listed, push the type to the
    //appropriate sub; also see if the type has a secondMaterial and if so, push to the appropriate sub; return
    //an array holding all of these subs
    const paper = [];
    const glass = [];
    const organic = [];
    const plastic = [];
    
    for(let el of array){
      if(el.material === "paper"){
        paper.push(el.type);
        
        if(el.secondMaterial === "paper"){
            paper.push(el.type);
          }else if(el.secondMaterial === "glass"){
            glass.push(el.type);
          }else if(el.secondMaterial === "organic"){
            organic.push(el.type);
          }else if(el.secondMaterial === "plastic"){
            plastic.push(el.type)
        };
      }else if(el.material === "glass"){
        glass.push(el.type);
        
          if(el.secondMaterial === "paper"){
            paper.push(el.type);
          }else if(el.secondMaterial === "glass"){
            glass.push(el.type);
          }else if(el.secondMaterial === "organic"){
            organic.push(el.type);
          }else if(el.secondMaterial === "plastic"){
            plastic.push(el.type)
        };
      }else if(el.material === "organic"){
        organic.push(el.type);
        
        if(el.secondMaterial === "paper"){
            paper.push(el.type);
          }else if(el.secondMaterial === "glass"){
            glass.push(el.type);
          }else if(el.secondMaterial === "organic"){
            organic.push(el.type);
          }else if(el.secondMaterial === "plastic"){
            plastic.push(el.type)
        };
      }else if(el.material === "plastic"){
        plastic.push(el.type);
        
        if(el.secondMaterial === "paper"){
            paper.push(el.type);
          }else if(el.secondMaterial === "glass"){
            glass.push(el.type);
          }else if(el.secondMaterial === "organic"){
            organic.push(el.type);
          }else if(el.secondMaterial === "plastic"){
            plastic.push(el.type)
        };
      }
    };
    return[paper,glass,organic,plastic]
  }
  
  //given an object of elements labeled as "type", "material", and possibly "secondMaterial"; material categories
  //are paper, glass, organic, and plastic
  //return an array with subarrays in the paper, glass, organic, and plastic order; all material ("type") need to be
  //listed in the appropriate category subarrays; if there is a "secondMaterial", the item needs to be listed in 
  //both the material categories
  //console.log(recycle([
  //       {type: 'rotten apples', material: 'organic'},
  //       {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  //       {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  //       {type: 'amazon box', material: 'paper'},
  //       {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
  //     ]), [
  //       ['wine bottle', 'amazon box', 'beer bottle'],
  //       ['wine bottle', 'beer bottle'],
  //       ['rotten apples', 'out of date yogurt'],
  //       ['out of date yogurt']
  //     ])