import styles from '../../styles/styles.module.css'
import logo from '../../images/img/png/logo.png'
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
function Header(){
  return(
	  <header className={styles.header}>
		<Menu/>
	  <div className={styles.header__content}>
		<Logo/>
		<h1 className={styles.header__header}>Budget Calculator</h1>
		<p className={styles.header__text}>Calculate your personal worth</p>
	  </div>
	  </header>
  )
}

export default Header;
