import React, {useContext, useState} from 'react'
import '../custom/header.css'
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {auth} from '../firebase'
import Menu from '@material-ui/core/Menu';
import {UserContext} from '../UserContext'

function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useContext(UserContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className="header">
            <div className="header__left">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt="facebook-logo-icon"
                className="header__logo-image" />
            <div className="header__search">
                <SearchIcon/>
                <input placeholder="Search Facebook" type="search" />
            </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon  />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon />
                </div>
                <div className="header__option">
                    <StorefrontIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar className="header__info--avatar" src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
            <IconButton className="userOption">
                <AddIcon/>
            </IconButton>
            <IconButton className="userOption">
                <ForumIcon/>
            </IconButton>
            <IconButton className="userOption">
                <NotificationsIcon/>
            </IconButton >
            <IconButton className="userOption">
                <ExpandMoreIcon 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}/>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                <a 
                className="header__signout" 
                href="" 
                onClick={() => auth.signOut()} > Sign Out </a>
                </Menu>
            </IconButton>
            </div>
        </div>
    )
}

export default Header
