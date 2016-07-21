import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SideBar from './sidebar/sidebar.jsx';
import AppHeader from '../layouts/app/app_header.jsx';
import AppFooter from '../layouts/app/app_footer.jsx';
import StatisticView from './views/statistics/statistics.jsx';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    getContentView() {
        let contentView = this.props.children;

        return contentView ? contentView : <StatisticView />;
    }

    render() {

        const contentMinHeight = {
            minHeight: ((window.innerHeight - 101) + 'px')
        };

        return (
            <div className="wrapper">
                <AppHeader user={ this.props.currentUser }/>
                <SideBar user={ this.props.currentUser } users={ this.props.users }/>
                
                <div className="content-wrapper" style={ contentMinHeight }>
                    { this.getContentView() }
                </div>

                <AppFooter />
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    currentUser: PropTypes.object,
    users: PropTypes.arrayOf(PropTypes.object)
};

export default createContainer(() => {
    /**
     * Add subscription here
     */
    Meteor.subscribe('users');

    return {
        currentUser: Meteor.user(),
        users: Meteor.users.find().fetch()
    };
}, Dashboard);
