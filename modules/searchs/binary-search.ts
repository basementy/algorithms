const initialArray = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// That's the basic binary search implementation
const binarySearch = (array: number[], target: number): void => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target === array[middleIndex]) {
      return console.log("Congratulations, you found the target");
    } else if (target > array[middleIndex]) {
      console.log("The target is located to the right");

      startIndex = middleIndex + 1;
    } else if (target < array[middleIndex]) {
      console.log("The target is located to the left");

      endIndex = middleIndex - 1;
    } else {
      console.log("Not found in this iteration. Looping another iteration.");
    }
  }

  console.log("The target doesn't exist in the array");
}

// That's the implementation with recursion to search the repeated values
const findDuplicatedElement = (array: number[], start: number, end: number): void => {
  if (start > end) {
    console.log("The array doesn't have repeated elements");

    return;
  }

  const middle = Math.floor((start + end) / 2);

  if (array[middle] != middle + 1) {
    if (middle > 0 && array[middle] == array[middle - 1]) {
      console.log("The repeated element is the: ", array[middle]);

      return;
    }

    return findDuplicatedElement(array, start, middle - 1);
  }

  return findDuplicatedElement(array, middle + 1, end);
}

findDuplicatedElement(initialArray, 0, initialArray.length - 1);
