let count = 0;

function cc(card) {
  // Only change code below this line

  if(card==10 ||card=='A'||card=='Q'||card=='K'||card=='J'){
    count--;
  }else if(card==2 ||card==3||card==4||card==5||card==6){
    count ++;
  }else if(card==7 ||card==8||card==9){};
  if(count>0){
    return count+" Bet";
  }
  return count+" Hold";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');