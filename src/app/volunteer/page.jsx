import Image from "next/image";
import Image23 from "../../../public/assets/images/Image23.webp";
import Header from "../../component/Header";
import classes from "./Volunteer.module.css";
const Volunteer = () => {
	return (
		<>
			<header className={classes.smallScreens}>
				<div className={classes.headerDiv}>
					<Header />
				</div>
			</header>
			<div className='container'>
				<div className={classes.whole}>
					<div className={classes.left}>
						<div className={classes.title}>VOLUNTEER</div>
						<div className={classes.text}>
							Interested in getting involved with Clean SlateZ?
						</div>
						<div className={classes.text}>
							We are delighted and honored to have your help and expand the
							impact that we can have together! There are many ways to volunteer
							and help our organization. We are always seeking folks who want to
							make a difference with us.
						</div>
						<div className={classes.text}>
							<span className={classes.subTitle}>
								Please send an email to info@cleanslatez.org
							</span>
							and we will connect with you to discuss the best fit based on your
							interests and available volunteer time.
						</div>
					</div>
					<div className={classes.right}>
						<Image className={classes.imgStyle} src={Image23} alt={""} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Volunteer;
