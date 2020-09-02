import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({name}) => {
    return (
        <div>
           <div>{name}</div>
           <ul>
                <li>
                    <Link to='/feed' />
                </li>
                <li>
                    <Link to='/friends' />
                </li>
                <li>
                    <Link to='/chat-lista' />
                </li>
                <li>
                    <Link to='/notifications' />
                </li>
            </ul>
        </div>
    );
}

export default Menu;
