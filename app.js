const dataArray = [1, 66, 15, 76, 18, 20]

function insertionSort(arr, indx = 0){
 if(indx === arr.length) return
 
 const curr = arr[indx]
 let j = indx-1

 while(j>=0 && arr[j]>curr) {
   arr[j+1] = arr[j]
   j--
 }
 arr[j+1] = curr
 
 insertionSort(arr, indx+1)
 
 return arr
}
// driver code
console.log("Insertion sort.",insertionSort(dataArray))
