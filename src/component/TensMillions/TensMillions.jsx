import Image from "next/image";
import medicalImg from "../../../public/assets/images/help-with-medical-bills.webp";
import classes from "./TensMillions.module.css";
const TensMillions = () => {
	return (
		<>
			<div className={classes.whole}>
				<div className={"container"}>
					<div className={classes.main}>
						<div className={classes.left}>
							<h3 className={classes.leftTitle}>
								Tens of Millions in Deep Debt
							</h3>
							<div className={classes.leftText}>
								Americans owe more than $190 Billion in medical debt! The
								average household balance is $4,600 in unpaid medical bills.
							</div>
							<div className={classes.leftText}>
								Medical debt is an all too familiar tale. A simple ER visit can
								amount to several thousand dollars out of pocket even if you
								have insurance coverage. Need a major surgery, a long hospital
								stay, or have a chronic disease? You&apos;re talking serious
								money that most people cannot afford to pay.
							</div>
						</div>
						<div className={classes.right}>
							<Image src={medicalImg} alt={"help with medical bills"} />
						</div>
					</div>
				</div>
			</div>

			<div className={"container"}>
				<div className={classes.title}>
					Medical debt is the most common debt reported on credit reports and
					the main debt driving collection activities. In fact, medical debt is
					reported to be the cause of 65% of US bankruptcies.
				</div>
			</div>
		</>
	);
};

export default TensMillions;
