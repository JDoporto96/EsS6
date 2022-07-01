function patternMatch(str, pat){
    let m=0, n=0, match=[];
    while(true){
        if(str[m]===pat[n] || str[m]==='*' || pat[n]==='*'){
            match.push(str[m])
            m++;
            n++;
            if(n===pat.length){
                return match.join('')
            }
        }else{
            n===0? m++ : n=0;
            match=[]  
        }

        if(m==str.length || n==pat.length){
            return 'No match'
        }
    }

}
let str= 'albatros', pat= 'a*ba*r'
console.log(patternMatch(str,pat))

str= 'hello', pat= '**'
console.log(patternMatch(str,pat))

str= 'aca*e', pat= 'act'
console.log(patternMatch(str,pat))

