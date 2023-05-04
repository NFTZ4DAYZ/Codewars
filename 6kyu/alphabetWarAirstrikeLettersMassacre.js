function alphabetWar(fight)
{
  fight = fight.split('')
    fight.forEach((i,ind)=>{
      if(i=='*') {
       fight[ind-1] = fight[ind-1] == '*' ? fight[ind-1] : '_';
         fight[ind+1] = fight[ind+1] == '*' ? fight[ind+1] : '_';
    }
  })
let left = 0;
  let right = 0;
    for(let i = 0;i<fight.length;i++) {
      if(fight[i] == 'w') {left+=4}
        else if(fight[i] == 'p') {left+=3}
          else if(fight[i] == 'b') {left+=2}
            else if(fight[i] == 's'){left +=1}
              else if(fight[i] == 'm'){right+=4}
                else if(fight[i] =='q') {right +=3}
                  else if(fight[i] == 'd'){right+=2}
                    else if(fight[i] == 'z'){right+=1}
                       else {continue};
    }
  return right > left ? "Right side wins!" : left == right ? "Let's fight again!" : "Left side wins!"
}