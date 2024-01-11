import Image from "next/image";
import Link from "next/link";
import debtImg from "../../../public/assets/images/debt-collector-medical-bills.webp";
import { DONATE_NOW, PROGRAMS } from "../router/routerPath";
import classes from "./Absolutely.module.css";

const Absolutely = () => {
	return (
		<div className={classes.whole}>
			<div className={"container"}>
				<div className={classes.main}>
					<div className={classes.left}>
						<div className={classes.blueTitle}>
							Is there a way to tackle this mammoth issue?
						</div>
						<div className={classes.title}>Absolutely!</div>
						<div className={classes.subTitle}>
							With our team’s diverse experience in healthcare billing and
							medical collections, we understand the ins and outs of the
							problem. More importantly, we&apos;ve crafted solutions that truly
							address it.
						</div>
						<div className={classes.text}>
							Click
							<Link className={classes.here} href={PROGRAMS}>
								here
							</Link>{" "}
							to learn about our programs that helps individuals and families
							recover financially from medical debt.
						</div>
						<div className={classes.text}>
							Your small gift can have a big impact on medical bills. We can do
							this! Help us on the journey today with a donation, and together
							let’s reset everyone to Clean SlateZ.
						</div>
						<Link className={classes.donateBtn} href={DONATE_NOW}>
							Donate Now
						</Link>
					</div>
					<div className={classes.right}>
						<Image src={debtImg} alt='debt collector medical bills' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Absolutely;
