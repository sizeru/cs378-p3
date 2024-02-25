import React from 'react';

const MenuFooter = ({total, onReset, onOrder}) => {
    return (
        <div className='menu-footer'>
            <p>TOTAL: {total.toFixed(2)}</p>
            <div className='menu-footer-buttons'>
                <button className='menu-item-button' onClick={onOrder}>Order</button>
                <button className='menu-item-button' onClick={onReset}>Clear All</button>
            </div>
        </div>
    );
};

export default MenuFooter;