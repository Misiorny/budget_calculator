import styles from '../../styles/styles.module.css'
import logo from '../../images/img/png/logo.png'

function Logo(){
  return(
	  <div className={styles.logo}>
		<img className={styles.logo__img} alt='logo' src={logo}/>
	  </div>
  )
};

export default Logo;
