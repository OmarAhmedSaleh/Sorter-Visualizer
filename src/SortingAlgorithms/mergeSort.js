export function mergeSortAnimations(array) {
    const animations = [];
    if (array.length < 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      let color = 0;
      while(color < 2){
        animations.push({
          'ids': [i,j],
          'action': 0,
          'color': color
        });  
        color++;
      }
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push({
          'firstIdx': k,
          'hight': auxiliaryArray[i],
          'action': 1
        });
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push({
          'firstIdx': k,
          'hight': auxiliaryArray[j],
          'action': 1
        });
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      let color = 0;
      while(color < 2){
        animations.push({
          'ids': [i,i],
          'action': 0,
          'color': color
        });  
        color++;
      }
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push({
        'firstIdx': k,
        'hight': auxiliaryArray[i],
        'action': 1
      });
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      let color = 0;
      while(color < 2){
        animations.push({
          'ids': [j,j],
          'action': 0,
          'color': color
        });  
        color++;
      }      
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push({
        'firstIdx': k,
        'hight': auxiliaryArray[j],
        'action': 1
      });      
      mainArray[k++] = auxiliaryArray[j++];
    }
  }