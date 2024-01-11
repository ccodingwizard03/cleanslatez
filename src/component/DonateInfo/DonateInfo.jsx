import Image from "next/image";
import charityImg from "../../../public/assets/images/charity-help.webp";
import billImg from "../../../public/assets/images/medical-bill-grants.webp";
import classes from "./DonateInfo.module.css";
const DonateInfo = () => {
	return (
		<section className={"container"}>
			<div className={classes.subTitle}>
				You may have been personally impacted by medical debt, or likely know
				someone who has. The stories are all too familiar and the common chord
				is not having the financial means to pay for their medical debt.
			</div>
			<div className={classes.main}>
				<div className={classes.left}>
					<Image
						className={classes.imgStyle}
						src={billImg}
						alt={"medical bill grants"}
					/>
				</div>
				<div className={classes.right}>
					<div className={classes.text}>
						Consider Sarah, a single mother of two. She&apos;d always been
						diligent about her health, but last year, she was diagnosed with a
						chronic condition requiring specialized treatment.
					</div>
					<div className={classes.text}>
						While Sarah focused on getting better for her children, the medical
						bills piled up. Soon, she found herself choosing between medications
						and meals for her kids.
					</div>
				</div>
			</div>
			<div className={classes.main}>
				<div className={classes.left}>
					<Image
						className={classes.imgStyle}
						src={charityImg}
						alt={"charity help for medical bills"}
					/>
				</div>
				<div className={classes.right}>
					<div className={classes.text}>
						Then there’s Jim, a hardworking father of three, who faced an
						agonizing reality when he sought medical attention for persistent
						back pains. Despite the urgency of his condition, he was turned away
						due to the towering medical debts his family had accumulated from
						past procedures.
					</div>
					<div className={classes.text}>
						The shadow of previous treatments, intended to heal and support, now
						stood as barriers to his immediate healthcare needs. This crushing
						setback not only jeopardized Jim&apos;s health but also underscored
						the relentless cycle many families find themselves trapped in—a
						cycle where past medical debt dictates and limits their future
						health prospects.
					</div>
				</div>
			</div>
			<div className={classes.below}>
				<div className={classes.row}>
					<div className={classes.rowLeft} />
					<div className={classes.rowRight}>
						These aren&apos;t just stories; they are the harrowing truths that
						paint the everyday lives of countless Americans. Medical debt casts
						a long, oppressive shadow, reaching far beyond just emptied bank
						accounts.
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.rowLeft} />
					<div className={classes.rowRight}>
						It&apos;s the constant cloud of worry that looms, threatening to
						rain down more hardships. Dreams of homeownership, higher education
						for children, or even just a comfortable retirement are often
						postponed or forsaken entirely due to insurmountable medical bills.
						Families, once united in love and shared aspirations, find
						themselves torn apart by the stress and strain of endless collection
						calls and mounting debt.
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.rowLeft} />
					<div className={classes.rowRight}>
						The emotional toll is equally devastating. Many plunge into the
						depths of depression, feeling trapped and defeated. Hope, the very
						thing that fuels our perseverance, begins to wane, replaced by a
						relentless anxiety about the future.
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.rowLeft} />
					<div className={classes.rowRight}>
						For many, the ramifications of medical debt become a life sentence,
						imprisoning them in a cycle of financial instability and emotional
						despair.
					</div>
				</div>
			</div>
		</section>
	);
};

export default DonateInfo;
