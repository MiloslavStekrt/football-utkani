import React from 'react';

const Player = ({player, setPlayers, players, setStatus}) => {
    const showPlayer = () => {
        setStatus(player);
    }
    return (
        <div className="span">
            <button onClick={showPlayer} className="showItem">
                <p>{player.name}</p> 
            </button>
            <button onClick={(e)=>{e.preventDefault(); 
                setPlayers(players.filter(el => el.id !== player.id));}
            }>x</button>
        </div>
    )
}

export default Player
