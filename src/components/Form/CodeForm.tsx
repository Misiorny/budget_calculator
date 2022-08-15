import styles from '../../styles/styles.module.css';

function CodeForm(){
  return(
	  <form className={styles.postcode} action="" >
		<label className={styles.postcode__label} htmlFor="postcode">Enter your e-mail:</label>
		<input className={styles.postcode__input} type="number" name="postcode" id="postcode" required={true}/>
	  </form>
  )
}

export default CodeForm;
