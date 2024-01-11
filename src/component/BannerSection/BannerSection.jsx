import classes from "./BannerSection.module.css";
const BannerSection = ({descShort,descLong}) => {
	return (
		<>
			<div className={classes.whole}>
				<div className={"container"}>
					<div className={classes.text}>
						{descLong}
					</div>
					<div className={classes.text}>
						{descShort}
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerSection;
