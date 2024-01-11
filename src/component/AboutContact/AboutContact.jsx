import Image from "next/image";
import Link from "next/link";
import howImg from "../../../public/assets/images/how-to-pay.webp";
import { DONATE_NOW } from "../router/routerPath";
import Button from "../ui/Button/Button";
import classes from "./AboutContact.module.css";
const AboutContact = () => {
	return (
		<section className={classes.whole}>
			<div className={"container"}>
				<div className={classes.main}>
					<div className={classes.left}>
						<div className={classes.blueTitle}>Contact US</div>
						<div className={classes.blueSubTitle}>
							Got questions or thinking about partnering with our mission? Clean
							SlateZ is here for you!
						</div>
						<div className={classes.blueText}>
							Whether you&apos;re seeking assistance, looking to contribute, or
							just want to learn more about our impactful work, our dedicated
							team is ready to assist.
						</div>
						<div className={classes.blueText}>
							Every inquiry matters to us, as every step brings us closer to
							wiping out medical debt for many. Don&apos;t hesitate; your
							opportunity for a fresh start or to make a transformative
							contribution is just a few clicks away.
						</div>
						<div className={classes.btnDiv}>
							<Link href={DONATE_NOW}>
								<Button>Donate Now</Button>
							</Link>
						</div>

						<div className={classes.blueTitle}>
							Connect with us, and together, let&apos;s reshape futures and
							offer renewed hope.
						</div>
						<div className={classes.mailRow}>info@cleanslatez.org</div>
					</div>
					<div className={classes.imgDiv}>
						<Image src={howImg} alt={"how to pay off medical bills"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutContact;
