let arr = [62, 78, 26, 86, 6, 100];
let a = arr[0]

for (let i=0; i<=arr.length; i++){

    if (a<arr[i+1]){
        a = arr[i];
    }
}
console.log(a)