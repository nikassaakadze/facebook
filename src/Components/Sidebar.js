import React from 'react'
import '../custom/sidebar.css'
import SidebarRow from './SIdebarRow'
import Pages from '../static/pages.png';
import Friends from '../static/friends.png';
import Groups from '../static/groups.png';
import Events from '../static/events.png';
import Memories from '../static/memories.png';
import Saved from '../static/saved.png';
import Covid from '../static/covid.png';
import Works from '../static/works.png'
import Avatar from '@material-ui/core/Avatar'

function Sidebar({userName, userAvatar}) {
    return (
        <div className="sidebar">
            <div className="sidebar__userInfo">
                <Avatar src={userAvatar} />
                <h5>{userName}</h5>
            </div>
            <div className="sidebar__options">
                <div className="sidebar__option">
                    <img src={Covid} alt="covid-19-info-center" />
                    <h3>COVID-19 Information Center</h3>
                </div>
                <div className="sidebar__option">
                    <img src={Saved} alt="saved-items" />
                    <h3>Saved</h3>
                </div>
                <div className="sidebar__option">
                    <img src={Groups} alt="groups" />
                    <h3>Groups</h3>
                </div>
                <div className="sidebar__option">
                    <img src={Memories} alt="memories" />
                    <h3>Memories</h3>
                </div>
                <div className="sidebar__option">
                    <img src={Friends} alt="friends" />
                    <h3>Friends</h3>
                </div>
                <div className="sidebar__option">
                    <img src={Pages} alt="pages" />
                    <h3>Pages</h3>
                </div>
                <div className="sidebar__option">
                    <img src={Events} alt="events" />
                    <h3>Events</h3>
                </div>
                <div className="sidebar__option">
                    <img src={Works} alt="works" />
                    <h3>Works</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
