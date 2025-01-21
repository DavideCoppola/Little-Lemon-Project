const navElems = [
	"HOME",
	"ABOUT",
	"MENU",
	"RESERVATIONS",
	"ORDER ONLINE",
	"LOGIN",
];

const NavigationMenu = () => {
	return (
		<nav>
			<ul>
				{navElems.map((elem, key) => {
					return <li key={key.toString()}>{elem}</li>;
				})}
				{/* <li>
					<a href="index.html">Home</a>
				</li>
				<li>Menu</li>
				<li>Dishes</li>
				<li>Contacts</li> */}
			</ul>
		</nav>
	);
};

export default NavigationMenu;
