import { cardSpecialInfo } from "../resources/constants";
import CardSpecials from "./CardSpecial";
const Specials = () => {
	return (
		<section
			style={{
				margin: "0 11rem 0 11rem",
			}}
		>
			<article style={{ display: "flex", justifyContent: "space-between" }}>
				<h2 style={{ fontWeight: "bold" }}>Specials</h2>
				<button
					style={{
						backgroundColor: "#F4CE14",
						color: "#000000",
						borderRadius: "0.5rem",
						marginTop: "auto",
						marginBottom: "auto",
					}}
				>
					Online Menu
				</button>
			</article>
			<article
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "1rem",
				}}
			>
				{cardSpecialInfo.map((cardInfo, index) => {
					return (
						<CardSpecials
							key={"cardSpecial" + index.toString()}
							image={cardInfo.image}
							title={cardInfo.title}
							price={cardInfo.price}
							desc={cardInfo.desc}
						/>
					);
				})}
			</article>
		</section>
	);
};

export default Specials;
