export function bubbleSortAnimations(array) {
    const animations = [];
    if (array.length < 1) return array;
    for(let i = 0; i < array.length - 1; i++){
      for(let j = 0; j < array.length - i - 1; j++){
        let color = 0;
        while(color < 2){
          animations.push({
            'ids': [j,j + 1],
            'action': 0,
            'color': color
          });  
          color++;
        }
        if(array[j] > array[j + 1]){
          animations.push({
            'firstIdx': j + 1,
            'hight': array[j],
            'action': 1
          });
          animations.push({
            'firstIdx': j,
            'hight': array[j + 1],
            'action': 1
          });
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return animations;
  }
  