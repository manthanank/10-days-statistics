function processData(input) {
    //Enter your code here
    input = input.split(' ')
  
    let x = parseFloat(input[0]),
      a = 160 + 40 * (x + Math.pow(x, 2))
    y = parseFloat(input[1]),
      b = 128 + 40 * (y + Math.pow(y, 2))
  
    console.log(a.toFixed(3))
    console.log(b.toFixed(3))
  }
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
      _input += input;
  });
  
  process.stdin.on("end", function () {
     processData(_input);
  });
  