import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, PerfilContainerMenu, MenuList, MenuItem } from '../menu/index.style.js';
import {FeedListOwnerImage } from '../../components/FeedList';

const Menu = ({user, overlay}) => {
    return (
        <MenuContainer overlay={overlay}>
            <PerfilContainerMenu>
                <Link to='/perfil'>
                    <FeedListOwnerImage src={user.image} alt='topic owner' color={user.color} />
                </Link>
                <div>{user.name} {user.surName}</div>
           </PerfilContainerMenu>
           <hr/>
           <MenuList>
                <MenuItem>
                    <Link to='/feed'>
                        <img src='./img/menuIcons/feed.png' alt='icon' />
                        Feed
                    </Link>
                </MenuItem>
                {/* <MenuItem>
                    <Link to='/friends'>
                        <img src='./img/menuIcons/friends.png' alt='icon' />
                        Amigos
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/chat-lista'>
                        <img src='./img/menuIcons/chat.png' alt='icon' />
                        Chat
                    </Link>
                </MenuItem> */}
            </MenuList>
        </MenuContainer>
    );
}

export default Menu;
