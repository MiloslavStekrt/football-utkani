import React,{useEffect} from 'react';
import './css/Player_stats.css';

const Player_stats = ({ status, setStatus, setPlayers, players }) => {
    const vb_plus = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, vstrele_branky: item.vstrele_branky + 1
                }
            } return item;
        }));
        setStatus(
            {
                ...status, vstrele_branky: status.vstrele_branky + 1
            }
        )
    }
    const vb_minus = () => {
        if (status.vstrele_branky !== 0) {
            setPlayers(players.map(item => {
                if (item.id === status.id) {
                    return {
                        ...item, vstrele_branky: item.vstrele_branky - 1
                    }
                } return item;
            }));
            setStatus(
                {
                    ...status, vstrele_branky: status.vstrele_branky - 1
                }
            )
        }
    }
    const zs_plus = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, ziskane_branky: item.ziskane_branky + 1
                }
            } return item;
        }));
        setStatus(
            {
                ...status, ziskane_branky: status.ziskane_branky + 1
            }
        )
    }
    const zs_minus = () => {
        if (status.ziskane_branky !== 0) {
            setPlayers(players.map(item => {
                if (item.id === status.id) {
                    return {
                        ...item, ziskane_branky: item.ziskane_branky - 1
                    }
                } return item;
            }));
            setStatus(
                {
                    ...status, ziskane_branky: status.ziskane_branky - 1
                }
            )
        }
    }
    const a_plus = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, assistence: item.assistence + 1
                }
            } return item;
        }));
        setStatus(
            {
                ...status, assistence: status.assistence + 1
            }
        )
    }
    const a_minus = () => {
        if (status.assistence !== 0) {
            setPlayers(players.map(item => {
                if (item.id === status.id) {
                    return {
                        ...item, assistence: item.assistence - 1
                    }
                } return item;
            }));
            setStatus(
                {
                    ...status, assistence: status.assistence - 1
                }
            )
        }
    }
    const b_plus = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, bodu: item.bodu + 1
                }
            } return item;
        }));
        setStatus(
            {
                ...status, bodu: status.bodu + 1
            }
        )
    }
    const b_minus = () => {
        if (status.bodu !== 0) {
            setPlayers(players.map(item => {
                if (item.id === status.id) {
                    return {
                        ...item, bodu: item.bodu - 1
                    }
                } return item;
            }));
            setStatus(
                {
                    ...status, bodu: status.bodu - 1
                }
            )
        }
    }

    //Tresty funkce 
    const t_nul = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, trestu: 0
                }
            } return item;
        }));
        setStatus(
            {
                ...status, trestu: 0
            }
        )
    }
    const t_min = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, trestu: 5
                }
            } return item;
        }));
        setStatus(
            {
                ...status, trestu: 5
            }
        )
    }
    const t_med = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, trestu: 7
                }
            } return item;
        }));
        setStatus(
            {
                ...status, trestu: 7
            }
        )
    }
    const t_hei = () => {
        setPlayers(players.map(item => {
            if (item.id === status.id) {
                return {
                    ...item, trestu: 10
                }
            } return item;
        }));
        setStatus(
            {
                ...status, trestu: 10
            }
        )
    }
    
    return (
        <>
            {players[0] && status ? <div className="mainStats">
            <h1>{status.name} {status.foot ? <small> - Brankař {status.number}</small> : <small>- č. {status.number}</small>}</h1>
            <section>
                <article>
                    <p>Vstřelené branky:</p>
                    <strong>{status.vstrele_branky}</strong>
                </article>
                <article className="buttons">
                    <button onClick={vb_plus}>+</button>
                    <button onClick={vb_minus}>-</button>
                </article>
            </section>
            <section>
                <article>
                    <p>Získané Branky: </p>
                    <strong>{status.ziskane_branky}</strong>
                </article>
                <article className="buttons">
                    <button onClick={zs_plus}>+</button>
                    <button onClick={zs_minus}>-</button>
                </article>
            </section>
            <section>
                <article>
                    <p>Asistence:</p>
                    <strong>{status.assistence}</strong>
                </article>
                <article className="buttons">
                    <button onClick={a_plus}>+</button>
                    <button onClick={a_minus}>-</button>
                </article>
            </section>
            <section>
                <article>
                    <p>Body: </p>
                    <strong>{status.bodu}</strong>
                </article>
                <article className="buttons">
                    <button onClick={b_plus}>+</button>
                    <button onClick={b_minus}>-</button>
                </article>
            </section>
            <section>
                <article>
                    <p>Tresty: </p>
                    <strong>{status.trestu}</strong>
                </article>
                <article className="buttons bottons_more">
                    <button onClick={t_nul}>0</button>
                    <button onClick={t_min}>5</button>
                    <button onClick={t_med}>7</button>
                    <button onClick={t_hei}>10</button>
                </article>
            </section>
        </div> : <div>
            <h1>You don't select any players.</h1></div>}
        </>
    )
}

export default Player_stats
