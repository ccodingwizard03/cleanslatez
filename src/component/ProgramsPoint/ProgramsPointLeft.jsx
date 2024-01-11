import Image from "next/image";
import medicalImg from "../../../public/assets/images/medical-debt-forgiveness.webp";
import classes from "./ProgramsPoint.module.css";

const ProgramsPointLeft = () => {
	return (
		<section className={"container"}>
			<div className={classes.main}>
				<div className={classes.right}>
					<h3 className={classes.title}>Wholesale Program</h3>
					<div className={classes.subTitle}>
						In this program, we buy past due medical debt from providers and on
						the collection resale market in a portfolio. We can buy these
						accounts in bulk at a significant discount off the cost of the
						original debt owed. This approach, while extremely beneficial, could
						still leave medical debt for the individual as we are not able to
						purchase all their potential medical debt, just what is in the
						portfolio we are buying. This is the most cost-effective way for us
						to abolish debt. The shortcoming is that it is not truly giving a
						clean slate to anyone that has multiple bills from multiple
						providers.
					</div>
					<div className={classes.title}>Wholesale Process:</div>
					<div className={classes.row}>
						<div className={classes.rowLeft} />
						<div className={classes.rowRight}>
							We negotiate with providers and collection account resalers for
							thousands of past due accounts at a time.
						</div>
					</div>
					<div className={classes.row}>
						<div className={classes.rowLeft} />
						<div className={classes.rowRight}>
							We validate the individuals meet the eligibility criteria.
						</div>
					</div>
					<div className={classes.row}>
						<div className={classes.rowLeft} />
						<div className={classes.rowRight}>
							We buy the debt of eligible individuals in the bundle.
						</div>
					</div>
					<div className={classes.row}>
						<div className={classes.rowLeft} />
						<div className={classes.rowRight}>
							We send payment directly to the party that we bought the debt
							from.
						</div>
					</div>
					<div className={classes.row}>
						<div className={classes.rowLeft} />
						<div className={classes.rowRight}>
							Letters are mailed to the individual that their debt has been
							relieved.
						</div>
					</div>
				</div>
				<div>
					<Image
						className={classes.doctorImg}
						src={medicalImg}
						alt={"medical debt forgiveness programs"}
					/>
				</div>
			</div>
		</section>
	);
};

export default ProgramsPointLeft;
