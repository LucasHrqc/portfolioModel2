import React from 'react'
import PropTypes from 'prop-types'
import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col -mt-3 pb-4 items-center'>
        {links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  )
}

MenuOverlay.propTypes = {}

export default MenuOverlay