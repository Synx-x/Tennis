//Core
import React from "react";
import styles from "../../styles/components/HamburgerMenu.module.scss";

interface IMenu {
  className?: string;
}

const Menu = (props: IMenu) => (
	<div className={props.className}>
		<ul className={styles.navigation__list}>
			<li className={styles.navigation__item}>
				<a href="/">Home</a>
			</li>
			<li className={styles.navigation__item}>
				<a href="/videolibrary">Video Library</a>
			</li>
		</ul>
	</div>
);

export default Menu;
