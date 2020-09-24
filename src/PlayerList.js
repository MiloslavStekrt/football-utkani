import React from 'react';
import './css/PlayerList.css';
import Player from './Player';

const PlayerList = ({players, setPlayers, setStatus, status}) => {
    const add_new_player = () => {
        document.getElementById("add_panel").style.display = "flex"
    }
    const add_new_brankar = () => {
        document.getElementById("add_brankar").style.display = "flex"
    }
    return (
        <div>
            <section className="brankari">
                <span className="nadpis span">
                    <h1>Brankari</h1>
                    <button onClick={add_new_brankar}>+</button>
                </span>
                {players.filter(item => item.foot === true)? 
                players.filter(player => player.foot === true).map(player => {
                    return <Player player={player} 
                        setPlayers={setPlayers} 
                        players={players} 
                        setStatus={setStatus}
                        status={status}/>
                }): <div><h1>Nothing Include</h1></div>}
            </section>
            <section className="hraci">
                <span className="nadpis span">
                    <h1>Hraci</h1>
                    <button onClick={add_new_player}>+</button>
                </span>
                {players.filter(item => item.foot === false)?
                players.filter(player => player.foot === false).map(player => {
                    return <Player player={player} setPlayers={setPlayers}  players={players} setStatus={setStatus} />
                }):<div><h1>Nothing Include</h1></div>
                }
            </section>
        </div>
    )
}

export default PlayerList
