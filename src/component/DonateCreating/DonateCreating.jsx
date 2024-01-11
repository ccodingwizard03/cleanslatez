import Image from "next/image";
import charityImg from "../../../public/assets/images/charity-medical.webp";
import classes from "./DonateCreating.module.css";
const DonateCreating = () => {
	return (
		<section className={"container"}>
			<div className={classes.main}>
				<div className={classes.left}>
					<div className={classes.subTitle}>Creating Hope for Thousands</div>
					<div className={classes.text}>
					That&apos;s where Clean SlateZ steps in, with our transformative program dedicated to alleviating the burden of medical debt. Our initiative focuses on helping individuals like Sarah and Jim, providing debt relief so they can concentrate on what’s really important.

					</div>
					<div className={classes.text}>
					The heart of our program is a shared foundation: the unparalleled generosity of donors like you. Your donation isn&apos;t just about numbers on a bill; it&apos;s about reigniting hope, rebuilding futures, and rekindling dreams.
					</div>
					<div className={classes.text}>
					Your contribution helps us erase these debts—with zero tax implications for the recipient. It&apos;s a pure act of kindness, ensuring that every recipient can start anew, free from the shadows of mounting bills.

					</div>
				</div>
				<div className={classes.right}>
					<Image
						className={classes.imgStyle}
						src={charityImg}
						alt={"charity for medical bills"}
					/>
				</div>
			</div>
		</section>
	);
};

export default DonateCreating;
