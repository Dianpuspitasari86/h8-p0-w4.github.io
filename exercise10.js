function changeMe(arr) {
    // you can only write your code here!
var data = {};
    if(arr.length === 0) {
        console.log('')
    }
    else{
        for(var i = 0; i <= arr.length - 1; i++) {
           data.firstName = arr[i][0];
           data.lastName = arr[i][1];
           data.gender = arr[i][2];
            if(arr[i][3] === undefined || arr[i][3] > 2018){
            data.age = 'Invalid Birth Year';
            }
            else {
                data.age = 2018 - arr[i][3];
            }
            console.log((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ' : ', data)
        }
    }

}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""