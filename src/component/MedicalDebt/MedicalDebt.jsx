import Image from "next/image";
import { useMemo } from "react";
import Image24 from "../../../public/assets/images/Image24.webp";
import classes from "./MedicalDebt.module.css";
import { medicalDate } from "./medicalDate";
const MedicalDebt = () => {
	const render = useMemo(() => {
		return medicalDate.map((item, index) => (
			<div className={classes.titleEffect} key={index}>
				{item.title}
				<span className={classes.textEffect}>{item.text}</span>{" "}
			</div>
		));
	}, [medicalDate]);

	return (
		<div className={"container"}>
			<div className={classes.content}>
				<h2 className={classes.title}>
					Medical Debt Causes Serious Problems - Sometimes for Years
				</h2>
				<div className={classes.subTitle}>
					Take a deep dive into the cascading effects of medical debt, an
					often-unseen crisis. This isn&apos;t just about bills—it&apos;s about
					lives, livelihoods, and long-term health repercussions.
				</div>
				<div className={classes.whole}>{render}</div>
				<div className={classes.imgDiv}>
					<Image src={Image24} alt={"medical"} />
				</div>
			</div>
		</div>
	);
};

export default MedicalDebt;
