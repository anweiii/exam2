var myIndex = 0;

let array = [0,0,0,0,0,0,0,0,0]

function Winner() {
  if (array[0] + array[1] + array[2] == 3) {
    Xwin()
  }
  if (array[0] + array[1] + array[2] == -3) {
    Owin()
  }
  if (array[3] + array[4] + array[5] == 3) {
    Xwin()
  }
  if (array[3] + array[4] + array[5] == -3) {
    Owin()
  }
  if (array[6] + array[7] + array[8] == 3) {
    Xwin()
  }
  if (array[6] + array[7] + array[8] == -3) {
    Owin()
  }

}
function Xwin() {
  window.alert("X has won");
    array = [0,0,0,0,0,0,0,0,0];
    document.getElementById('1').value= '';
    document.getElementById('2').value= '';
    document.getElementById('3').value= '';
    document.getElementById('4').value= '';
    document.getElementById('5').value= '';
    document.getElementById('6').value= '';
    document.getElementById('7').value= '';
    document.getElementById('8').value= '';
    document.getElementById('9').value= '';
    myIndex = 0;
    document.getElementById('x').value = parseInt(document.getElementById('x').value) + 1;

}

function Owin() {
  window.alert("O has won");
    array = [0,0,0,0,0,0,0,0,0];
    document.getElementById('1').value= '';
    document.getElementById('2').value= '';
    document.getElementById('3').value= '';
    document.getElementById('4').value= '';
    document.getElementById('5').value= '';
    document.getElementById('6').value= '';
    document.getElementById('7').value= '';
    document.getElementById('8').value= '';
    document.getElementById('9').value= '';
    myIndex = 0;
    document.getElementById('o').value = parseInt(document.getElementById('o').value) + 1;

}
function Winner1() {
  if ( (array[0]== '1' && array[1]== '1' && array[2]=='1') || (array[3]== '1' && array[4]== '1' && array[5]=='1') || (array[6]== '1' && array[7]== '1' && array[8]=='1') ||(array[0]== '1' && array[3]== '1' && array[6]=='1') || (array[1]== '1' && array[4]== '1' && array[7]=='1') || (array[2]== '1' && array[5]== '1' && array[8]=='1') || (array[0]== '1' && array[4]== '1' && array[8]=='1') || (array[2]== '-1' && array[4]== '1' && array[6]=='1') ){
    window.alert("X has won");
    array = [0,0,0,0,0,0,0,0,0];
    document.getElementById('1').value= '';
    document.getElementById('2').value= '';
    document.getElementById('3').value= '';
    document.getElementById('4').value= '';
    document.getElementById('5').value= '';
    document.getElementById('6').value= '';
    document.getElementById('7').value= '';
    document.getElementById('8').value= '';
    document.getElementById('9').value= '';
    myIndex = 0;
    document.getElementById('x').value = parseInt(document.getElementById('x').value) + 1;
  }

  if ( (array[0]== '-1' && array[1]== '-1' && array[2]=='-1') || (array[3]== '-1' && array[4]== '-1' && array[5]=='-1') || (array[6]== '-1' && array[7]== '-1' && array[8]=='-1') ||(array[0]== '-1' && array[3]== '-1' && array[6]=='-1') || (array[1]== '-1' && array[4]== '-1' && array[7]=='-1') || (array[2]== '-1' && array[5]== '-1' && array[8]=='-1') || (array[0]== '-1' && array[4]== '-1' && array[8]=='-1') || (array[2]== '-1' && array[4]== '-1' && array[6]=='-1') )  {
    window.alert("O has won");
    array = [0,0,0,0,0,0,0,0,0];
    document.getElementById('1').value= '';
    document.getElementById('2').value= '';
    document.getElementById('3').value= '';
    document.getElementById('4').value= '';
    document.getElementById('5').value= '';
    document.getElementById('6').value= '';
    document.getElementById('7').value= '';
    document.getElementById('8').value= '';
    document.getElementById('9').value= '';
    myIndex = 0;
    document.getElementById('o').value = parseInt(document.getElementById('o').value) + 1;
  }
  
}

function Replay() {
  array = [0,0,0,0,0,0,0,0,0];
    document.getElementById('1').value= '';
    document.getElementById('2').value= '';
    document.getElementById('3').value= '';
    document.getElementById('4').value= '';
    document.getElementById('5').value= '';
    document.getElementById('6').value= '';
    document.getElementById('7').value= '';
    document.getElementById('8').value= '';
    document.getElementById('9').value= '';
    myIndex = 0;

}

function Click1() {
  var count = myIndex % 2
  if (document.getElementById('1').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('1').value = 'X';
      array[0]= '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('1').value = 'O';
      array[0]= -1;
    }
    myIndex++
    Winner()
  }
  
}

function Click2() {
  var count = myIndex % 2
  if (document.getElementById('2').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('2').value = 'X';
      array[1]= '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('2').value = 'O';
      array[1]= '-1';
    }
    myIndex++
    Winner()
  }
  
}

function Click3() {
  var count = myIndex % 2
  if (document.getElementById('3').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('3').value = 'X';
      array[2]= '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('3').value = 'O';
      array[2]= '-1';
    }
    myIndex++
    Winner()
  }
  
}

function Click4() {
  var count = myIndex % 2
  if (document.getElementById('4').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('4').value = 'X';
      array[3]= '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('4').value = 'O';
      array[3]= '-1';
    }
    myIndex++
    Winner()
  }
  
}

function Click5() {
  var count = myIndex % 2
  if (document.getElementById('5').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('5').value = 'X';
      array[4]= '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('5').value = 'O';
      array[0]= '-1';
    }
    myIndex++
    Winner()
  }
  
}

function Click6() {
  var count = myIndex % 2
  if (document.getElementById('6').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('6').value = 'X';
      array[5]= '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('6').value = 'O';
      array[5]= '-1';
    }
    myIndex++
    Winner()

  }
  
}

function Click7() {
  var count = myIndex % 2
  if (document.getElementById('7').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('7').value = 'X';
      array[6] = '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('7').value = 'O';
      array[6] = '-1';
    }
    myIndex++
    Winner()
  }
  
}

function Click8() {
  var count = myIndex % 2
  if (document.getElementById('8').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('8').value = 'X';
      array[7] = '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('8').value = 'O';
      array[7] = '-1';
    }
    myIndex++
    Winner()
  }
  
}

function Click9() {
  var count = myIndex % 2
  if (document.getElementById('9').value == ''){
    if (myIndex % 2 == 0) {
      document.getElementById('9').value = 'X';
      array[8] = '1';
    }
    if (myIndex % 2 == 1) {
      document.getElementById('9').value = 'O';
      array[8] = '-1';
    }
    myIndex++
    Winner()
  }
  
}



