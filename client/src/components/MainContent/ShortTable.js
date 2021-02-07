import React from 'react';
import UseStyles from '../style.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

function ShortTable(props) {

    const classes = UseStyles();

    const [giveawayHistory, setGiveawaysHistory] = useState([])

    useEffect(() => {
        const is_archived = true;
        //q = ordering//
        const q = '-id';
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/giveaway/',
            params: {
                is_archived,
                q,
            }
        }).then(response => {
            setGiveawaysHistory(response.data)
        })
    }, [])

    return (
        <div className='col-8'>
            <div>
                <div>
                    <table className="table table-striped table-hover">
                        <caption>More</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Date</th>
                                <th scope="col">Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {giveawayHistory.map(p => {
                                return(
                                <tr>
                                    <th scope="row">{p.id}</th>
                                    <td className={classes.short_table}><img src={p.image} /></td>
                                    <td key={p.id}>{p.title}</td>
                                    <td>{p.created_at}</td>
                                    <td>{p.winner}</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShortTable;