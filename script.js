// let currentPlayer="X";
// let arr=Array(9).fill(null);
// function checkRow(i){
//    var q= i%3;
//    var l = i-q;
//    if(arr[l]==arr[l+1] && arr[l+1]==arr[l+2]){
//     return true;
//    }
//    return false;
// }
// function checkCol(i){
//     if(i===0){
//         if(arr[i]==arr[i+3] && arr[i]==arr[i+6]){
//            return true;
//         }
//     }
// }
// function checkDiagonal(){
//     if((arr[0]==arr[4] && arr[0]==arr[8])||( arr[2]==arr[4] && arr[4]==arr[6])){
//         return true;
//     }
//     return false;
// }
// function checkWinner(i){
//   if(i != null){
//     let win = checkRow(i) || checkCol(i) || checkDiagonal(i)
//     if(win==true){
//         document.write(`Winner is ${currentPlayer}`)
//     }
//   }
// }
// function HandleClick(el){
//    let i = el.id;
//    if(arr[i]!= null){
//     arr[i]=currentPlayer;
//     currentPlayer = currentPlayer==="X" ? "O" : "X"
//    }
// }