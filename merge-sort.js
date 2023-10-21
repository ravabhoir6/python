class MergeSort {
    #array = [];

    constructor(array) {
        this.#array = array;
    }

    get arr() {
        return this.#array;
    }

    sort() {
        let start = 0;
        let end = this.#array.length - 1;
        this.#mergeSort(start, end);
    }

    #mergeSort(start, end) {

        // Only one element
        if (start >= end) {
            return;
        }

        let mid = Math.floor(start + (end - start) / 2);

        this.#mergeSort(start, mid);
        this.#mergeSort(mid + 1, end)
        this.#merge(start, end, mid);
    }

    #merge(start, end, mid) {
        let leftSubArrayLength = mid-start+1;
        let rightSubArrayLength = end-mid;

        //create array of start-mid
        let leftSubArray = [];
        for(let i=start; i<=mid; i++) 
            leftSubArray.push(this.#array[i]);

        //create array of mid-start
        let rightSubArray = [];
        for(let j=mid+1; j<=end; j++)
            rightSubArray.push(this.#array[j]);


        //Compare and place each element in #array, in their correct pos
        let left = 0;
        let right = 0;
        let indexOfMergedArray = start;

        while(
            left<leftSubArray.length && right<rightSubArray.length
        ) {
            if(leftSubArray[left] <= rightSubArray[right]) {
                this.#array[indexOfMergedArray] = leftSubArray[left];
                left++
            } else {
                this.#array[indexOfMergedArray] = rightSubArray[right];
                right++;
            }

            indexOfMergedArray++;
        }

        //If leftSubArray still has element, then copy them
        while(left < leftSubArrayLength){
            this.#array[indexOfMergedArray] = leftSubArray[left];
            left++;
            indexOfMergedArray++;
        }

        //If if rightSubArray still has element, then copy them
        while(right<rightSubArrayLength){
            this.#array[indexOfMergedArray] = rightSubArray[right];
            right++;
            indexOfMergedArray++;   
        }
    }
}

let arr = [38, 47, 43, 10, -9, 76, 100, 0, 8];
let mergeSort = new MergeSort(arr);
mergeSort.sort();
console.log(mergeSort.arr)