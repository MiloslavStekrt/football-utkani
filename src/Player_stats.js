import React from 'react'

const Player_stats = ({status, setStatus, setPlayers, players}) => {
    const vb_plus = () => {
        setPlayers(players.map(item => {
            if(item.id === status.id){
                return {
                    ...item, vstrele_branky: item.vstrele_branky+1
                }
            } return item;
        }));
        setStatus(
            {
                ...status, vstrele_branky: status.vstrele_branky+1
            }
        )
    }
    return (
        <div>
            <h1>{status.name}</h1>
            <p>Vstřelené Branky:{status.vstrele_branky}<button onClick={vb_plus}>+</button><button>-</button></p>
            <p>Získané Branky:  {status.ziskane_branky}<button>+</button><button>-</button></p>
            <p>Asistence:       {status.assistence}    <button>+</button><button>-</button></p>
            <p>Body:            {status.bodu}          <button>+</button><button>-</button></p>
            <p>Tresty:          {status.trestu}        <button>5</button><button>7</button><button>10</button></p>
        </div>
    )
}

export default Player_stats
