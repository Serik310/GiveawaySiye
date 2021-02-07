import React, { useEffect, useState } from 'react';
import UseStyles from '../style.js';
import classNames from 'classnames';
import ShortTable from './ShortTable.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Timer from './Coutdown.js';

function TotalInfoPanel() {
    const color_one = {
        backgroundColor: 'black'
    }
    const color_two = {
        backgroundColor: 'green'
    }
    const color_three = {
        backgroundColor: 'blue'
    }
    const color_four = {
        backgroundColor: 'red'
    }

    return (
        <ul>
            <li style={color_one}>
                Giveaways:
            </li>
            <li style={color_two}>
                Winners:
            </li>
            <li style={color_three}>
                Items:
            </li>
            <li style={color_four}>
                Participants:
            </li>
        </ul>
    )
}

function MainContent(props) {

    const classes = UseStyles();

    const [giveaways, setGiveaways] = useState([]);
    const [paidGiveaways, setPaidGiveaways] = useState([]);

    useEffect(() => {
        let is_archived;
        let q;
        let cost__lt;
        let cost__gt

        axios.all([
            //FIRST AXIOS
            is_archived = false,
            q = 'id',
            cost__lt = 1,
            cost__gt = -1,
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/giveaway/',
                params: {
                    is_archived,
                    q,
                    cost__gt,
                    cost__lt,
                }
            }).then(response => {
                setGiveaways(response.data)
            }),

            //SECOND AXIOS//
            is_archived = false,
            cost__gt = 0,
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/giveaway/',
                params: {
                    is_archived,
                    q,
                    cost__gt,
                }
            }).then(response => {
                setPaidGiveaways(response.data)
            }),

        ])
    }, [])

    const first_free = giveaways[0]
    const first_paid = paidGiveaways[0]

    console.log([first_free])
    return (
        <div>
            <div className={classes.back_giveaway}>
                <div className={classNames('container', classes.container_giveaway)}>
                    <div className={classNames('row', classes.z_giveaway)}>
                        <div className='col'>
                            <div className={classes.free_giveaway}>
                            <img src={first_free?.image}></img>
                                <button>Participate</button>

                            </div>
                        </div>
                        <div className='col'>
                            <div className={classes.paid_giveaway}>
                                <img src={first_paid?.image}></img>
                                <button>Participate</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={`container ${classes.back_table}`}>
                    <div className="row">
                        <div className="col-8">
                            Latest 10 Giveaways
                    </div>
                        <div className={`col ${classes.total_info}`}>
                            <span>Total</span>
                        </div>
                    </div>
                    <div className="row">
                        <ShortTable />
                        <div className={`col ${classes.total_info}`}>
                            <TotalInfoPanel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
