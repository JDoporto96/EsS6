

function patternMatchUtil(str, n, i, pat, m, j, map) {
    if (i == n && j == m)
        return true;
 
    if (i == n || j == m)
        return false;
 
    let ch = pat[j];
 
    if (map.has(ch)) {
        let sTemp = map.get(ch);
        let s = sTemp;
        let len = sTemp.length;
        let subStrTemp = str.substr(i, len);
        let subStr=subStrTemp;

           
        if(sTemp.includes("*") && subStr[subStrTemp.indexOf("*")]!="*" ){
            let index = sTemp.indexOf("*");
            s = sTemp.replace("*", subStr[index])   
        }
        else{ 
            subStr = subStrTemp;}

        if(subStrTemp.includes("*") && s[sTemp.indexOf("*")]!="*" ){
            let index = subStrTemp.indexOf("*");
            subStr = subStrTemp.replace("*", s[index])   
        }
        else{ 
            subStr = subStrTemp;}
        
        

        
        console.log(`comparing ${sTemp} and ${subStrTemp}`);
        console.log(`Comparison: ${s==subStr}`);


        

        if (subStr != s){
            return false;
        }
           
        return patternMatchUtil(str, n, i + len, pat, m, j + 1, map);
    }
 
    for (let len = 1; len <= n - i; len++) {
        map.set(ch, str.substr(i, len));
        console.log(`Adding ${ch}:${map.get(ch)} to map`);

        if (patternMatchUtil(str, n, i + len, pat, m, j + 1, map))
            {return true;}
        
        console.log(`Deleting ${ch}:${map.get(ch)} from map`)
        map.delete(ch);
        
    }
 
    return false;
}

function patternMatch(str, pat) {
    let n = str.length;
    let m = pat.length;
    if (n < m)
        return false;
 
    let map = new Map();
    let res = patternMatchUtil(str, n, 0, pat, m, 0, map);
    for (it of [...map.keys()]){
        console.log(it + " -> " + map.get(it));
    }
        
    return res;
}

let str = "pandetortuga*an*e", pat = "aca";

console.log(patternMatch(str, pat))