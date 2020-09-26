import React, {useState, useEffect} from 'react';
import './css/App.css';
import PlayerList from './PlayerList';
import Player_stats from './Player_stats';
import Add_player from './Add_player';
import NavBar from './NavBar';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [status, setStatus] = useState([]);
    const [player_line, setPlayer_line] = useState([]);
    return (
        <div className="app">
            <NavBar players={players} 
                setPlayers={setPlayers}
                player_line={player_line}
                setPlayer_line={setPlayer_line} />
            <main>
                <section className="main">
                    <div className="players">
                        <PlayerList 
                            players={player_line} 
                            setPlayers={setPlayer_line} 
                            setStatus={setStatus} 
                            status={status}/>
                    </div>
                    <Player_stats status={status} 
                        setStatus={setStatus} 
                        setPlayers={setPlayer_line} 
                        players={player_line}/>
                    </section>
                    <Add_player players={players}
                        status={status}
                        setStatus={setStatus}
                        setPlayer_line={setPlayer_line} 
                        player_line={player_line} 
                        foot={true}
                        type="add_brankar"/>
                    <Add_player players={players}
                        status={status}
                        setStatus={setStatus} 
                        setPlayer_line={setPlayer_line} 
                        player_line={player_line} 
                        foot={false}
                        type="add_panel" />
            </main>
        </div>
    )
}

export default App
