import styles from '../../styles/styles.module.css';

function DashboardContent(){
  return(
	  <div className={styles.dashboard__content}>
		<p className={styles.dashboard__content_text}>Application allows you to control your personal worth.</p>
		<p className={styles.dashboard__content_text}>As result, you can see current worth. </p>
		<p className={styles.dashboard__content_text}>Please, login or register yourself. </p>
	  </div>
  )
}

export default DashboardContent;
