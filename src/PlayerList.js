import React from 'react';
import './css/PlayerList.css';
import Player from './Player';

const PlayerList = ({players, setPlayers}) => {
    return (
        <div>
            <section className="brankari">
                <span className="nadpis">
                    <h1>Brankari</h1>
                    <button>+</button>
                </span>
                {players.filter(player => player.foot == true).map(player => {
                    return <Player player={player} 
                        setPlayers={setPlayers} 
                        players={players} />
                })}
            </section>
            <section className="hraci">
                <span className="nadpis">
                    <h1>Hraci</h1>
                    <button>+</button>
                </span>

                {/* {...state,currentMenu: action.menu.filter((menu) =>
state.currentCategoryId == menu.category_id)} */}

                {players.filter(player => player.foot == false).map(player => {
                    return <Player player={player} 
                        setPlayers={setPlayers} 
                        players={players} />
                })}
            </section>
        </div>
    )
}

export default PlayerList
