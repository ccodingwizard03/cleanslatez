import Image from "next/image";
import Link from "next/link";
import Image2 from "../../../public/assets/images/medical.webp";
import { DONATE_NOW } from "../router/routerPath";
import classes from "./ProgramsHeaderWrap.module.css";
const ProgramsHeaderWrap = ({ children }) => {
	return (
		<header className={classes.whole}>
			<div className={classes.main}>
				{children}
				<div className={classes.mainInside}>
					<div className={classes.inside}>
						<div className={classes.left}>
							<div className={classes.swiperDiv}>
								<Image className='imgSwiper' src={Image2} alt='medical' />
							</div>
							<Link className={classes.btnDonate} href={DONATE_NOW}>
								Donate Now
							</Link>
						</div>
						<div className={classes.middle}>
							<h1 className={classes.title}>Medical debt relief program</h1>
							<div className={classes.text}>
								Our application program allows individuals that are saddled with
								past due medical debts to apply for financial relief.
							</div>
							<div className={classes.text}>
								The Application Program targets the complete abolishment of
								medical debt person-by-person, which has the most meaningful
								immediate impact on each individual. Our target impact is for
								every $100 donation we will aim to relieve $500 or more in
								medical debt.
							</div>
							<div className={classes.text}>
								We will work to settle debt with the creditors directly, and in
								cases where the applicant qualifies for charity care financial
								assistance through the provider, we will work to ensure they
								receive the benefits of that program.
							</div>
							<div className={classes.text}>
								Leveraging our volunteer team’s ability to negotiate and settle
								medical debt inexpensively is how we can stretch our donor
								dollars the farthest.
							</div>
							<div className={classes.text}>
								Please consider donating today.
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default ProgramsHeaderWrap;
