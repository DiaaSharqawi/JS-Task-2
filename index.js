let select = document.querySelector('select')

let form = document.querySelector('form')
let result=document.querySelector('.result')


form.onsubmit =function(e){
    e.preventDefault()
    let amountInShikel=document.querySelector('#amount').value
    console.log('event')
    switch(select.selectedIndex){
        case 0 :
                nisToDollar(amountInShikel)
                break
        case 1 : 
                nisToDinar(amountInShikel)
                break
        case 2 : 
                nisToNis(amountInShikel)   
                break     

    }
}


function nisToDollar(amountInShikel){
    // 1 nis = 0.27 dolar
    result.textContent=`${amountInShikel*0.27} `
    
}

function nisToDinar(amountInShikel){
    // 1 nis = 0.19 JOD
    result.textContent=`${amountInShikel*0.19}`
}
function nisToNis(amountInShikel)   {
    result.textContent=`${amountInShikel}`
}