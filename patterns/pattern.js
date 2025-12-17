// let str = "";
//        for(let i= 1 ; i<=5 ; i++)
//         {
//         for(j=1 ; j<= i-1 ; j++){
//             str += ' ';
//             // console.log(i , j);
//         }
//         for(k=5 ; k >= i ; k--){
//             str += " *";
//         }
//         console.log(str);
//         str = '';
//        }

let str = "";

for (i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        str += "*";
    }
    for (k = 1; k < i; k++) {
        str += " ";
    }
    for (l = 1; l < i; l++) {
        str += " ";
    }
    for (m = 5; m >= i; m--) {
        str += "*";
    }
    console.log(str);
    str = "";
}

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        str += "*";
    }
    for (k = 5; k > i; k--) {
        str += " ";
    }
    for (l = 5; l > i; l--) {
        str += " ";
    }
    for (m = 1; m <= i; m++) {
        str += "*";
    }
    console.log(str);
    str = "";
}