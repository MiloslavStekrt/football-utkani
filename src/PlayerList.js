import React from 'react';
import './css/PlayerList.css';
import Player from './Player';

const PlayerList = ({players, setPlayers, setStatus}) => {
    return (
        <div>
            <section className="brankari">
                <button className="nadpis span">
                    <h1>Brankari</h1>
                    <button>+</button>
                </button>
                {players.filter(player => player.foot === true).map(player => {
                    return <Player player={player} 
                        setPlayers={setPlayers} 
                        players={players} 
                        setStatus={setStatus}/>
                })}
            </section>
            <section className="hraci">
                <button className="nadpis span">
                    <h1>Hraci</h1>
                    <button>+</button>
                </button>
                {players.filter(player => player.foot === false).map(player => {
                    return <Player player={player} 
                        setPlayers={setPlayers} 
                        players={players} 
                        setStatus={setStatus} />
                })}
            </section>
        </div>
    )
}

export default PlayerList
