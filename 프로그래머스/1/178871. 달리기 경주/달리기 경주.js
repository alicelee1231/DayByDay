function solution(players, callings) {   
   
    const a =  new Map()
    players.forEach((player, index) => {
        a.set(player, index)
    })

    for(const cal of callings){
        const index = a.get(cal)
        if(index > 0){
            [players[index], players[index - 1]] = [players[index - 1], players[index]]
            
            a.set(players[index], index)
            a.set(players[index - 1], index - 1)
        }
    }
    return players;
}