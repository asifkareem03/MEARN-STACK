var pattern="ABABCC";
var charset={};
for(let char of pattern){
    // char in charset?console.log(char):charset[char]=1;
    if(char in charset){
        console.log(char);
        break
    }
    else{
        charset[char]=1;
    }
}