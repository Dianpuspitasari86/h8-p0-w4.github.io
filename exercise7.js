function urutkanAbjad(str) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var kata1 = str.split('');
    var numKata = [];
    var urutNumKata = [];
    var hasil = [];

    for(var i = 0; i < str.length; i++) {
        numKata.push(abjad.indexOf(kata1[i]));
    }
    urutNumKata = numKata.sort(function urutan(num1,num2) { return num1 > num2})

    for(var i = 0; i <= urutNumKata.length - 1; i++) {
        hasil.push(abjad[urutNumKata[i]]);
    }
    return hasil.join('');
}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'