import React from 'react';
import {useSelector} from 'react-redux';

import {Card, Avatar} from 'antd';
import moment from 'moment';

const {Meta} = Card
const ConnectNav =() => {

    const {auth} = useSelector((state)=> ({...state}));
    const {user} = auth;

    return(
        <div className="d-flex justfiy-content-around">
            <Card>
                <Meta
                    avatar = {<Avatar>{user.name[0]}</Avatar>}
                    title = {user.name}
                    description ={`Joined ${moment(user.createdAt).fromNow()}`}
                
                />
            </Card>
        </div>
    )
}

export default ConnectNav ;