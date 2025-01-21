import LittleLemonFooterImg from "../assets/littleLemonFooter.png";

const Footer = () => {
	return (
		<footer>
			<div>
				<img src={LittleLemonFooterImg} style={{ width: "10%", height: "10%" }} />
			</div>
			<div>
				<p>Little Lemon Copyright</p>
			</div>
		</footer>
	);
};

export default Footer;
