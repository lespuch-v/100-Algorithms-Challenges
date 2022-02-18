// Redo this challenge
export function electionsWinners(votes: number[], k: number): number {
    let inTheRunning = 0
    const mostVotes = Math.max(...votes)
    const sortedVoted = votes.sort((a,b) => b-a)
    
    if(sortedVoted[0] === sortedVoted[1] && k === 0){
        return 1
    }

    votes.forEach(votedCount => {
        if(mostVotes - votedCount < k){
            inTheRunning++
        }
    })
    return inTheRunning
}

console.log(electionsWinners([2, 3, 5, 2], 3)); 