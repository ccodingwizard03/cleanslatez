import Image from "next/image";
import Image17 from "../../../public/assets/images/Image17.webp";
import classes from "./DonateHelp.module.css";
const DonateHelp = () => {
	return (
		<section className={classes.whole}>
			<div className={"container"}>
				<div className={classes.main}>
					<div className={classes.left}>
						<div className={classes.subTitle}>We Need Your Help</div>
						<div className={classes.text}>
							Together, with your support, we can change narratives, transform
							lives, and stand up against the crippling weight of medical debt.
						</div>
						<div className={classes.text}>
							Stand with Clean SlateZ. Stand with Sarah, Jim, and countless
							others. Donate today, and be the beacon of hope in someone&apos;s
							darkest hour.
						</div>
					</div>
					<div className={classes.right}>
						<Image className={classes.imgStyle} src={Image17} alt={""} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default DonateHelp;
