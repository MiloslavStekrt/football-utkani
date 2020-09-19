import React from 'react'

const Player = ({player, setPlayers, players}) => {
    return (
        <span>
            <p>{player.name}</p>
            <button>x</button>
        </span>
    )
}

export default Player
