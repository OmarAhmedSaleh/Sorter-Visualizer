export function quickSortAnimations(array) {
    const animations = [];
    if (array.length < 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(
    mainArray,
    low,
    high,
    animations,
  ) {
    if (low >= high) return;
    const pi = partition(mainArray, low, high,  animations);
    quickSortHelper(mainArray, low, pi - 1,  animations);
    quickSortHelper(mainArray, pi + 1, high,  animations);
  }
  
  function partition(
    mainArray,
    low,
    high,
    animations,
  ) {
    const pivot = mainArray[high];
    let i = low - 1;
    let j = low;
    while (j < high) {
      let color = 0;
      while(color < 2){
        animations.push({
          'ids': [j, high],
          'action': 0,
          'color': color
        });  
        color++;
      }
      if(mainArray[j] <= pivot){
        i++;
        swap(mainArray, i, j, animations);
      }
      j++;
    }
    swap(mainArray, i + 1, high, animations);
    return i + 1;  
  }
  function swap(mainArray, i, j, animations){
    animations.push({
      'firstIdx': j,
      'hight': mainArray[i],
      'action': 1
    });  
    animations.push({
      'firstIdx': i,
      'hight': mainArray[j],
      'action': 1
    });  
    let temp = mainArray[i];
    mainArray[i] = mainArray[j];
    mainArray[j] = temp;
  }