import React, {useState,useEffect} from 'react';
import './css/App.css';
import PlayerList from './PlayerList';
import Player_stats from './Player_stats';

const App = () => {
    const [players, setPlayers] = useState([
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Mula Ruma",foot:false, number:34,  id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Rima Lappo",foot:false, number:1,  id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Rima Lappo",foot:true, number:1,   id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Jirka Masek",foot:true, number:9,  id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Kral Simor",foot:true, number:24,  id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0}
    ]);
    const [status, setStatus] = useState(players[0]);
    
    return (
        <main>
            <section className="topbar">
                <h1>Name of turnament</h1>
                <p></p>
            </section>
            <section className="main">
                <div className="players">
                    <PlayerList 
                        players={players} 
                        setPlayers={setPlayers} 
                        setStatus={setStatus} />
                </div>
                <Player_stats status={status} 
                    setStatus={setStatus} 
                    setPlayers={setPlayers} 
                    players={players}/>
            </section>
        </main>
    )
}

export default App
