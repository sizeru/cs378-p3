import menuItems from './items.json';
import { React, useState } from 'react';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

function App() {
	const [total, setTotal] = useState(0)
	let [quantities, setQuantities] = useState(Array(menuItems.length).fill(0))
	let items = Array(menuItems.length)

  const updateTotal = (quantities) => {
    let sum = 0
    for (let i = 0; i < menuItems.length; i++) {
      sum += quantities[i] * menuItems[i].price
    }
    setTotal(sum)
  }

  const reset = () => {
    setQuantities(Array(menuItems.length).fill(0))
    updateTotal(Array(menuItems.length).fill(0))
  }

  const order = () => {

  }

	for (let i = 0; i < menuItems.length; i++) {
		let item = menuItems[i]

    const update = (quantity) => {
      let temp = quantities
      temp[i] = quantity
      setQuantities(temp)
      updateTotal(temp)
    }

		items[i] = <MenuItem
			name={item.title} 
      quantity={quantities[i]}
			description={item.description}
			price={item.price}
			image_src={item.imageName}
      setQuantity={update}
		/>
	}

	return (
		<main>
			<MenuHeader logo="./logo_full.jpg" flavor_text="Japanese Cuisine At UT"/>
			{items}
      <MenuFooter total={total} onReset={reset} onOrder={order}/>
			{/* Display menu items dynamicaly here by iterating over the provided menuItems */}
			{/* <MenuItem .title} /> Example for how to use a component */}
		</main>
	);
}

export default App;