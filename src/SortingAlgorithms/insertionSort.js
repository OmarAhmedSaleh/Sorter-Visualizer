export function insertionSortAnimations(array) {
  const animations = [];
  if (array.length < 1) return array;
  for(let i = 1; i < array.length; i++){
    const key = array[i];
    let j = i - 1;
    while(j >= 0 && array[j] > key){
      let color = 0;
      while(color < 2){
        animations.push({
          'ids': [i,j],
          'action': 0,
          'color': color
        });  
        color++;
      }
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
      j--;
    }
  }
  return animations;
}