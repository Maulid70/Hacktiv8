var max = 9;
var tmp = '';

for (let i = 1; i <= max; i++) {
    for (let j = 0; j < i; j++) {
      tmp += i;
    }
    console.log(tmp);
    tmp = '';
  }
