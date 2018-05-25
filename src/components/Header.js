import React from 'react';
import logo from '../logo.svg';

//Stateless function component
const Header = () => {
    return (
        <header className="main-header">
            <div className="header-wrap">

                <div className="header__title">
                    <img src={logo} className="header__title--logo" alt="logo" />
                    <p className="header__title--name">Welcome to React</p>
                </div>

                <nav className="header__menu">
                    <a className="header__menu--item" href="">Добавить</a>
                    <a className="header__menu--item" href="">О нас</a>
                </nav>


            </div>
        </header>
    )
}


export default Header;