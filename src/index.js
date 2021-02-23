module.exports = function reverse (n) {
    if (n == undefined) return 0;
    if (isNaN(n)) return 0;  
   
    if (n<0) { 
        n = -1*n; 
        return Number(n.toString().split('').reverse().join(''));
          
    } else {
        return  Number(n.toString().split('').reverse().join(''));
          
    }
 
   
 }
