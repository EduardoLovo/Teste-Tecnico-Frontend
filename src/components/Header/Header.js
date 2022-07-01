import React from 'react';
import './Header.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiThLargeOutline } from 'react-icons/ti';

export const Header = () => {
    return (

        <div className='header'>
            <div className='buttonHeader'>
                <button><TiThLargeOutline /></button>
            </div>

            <h2>Controle financeiro</h2>

            <div className='buttonHeader'>
                <button><GiHamburgerMenu /></button>
            </div>
        </div>


    )
}
