import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({name, description, price, image_src}) => {
	return (
		<div className="menu-item">
			<img className="menu-item-image" src={`./images/${image_src}`}/>
      <div className="menu-item-content">
        <div className="description-box">
          <p className="food-title">{name}</p>
          <p className="food-description">{description}</p>
        </div>
        <div className="menu-item-price-box">
					<p>${price}</p>
					<button className='menu-item-button'>Add</button> 
        </div>
      </div>
		</div>
	);
};

export default MenuItem;
