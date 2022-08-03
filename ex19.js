function patternMatch(str, pat){
    let m=0, n=0, match=[];
    while(true){

        if(str.length==0 || pat.length==0){
            return 'No match'
        }
        
        if(str[m]===pat[n] || str[m]==='*' || pat[n]==='*'){
            match.push(str[m])
            m++;
            n++;
            if(n===pat.length){
                return match.join('')
            }
        }else{
            if(n===0){
                str = str.slice(1,str.length)
            }else{
                n=0;
                str = str.slice(1,str.length)
                m=0
            }

            match=[]  
        }

        if(m==str.length || n==pat.length){
            return undefined
        }
       
    }

}
let str= 'albatros', pat= 'a*ba*r'
console.log(patternMatch(str,pat))

str= 'hello', pat= '**'
console.log(patternMatch(str,pat))

str= 'aca*e', pat= 'act'
console.log(patternMatch(str,pat))

str= 'aaallo', pat='*al*'
console.log(patternMatch(str,pat))

