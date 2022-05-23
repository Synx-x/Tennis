import { NextRouter, useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";
import hamburgerStyles from "./../styles/components/HamburgerMenu.module.scss";
import styles from "./../styles/components/NavigationBar.module.scss";
import Hamburger from "./HamburgerMenu/Hamburger";
import Menu from "./HamburgerMenu/Menu";

const NavigationBar = () => {
	const router: NextRouter = useRouter();
	const [currentWidth, setCurrentWidth] = useState<number>(631);
	const [isOpen, setOpen] = useState<boolean>(false);

	const mobileBreakPoint: number = 630;
	const hamburgerButtonSize: number = 60;
	const navbarContainerPadding: number = 48;

	useLayoutEffect(() => {
		const viewPortWatcher = setInterval(() => {
			if (window.innerWidth != currentWidth) {
				setCurrentWidth(window.innerWidth);
			}
		}, 500);

		// return clearInterval(viewPortWatcher);
	}, []);

	return (
		<nav
			className={
				router.pathname === "/videolibrary"
					? styles.galleryContainer
					: styles.container
			}
		>
			<ul>
				<li>
					<a href="/">logo</a>
				</li>
				{currentWidth > mobileBreakPoint ? (
					<>
						<div className={styles.menuItems}>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/videolibrary">Video Library</a>
							</li>
						</div>
						<li>
							<button>Login</button>
						</li>
					</>
				) : (
					<>
						<Hamburger
							onClick={() => setOpen((open) => !open)}
							className={
								isOpen
									? `${hamburgerStyles.hamburger} ${hamburgerStyles.hamburgeractive}`
									: hamburgerStyles.hamburger
							}
							style={
								isOpen
									? {
											transform:
												"translate(-" +
												// keeps the button exactly translated to the start when open
												(window.innerWidth -
													navbarContainerPadding -
													hamburgerButtonSize) +
												"px )",
									  }
									: {}
							}
						/>

						<Menu
							className={
								isOpen
									? `${hamburgerStyles.navigation} ${hamburgerStyles.navigationactive}`
									: hamburgerStyles.navigation
							}
						/>
					</>
				)}
			</ul>
		</nav>
	);
};

export default NavigationBar;
