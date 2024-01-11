import Image from "next/image";
import Link from "next/link";
import Image2 from "../../../public/assets/images/medical.webp";
import { DONATE_NOW } from "../router/routerPath";
import classes from "./AboutHeaderWrap.module.css";
const AboutHeaderWrap = ({ children }) => {
	return (
		<header>
			<div className={classes.whole}>
				<div className={classes.main}>
					{children}
					<div className={classes.middle}>
						<div className={classes.middleLeft}>
							<div className={classes.swiperDiv}>
								<Image
									className={classes.imgSwiper}
									src={Image2}
									alt='medical'
								/>
							</div>
							<Link className={classes.btnStyle} href={DONATE_NOW}>
								Donate Now
							</Link>
						</div>
						<div className={classes.middleInside}>
							<div className={classes.middlePartTitle}>Mission Statement</div>
							<div className={classes.middlePartSubTitle}>
								To offer financial relief to those struggling with medical debt.
							</div>
						</div>
						<div />
					</div>
					<div className={classes.below}>
						<div className={classes.belowWhole}>
							<div className={classes.text}>Together, let’s reset </div>
							<div className={classes.text}>everyone to Clean SlateZ!</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AboutHeaderWrap;
