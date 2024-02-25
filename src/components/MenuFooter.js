import React from 'react';

const MenuFooter = ({total, onReset, onOrder}) => {
    return (
        <div className='menu-footer'>
            <p>TOTAL: {total}</p>
            <button className='menu-item-button' onClick={onOrder}>Order</button>
            <button className='menu-item-button' onClick={onReset}>Clear All</button>
        </div>
    );
};

export default MenuFooter;