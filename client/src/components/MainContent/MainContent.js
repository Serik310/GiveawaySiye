import React, { useEffect, useState } from 'react';
import UseStyles from '../style.js';
import classNames from 'classnames';
import ShortTable from './ShortTable.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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

function MainContent() {

    const classes = UseStyles();

    const phone = <FontAwesomeIcon icon={faPhone} />
    const google = <FontAwesomeIcon icon={faEnvelope} />

    const [giveaways, setGiveaways] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/giveaway/',
        }).then(response => {
            setGiveaways(response.data)
        })
    }, [])

    return (
        <div>
            <div className={classes.back_giveaway}>
                <div className={classNames('container', classes.container_giveaway)}>
                    <div className={classNames('row', classes.z_giveaway)}>
                        <div className='col'>
                            <div className={classes.free_giveaway}>
                                <img src="https://9to5mac.com/wp-content/uploads/sites/6/2020/10/Survivor-Giveaway-Banner-V2.jpg?quality=82&strip=all" />
                            </div>
                            <span>
                                00:00:00
                    </span>
                        </div>
                        <div className='col'>
                            <div className={classes.paid_giveaway}>
                                <img src="https://www.republiclab.com/wp-content/uploads/2019/02/samsung-s10-giveaway.jpg" />
                            </div>
                            <span>
                                00:00:00
                    </span>
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
