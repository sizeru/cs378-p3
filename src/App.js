import './App.css';
import menuItems from './items.json';
import { useState } from 'react';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';


// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.


function App() {
	const [total, setTotal] = useState(0)

	// subtotals is an array of states and setters
	let subtotals = Array(menuItems.length).fill(0)
	let items = Array(menuItems.length)

  const updateTotal = () => {
    let sum = 0
    for (let i = 0; i < menuItems.length; i++) {
      sum += subtotals[i]
    }
    // for (let i = 0; i < menuItems.length; i++) {
    //   let [subtotal, _] = subtotals[i]
    //   sum += Number(subtotal)
    //   console.log("subtotal %d", subtotal)
    // }
    // for (let state in subtotals) {
    //   state.0
    //   sum += parseInt(subtotal, 10)
    // }
    setTotal(sum)
  }


	for (let i = 0; i < menuItems.length; i++) {
		let item = menuItems[i]

    const updateSubtotal = (sub) => {
      subtotals[i] = sub
      updateTotal()
    }

		items[i] = <MenuItem
			updateSubtotal={updateSubtotal}
			name={item.title} 
			description={item.description}
			price={item.price}
			image_src={item.imageName}
		/>
	}


	return (
		<main>
			<MenuHeader logo="./logo_full.jpg" flavor_text="Japanese Cuisine At UT"/>
			{items}
      <h1>TOTAL: {total}</h1>
			{/* Display menu items dynamicaly here by iterating over the provided menuItems */}
			{/* <MenuItem .title} /> Example for how to use a component */}
		</main>
	);
}

export default App;
