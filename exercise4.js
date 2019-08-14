function cariModus(arr) {
    // you can only write your code here!
    var modus = 0;
    var modusFreq = 1;
    var angkaModus = -1;

        for(var i = 0; i <= arr.length; i++) {
            for(var j = 0; j <= arr.length; j++) {
                if(arr[i] === arr[j]) {
                    modus += 1;
                    if(modusFreq < modus) {
                        modusFreq = modus;
                        angkaModus = arr[i];
                    }
                }
            }
            modus = 0;
        }
            if(modusFreq === arr.length) {
                angkaModus = -1;
            }
            return angkaModus;
}
  
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1