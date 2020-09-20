import React from 'react'

const Player = ({player, setPlayers, players, setStatus}) => {
    const showPlayer = () => {
        setStatus(player);
    }
    return (
        <button onClick={showPlayer} className="span">
            <p>{player.name}</p>
            <button onClick={(e)=>{e.preventDefault(); 
                setPlayers(players.filter(el => el.id !== player.id));}
                }>x</button>
        </button>
    )
}

export default Player
