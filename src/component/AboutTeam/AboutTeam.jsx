import Image from "next/image";
import medImg from "../../../public/assets/images/medical-debt-act.webp";
import classes from "./AboutTeam.module.css";
const AboutTeam = () => {
	return (
		<section className={"container"}>
			<div className={classes.main}>
				<div className={classes.left}>
					<div className={classes.title}>TEAM</div>
					<div className={classes.text}>
						Our strength lies in our dedicated team—a collective of
						compassionate individuals driven by a shared vision. Every member
						brings expertise, commitment, and a genuine desire to change lives.
						Together, we aren&apos;t just relieving debt; we&apos;re restoring
						hope, dignity, and dreams.
					</div>
				</div>
				<div className={classes.imgDiv}>
					<Image
						className={classes.img}
						src={medImg}
						alt={"medical debt forgiveness act"}
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutTeam;
