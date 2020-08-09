import {mergeSortAnimations} from '../SortingAlgorithms/mergeSort.js';
import {quickSortAnimations} from '../SortingAlgorithms/quickSort.js';
import {bubbleSortAnimations} from '../SortingAlgorithms/bubbleSort.js';
import {insertionSortAnimations} from '../SortingAlgorithms/insertionSort.js';

const MERGE = 0;
const QUICK = 1;
const BUBBLE = 2;
const INSERTION = 3;

export function getAnimations(array, type){
    if(type === MERGE){
        return mergeSortAnimations(array);
    }
    if(type === QUICK){
        return quickSortAnimations(array);
    }
    if(type === BUBBLE){
        return bubbleSortAnimations(array);
    }
    if(type === INSERTION){
        return insertionSortAnimations(array);
    }
    return mergeSortAnimations(array);
}
