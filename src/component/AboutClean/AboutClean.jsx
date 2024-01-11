import Image from "next/image";
import hospitalImg from "../../../public/assets/images/hospital-debt.webp";
import medicalImg from "../../../public/assets/images/medical-debt.webp";
import classes from "./AboutClean.module.css";
const AboutClean = () => {
	return (
		<section className={"container"}>
			<div className={classes.main}>
				<div className={classes.left}>
					<Image
						className={classes.img}
						src={medicalImg}
						alt={"medical debt"}
					/>
				</div>
				<div className={classes.right}>
					<div className={classes.title}>about us</div>
					<div className={classes.text}>
						At Clean SlateZ, we believe in the power of a fresh start.
						We&apos;ve seen the harsh realities that countless Americans face
						due to the weight of medical debt—dreams shattered, futures
						uncertain, and the ever-looming fear of a financial pitfall.
						It&apos;s not just about the money owed; it&apos;s about the immense
						stress, strain on families, and the dimming light of hope.
					</div>
					<div className={classes.text}>
						Born out of a profound understanding of these challenges, Clean
						SlateZ emerged as a beacon of hope. Our purpose is rooted in
						compassion, understanding, and a drive to make a tangible
						difference. We are devoted to improving the financial well-being of
						economically disadvantaged individuals. Through the strategic use of
						donations, we aim to give every individual an opportunity to begin
						anew, free from the shackles of medical debt.
					</div>
					<div className={classes.text}>
						Our dedicated team, with their vast experience and passion, works
						tirelessly to turn our vision into a reality. From negotiating with
						providers to validating each application, our team ensures that the
						process is seamless, giving beneficiaries the clean slate they truly
						deserve.
					</div>
				</div>
			</div>
			<div className={classes.below}>
				<div className={classes.left}>
					<Image
						className={classes.imageStyle}
						src={hospitalImg}
						alt={"hospital debt forgiveness"}
					/>
				</div>
				<div className={classes.right}>
					<div className={classes.titleBelow}>Our Purpose</div>
					<div className={classes.textBelow}>
						“To revolutionize financial well-being by eliminating medical debt
						burdens. Through strategic use of donations, Clean SlateZ strives to
						provide financial relief and alleviate the burden of medical debt
						for those in need, offering economically disadvantaged individuals a
						fresh start. We firmly believe that healthcare should empower lives,
						not limit them.&quot;{" "}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutClean;
