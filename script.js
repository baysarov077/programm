const cryptText = (text) => {
    const arr = text.split(' ')
    const result = []
    const vawels = ['а','у','е','ы','о','э','я','и','ю','ё']
    for(i = 0; i < arr.length; i++){
        if(parseInt(arr[i], 10)){
            if(arr[i].length < 3){
            result.push(arr[i].split('').reverse().join(''))
            } else {result.push(`${arr[i][0]}${arr[i]}${arr[i][arr[i].length - 1]}`)}
        } else if(arr[i].length < 3){
            result.push(`${arr[i]}ик`)
        } else if(vawels.includes(arr[i][0])){
            result.push(`инту${arr[i]}`)
        } else {
            result.push(`код${arr[i]}`)
        }
        
    }
    return result.join(' ')
}

console.log(cryptText('карл у клары 1234 украл 21 кораллы'))


