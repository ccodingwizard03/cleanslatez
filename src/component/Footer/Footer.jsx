import Image from "next/image";
import Link from "next/link";
import Facebook from "../../../public/assets/icons/Facebook.svg";
import LinkedIn from "../../../public/assets/icons/LinkedIn.svg";
import Message from "../../../public/assets/icons/Message.svg";
import Phone from "../../../public/assets/icons/Phone.svg";
import Twitter from "../../../public/assets/icons/Twitter.svg";
import Logo from "../../../public/assets/images/CleanSlateZ.svg";
import { ABOUT, AID_SHORT, DONATE, FAQS } from "../router/routerPath";
import classes from "./Footer.module.css";
function Footer() {
	return (
		<footer className={classes.whole}>
			<nav className={"container"}>
				<div className={classes.main}>
					<div className={classes.left}>
						<Link href={"/"}>
							<div className={classes.logo}>
								<Image src={Logo} alt={"Clean SlateZ"} />
							</div>
						</Link>

						<div className={classes.subTitle}>EIN: 93-3747833</div>
						<div className={classes.subTitle}>
							<Image
								className={classes.iconStyle}
								src={Message}
								alt={"Message"}
							/>
							INFO@CLEANSLATEZ.ORG
						</div>
						<div className={classes.subTitle}>
							<Image className={classes.iconStyle} src={Phone} alt={"Phone"} />
							(877) 443-8810
						</div>

						<div className={classes.line}>
							<Link
								href={"https://www.facebook.com/profile.php?id=61553798613116"}
								target='_blank'
							>
								<Image
									className={classes.icons}
									src={Facebook}
									alt='Facebook'
								/>
							</Link>
							<Link href={"https://twitter.com/cleanslatezorg"} target='_blank'>
								<Image
									className={classes.icons}
									src={Twitter}
									alt={"Twitter"}
								/>
							</Link>
							<Link
								href={
									"https://www.linkedin.com/company/clean-slatez/about/?viewAsMember=true"
								}
								target='_blank'
							>
								<Image
									className={classes.icons}
									src={LinkedIn}
									alt={"LinkedIn"}
								/>
							</Link>
						</div>
					</div>
					<ul className={classes.middle}>
						<li className={classes.subTitleAddress}>Mailing address:</li>
						<li className={classes.address}>7901 4th St N</li>
						<li className={classes.address}>Suite 17261</li>
						<li className={classes.address}>St. Petersburg, FL 33702</li>
					</ul>
					<ul className={classes.right}>
						<li className={classes.text}>
							<Link href={ABOUT}>About Us</Link>
						</li>
						<li className={classes.text}>
							<Link href={DONATE}>Donate</Link>
						</li>
						<li className={classes.text}>
							<Link href={AID_SHORT}>Apply</Link>
						</li>
						<li className={classes.text}>
							<Link href={FAQS}>FAQs</Link>
						</li>
					</ul>
				</div>
			</nav>
		</footer>
	);
}

export default Footer;
