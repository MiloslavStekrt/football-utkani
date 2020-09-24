import React from 'react';

const Player = ({player, setPlayers, players, setStatus, status}) => {
    const showPlayer = () => {
        setStatus(player);
    }
    const delete_handler = (e) => {
        e.preventDefault(); 
        setPlayers(players.filter(el => el.id !== player.id));
        setStatus()
    }
    return (
        <div className="span">
            <button onClick={showPlayer} className="showItem">
                <p>{player.name}</p> 
            </button>
            <button onClick={delete_handler}>x</button>
        </div>
    )
}

export default Player
