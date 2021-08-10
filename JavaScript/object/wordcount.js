var text="hello hai hello hai hello";
var wordcount={};
var words=text.split(" ");
// for(let word of words){
//     // word in wordcount?wordcount[word]+=1:wordcount[word]=1
//     if(word in wordcount){
//         wordcount[word]+=1;
//     }
//     else{
//         wordcount[word]=1;
//     }
// }
// console.log(wordcount);

text.split(" ").map(word=>word in wordcount?wordcount[word]++:wordcount[word]=1);
console.log(wordcount);