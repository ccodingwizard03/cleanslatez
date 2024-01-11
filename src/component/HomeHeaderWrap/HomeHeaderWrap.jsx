import Image from "next/image";
import Link from "next/link";
import image2 from "../../../public/assets/images/medical.webp";
import { DONATE_NOW } from "../router/routerPath";
import classes from "./HomeHeaderWrap.module.css";

function HomeHeaderWrap({ children }) {
	return (
		<header className={classes.whole}>
			<div className={classes.main}>
				{children}
				<div className={classes.middle}>
					<div className={classes.middleLeft}>
						<div className={classes.swiperDiv}>
							<Image className={classes.imgSwiper} src={image2} alt='medical' />
						</div>
						<Link className={classes.btnStyle} href={DONATE_NOW}>
							Donate Now
						</Link>
					</div>
					<div className={classes.middleRight}>
						<h1 className={classes.middlePart1}>
							Help us wipe out medical bills. 
						</h1>
						<p className={classes.middlePart1}> The collective power of us working together is unstoppable.</p>
						
					</div>
				</div>
				<div className={classes.below}>
					<div className={classes.belowWhole}>
						<div className={classes.text}>Together, let’s reset </div>
						<div className={classes.text}>everyone to Clean SlateZ!</div>
					</div>
					<div className={classes.belowRight}>
						<div className={classes.belowTitle}>
							Help us heal patients financially
						</div>
						<div className={classes.belowText}>
							{" "}
							Your donation will help alleviate medical financial debt for
							everyday people who could use the help the most.
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HomeHeaderWrap;
