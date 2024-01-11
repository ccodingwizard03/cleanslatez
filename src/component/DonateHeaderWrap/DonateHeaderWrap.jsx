import Image from "next/image";
import Link from "next/link";
import Image2 from "../../../public/assets/images/medical.webp";
import { DONATE_NOW } from "../router/routerPath";
import classes from "./DonateHeaderWrap.module.css";
const DonateHeaderWrap = ({ children }) => {
	return (
		<header className={classes.whole}>
			<div className={classes.main}>
				{children}
				<div className={classes.mainInside}>
					<div className={classes.inside}>
						<div className={classes.left}>
							<div className={classes.swiperDiv}>
								<Image className='imgSwiper' src={Image2} alt={"medical"} />
							</div>
							<Link className={classes.btnDonate} href={DONATE_NOW}>
								Donate Now
							</Link>
						</div>
						<div className={classes.middle}>
							Change a Life, Erase a Debt: Support Medical Debt Relief Today
						</div>
						<div />
					</div>
				</div>
			</div>
		</header>
	);
};

export default DonateHeaderWrap;
