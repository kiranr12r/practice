let arr = [223,34,1,3,5444]
let largest = arr[0]
for(i = 0;i<arr.length;i++){
    if(arr[i]>largest)
        largest = arr[i]
}
console.log(largest)