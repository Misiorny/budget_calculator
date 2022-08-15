import Header from '../components/Header/Header';
import InfoPanel from '../components/InfoPanel/InfoPanel';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

function BudgetCalc() {
  return (
	  <div className="main">
		<Header/>
		<InfoPanel/>
		<Footer/>
	  </div>
  );
}

export default BudgetCalc;
