function golfScoreCalculator(p, s){
    return s.split('').reduce( (acc,c)=> +acc + +c) - p.split('').reduce( (acc,c)=> +acc + +c);
    }