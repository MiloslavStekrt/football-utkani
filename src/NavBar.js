import React,{useState} from 'react';
import './css/NavBar.css'

const NavBar = ({players, setPlayers, player_line, setPlayer_line}) => {
    const [visible, setVisible] = useState(false);
    const [nameis, setNameis] = useState(undefined);
    const [footis, setfootis] = useState(false);
    const [numberis, setNumberis] = useState(undefined);
    const showSideBar = () => {
        setVisible(true);
    }
    const hiddenSideBar = () => {
        setVisible(false);
    }
    const addPlayer_handler = (e) => {
        e.preventDefault();
        if(nameis !== undefined && numberis !== undefined){
            setPlayers([
                ...players,{name: nameis, foot: footis, number:numberis, id:Math.random()*1000, vstrele_branky: 0, ziskane_branky: 0, assistence: 0,bodu: 0, trestu: 0}
            ]);
            hiddenSideBar();
        }
    }
    return (
        <div className="topbar_m">
            <section className={ visible === true? "sideBar visibleVisible": "sideBar visibleHidden"}>
                <form className="player" id="player">
                    <h1>Přidat Hrače</h1>
                    <input value={nameis} onChange={(e)=>{setNameis(e.target.value)}} type="text" placeholder="Jmeno"/>
                    <input value={numberis} onChange={(e)=>{setNumberis(e.target.value)}} type="number" placeholder="číslo dresu"/>
                    <span>
                        <label>Je brankář</label>
                        <input value={footis} onChange={(e)=>{setfootis(e.target.checked)}} type="checkbox"/>
                    </span>
                    <button onClick={addPlayer_handler}>Přidat</button>
                </form>
                <form className="right" onClick={hiddenSideBar}></form>
            </section>
            <section className="topbar">
                <button className="name">
                    <h1>Name of turnament</h1>
                </button>
                <input type="text"/>
                <button onClick={showSideBar}>
                    <h1>Menu</h1>
                </button>
            </section>
        </div>
    )
}

export default NavBar
