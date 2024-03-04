function fibo(n){
    var listFibo = [0,1];
    for (var i = 0; i < n-2; i++){
        listFibo.push(listFibo[listFibo.length-1]+listFibo[listFibo.length-2]);
        console.log(listFibo);
    }
}

// fibo(15);

const input = require("prompt-sync")();

function numbers(n){
    var str = "";
    for (let i in n){
        str += parseInt(n[i]);
    
    }
    console.log(str);
}

numbers(123);