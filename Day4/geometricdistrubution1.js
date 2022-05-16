function processData(input) {
    //Enter your code here
  
    input = input.split('\n')
    input[0] = input[0].split(' ')
  
    let p = input[0][0] / input[0][1],
      n = input[1]
  
    function geometricDistribution(n, p) {
      return Math.pow(1 - p, n - 1) * p
    }
  
    console.log(geometricDistribution(n, p).toFixed(3))
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
  