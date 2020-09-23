import React, {useState} from 'react';
import './css/App.css';
import PlayerList from './PlayerList';
import Player_stats from './Player_stats';
import Add_player from './Add_player';

const App = () => {
    const [players, setPlayers] = useState([
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Mula Ruma",foot:false, number:34,  id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
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
    const [player_line, setPlayer_line] = useState([
        {name:"Jirka Masek",foot:true, number:9,  id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0},
        {name:"Kral Simor",foot:true, number:24,  id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0}
    ]);
    
    return (
        <main>
            <section className="topbar">
                <h1>Name of turnament</h1>
                <p></p>
            </section>
            <section className="main">
                <div className="players">
                    <PlayerList 
                        players={player_line} 
                        setPlayers={setPlayer_line} 
                        setStatus={setStatus} />
                </div>
                <Player_stats status={status} 
                    setStatus={setStatus} 
                    setPlayers={setPlayer_line} 
                    players={player_line}/>
            </section>
            <Add_player players={players} 
                setPlayer_line={setPlayer_line} 
                player_line={player_line} 
                foot={true}
                type="add_brankar"/>
            <Add_player players={players} 
                setPlayer_line={setPlayer_line} 
                player_line={player_line} 
                foot={false}
                type="add_panel" />
        </main>
    )
}

export default App
