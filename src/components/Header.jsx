import LittleLemonHeaderImg from "../assets/littleLemonHeader.png";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
	return (
		<header style={{ display: "flex", justifyContent: "center" }}>
			<img
				src={LittleLemonHeaderImg}
				style={{ width: "20%" }}
				alt="Little Lemon Restaurant Header"
			/>
			<NavigationMenu />
		</header>
	);
};

export default Header;
