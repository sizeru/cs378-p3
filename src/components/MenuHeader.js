import React from 'react'

const MenuHeader = ({logo, flavor_text}) => {
	return (
		<div className='menu-header'>
			<img className='menu-logo' src={logo}/>
			<h2 className='menu-flavor-text'>{flavor_text}</h2>
		</div>
	);
};

export default MenuHeader;