
import {Navbar} from "../components/Navbar";
import titrePortfolio from "../assets/titre-portfolio.png";

function Home() {

  return (
   <div>
        <div id="home"> 
          <Navbar />
            <div className="home-container">
            <img className="titrePortfolio" src={titrePortfolio} alt="logo Elodie Jean" />
              <p>portfolio</p>
            </div>
        </div>
   </div>
 
  );
}

export default Home;
