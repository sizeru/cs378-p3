import './App.css';
import { useState } from 'react';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';


// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

export const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
	// const [subtotals, setSubtotals] = useState([])
	const [total, setTotal] = useState(0)

	// subtotals is an array of states and setters
	let subtotals = Array(menuItems.length).fill(useState(0))
	let items = Array(menuItems.length)

	for (let i = 0; i < menuItems.length; i++) {
		let [subtotal, setSubtotal] = subtotals[i]
		let item = menuItems[i]
		items[i] = <MenuItem 
			updateSubtotal={setSubtotal}
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
			{/* Display menu items dynamicaly here by iterating over the provided menuItems */}
			{/* <MenuItem .title} /> Example for how to use a component */}
		</main>
	);
}

export default App;
