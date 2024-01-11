"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import BurgerMenu from "../../../public/assets/icons/BurgerMenu.svg";
import Logo from "../../../public/assets/images/CleanSlateZ.svg";
import { HOME } from "../router/routerPath";
import classes from "./Header.module.css";
import { headerData } from "./headerData";

function Header() {
	const pathname = usePathname();

	const [isLinksVisible, setIsLinksVisible] = useState(false);

	const renderHeaderData = useMemo(() => {
		return headerData.map((item, index) => {
			return (
				<Link
					key={index}
					className={`${
						pathname === `${item.href}` ? classes.activeItem : classes.item
					}`}
					href={`${item.href}`}
				>
					{item.title}
				</Link>
			);
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [headerData]);

	const renderHeaderBurgerData = useMemo(() => {
		headerData.map((item, index) => (
			<Link
				key={item.href}
				className={`${
					pathname === `/${item.href}`
						? classes.activeItemBurger
						: classes.itemBurger
				}`}
				href={`/${item.href}`}
			>
				{item.title}
			</Link>
		));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [headerData]);

	const togglesDiv = useCallback(() => {
		setIsLinksVisible(!isLinksVisible);
	}, [isLinksVisible]);

	// let toggleDivs=()=>{
	//     console.log('Before toggle:', sessionStorage.getItem('opened'));
	//     setIsLinksVisible(!isLinksVisible);
	//     if (sessionStorage.getItem('opened')) {
	//         console.log('Clearing sessionStorage');
	//         sessionStorage.clear();
	//     }
	//     sessionStorage.setItem('opened', 'opened');
	//     console.log('After toggle:', sessionStorage.getItem('opened'));
	// }

	return (
		<div>
			<div className={classes.whole}>
				<div className={classes.left}>
					<Link className={classes.logo} href={HOME}>
						<Image src={Logo} alt={"Clean SlateZ"} />
					</Link>
					<div className={classes.itemsWhole}>{renderHeaderData}</div>
				</div>
				<div className={classes.right} />
			</div>
			<div className={classes.topnav}>
				<div className={classes.upTop}>
					<Link className={classes.logo} href={HOME}>
						<Image src={Logo} alt={"logo"} />
					</Link>
					<div className={classes.burgerIcon} onClick={togglesDiv}>
						<Image src={BurgerMenu} alt={""} />
					</div>
				</div>
				<div
					className={classes.itemsBurger}
					style={{ display: isLinksVisible ? "block" : "none" }}
				>
					{renderHeaderBurgerData}
				</div>
			</div>
		</div>
	);
}

export default Header;
