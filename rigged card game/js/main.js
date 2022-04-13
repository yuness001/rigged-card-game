let hassan=document.getElementById('hassan')
hassan.addEventListener('click',event=>{
    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res=>res.json())
    .then(data=>{
        let deckId=data.deck_id
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('player_1_img').src=data.cards[0].image
        document.getElementById('player_2_img').src=data.cards[1].image
        document.getElementById('winner').innerText=checkWinner(data.cards[0].value,data.cards[1].value)
    })
function nameToNumber(card){
    if(card=='JACK'){
        return 11
    }else if(card=='QUEEN'){
        return 12
    }else if(card=='KING'){
        return 13
    }else if(card=='ACE'){
        return 14
    }else{
        return Number(card)
    }
}
function checkWinner(card1,card2){
    if(nameToNumber(card1)>nameToNumber(card2)){
        return 'Player 1 Wins'
    }else if(nameToNumber(card1)<nameToNumber(card2)){
        return 'Player 2 Wins'
    }else{
        return 'DRAW'
    }
}
    })
    
})