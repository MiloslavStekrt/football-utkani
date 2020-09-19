import React, {useState} from 'react';
import './css/App.css';
import PlayerList from './PlayerList';

const App = () => {
    const [players, setPlayers] = useState([
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000},
        {name:"Mula Ruma",foot:false, number:34, id:Math.random()*1000},
        {name:"Rima Lappo",foot:false, number:1, id:Math.random()*1000},
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000},
        {name:"Mula Ruma",foot:false, number:34, id:Math.random()*1000},
        {name:"Rima Lappo",foot:false, number:1, id:Math.random()*1000},
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000},
        {name:"Mula Ruma",foot:false, number:34, id:Math.random()*1000},
        {name:"Rima Lappo",foot:false, number:1, id:Math.random()*1000},
        {name:"Jirka Masek",foot:false, number:9, id:Math.random()*1000},
        {name:"Kral Simor",foot:false, number:24, id:Math.random()*1000},
        {name:"Mula Ruma",foot:true, number:34, id:Math.random()*1000},
        {name:"Rima Lappo",foot:true, number:1, id:Math.random()*1000},
        {name:"Jirka Masek",foot:true, number:9, id:Math.random()*1000},
        {name:"Kral Simor",foot:true, number:24, id:Math.random()*1000},
        {name:"Mula Ruma",foot:true, number:34, id:Math.random()*1000},
        {name:"Rima Lappo",foot:true, number:1, id:Math.random()*1000}
    ]);
    return (
        <main>
            <section className="topbar">
                <h1>Name of turnament</h1>
                <p>Saved</p>
            </section>
            <section className="main">
                <div className="players">
                    <PlayerList players={players} setPlayers={setPlayers} />
                </div>
                <h1>status</h1>
            </section>
        </main>
    )
}

export default App
