import React, { useState } from 'react'
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import { ReactComponent as CheronIcon } from './icons/chevron.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { CSSTransition } from 'react-transition-group'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavItem icon={<PlusIcon />} />
                <NavItem icon={<BellIcon />} />
                <NavItem icon={<MessengerIcon />} />
                <NavItem icon={<CaretIcon />} >
                    <DropDownMenu />
                </NavItem>
            </ul>
        </nav>
    )
}


const NavItem = ({ icon, children }) => {
    const [open, setOpen] = useState(false)
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {icon}
            </a>
            { open && children}
        </li>


    )
}

const DropDownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main')

    const DropDownItem = ({ leftIcon, children, reightIcon }) => {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button">{leftIcon}</span>
                {children}
                <span className="icon-right">{reightIcon}</span>
            </a>
        )
    }


    return (

        <div className="dropdown">
            <DropDownItem>My Profile</DropDownItem>
            <DropDownItem leftIcon={<CogIcon />} reightIcon={<CheronIcon />}>Settings</DropDownItem>




        </div>
    )
}



export default NavBar
