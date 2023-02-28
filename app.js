console.log("Hola desde npm");
console.log("Hola desde nodemon");


function prom_arr(arr){
    let p = 0;
    let acum = 0;
    while(p <= arr.length()){
        acum = acum + arr[p];
        p++;
    }
}