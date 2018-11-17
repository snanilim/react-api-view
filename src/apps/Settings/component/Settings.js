import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const Settings = () => {
    return (
        <div>
            <Card
                style={{ width: 300 }}
                cover={<Link to="/settings/menu"><img className="w-100" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" /> </Link>}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Menu Settings"
                    description="Create And Setting Menu"
                />
            </Card>
        </div>
    )
};

export default Settings;
