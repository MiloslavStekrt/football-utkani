import React,{useState} from 'react';
import './css/Add_player.css';

const Add_player = ({players, setPlayer_line, player_line, foot, type, setStatus, status}) => {
    const [selectValue, setSelectValue] = useState();
    const changeSelect = (e) => {
        setSelectValue(
            players.filter(item => item.id == e.target.value).map(player => {return {name:player.name, foot: player.foot, number:player.number, id:player.id, vstrele_branky: player.vstrele_branky, ziskane_branky: player.ziskane_branky, assistence: player.assistence, bodu: player.bodu, trestu: player.trestu}})
        );
    }
    const add_player = () => {
        if(selectValue !== undefined){
            setPlayer_line([
                ...player_line, {name:selectValue[0].name, foot:selectValue[0].foot, number:selectValue[0].number,  id:selectValue[0].id, vstrele_branky: selectValue[0].vstrele_branky, ziskane_branky: selectValue[0].ziskane_branky, assistence: selectValue[0].assistence, bodu: selectValue[0].bodu, trestu: selectValue[0].trestu}
            ]);
            document.getElementById(type).style.display = "none";
            setStatus(selectValue[0])
        }

    }
    return (
        <div id={type} className="add_panel">
            <div className="add-center">
                <select onChange={changeSelect}>
                    <option></option>
                    {players.filter(player => player.foot === foot).map(player => (
                        <option value={player.id}>{player.name}</option>
                    ))}
                    {changeSelect}
                </select >
                <button onClick={add_player}>Přidat hrače</button>
            </div>
        </div>
    )
}

export default Add_player
