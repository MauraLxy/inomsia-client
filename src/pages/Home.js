import './Home.css';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import story from '../assets/story.jpg';
import wishlist from '../assets/wishlist.jpg';
import night from '../assets/night.jpg';
import island1 from '../assets/island-tl.png';
import island2 from '../assets/island-tr.png';
import island3 from '../assets/island-b.png';

export default function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <div className="islands">
        <div className='first-row'>
          <Link to="/diary">
            <img src={island1} alt="Island 1" className="island island1" />
          </Link>
          
          <img src={island2} alt="Island 2" className="island island2" />
        </div>
        <div className='second-row'>
          <img src={island3} alt="Island 3" className="island island3" />
        </div>
      </div>

      <div className='banner'>
        <p className='title'>Inomsia - the Land of the Nameless</p>
        <p className='banner-text'>Amid vast oceans of thought, travelers have discovered Inomsia, the Land of the Nameless. Here, no borders or rulers exist, only the quiet freedom for each visitor to carve out their own corner of meaning.</p>
        <p className='banner-text'>On this land, you may lay down your diary like seeds in the soil of time, or weave stories meant for your own eyes alone. You can shape your bucket list and hang it among the constellations of your future. And when you seek calm, you may step into the Study Room, where gentle music accompanies your hours of learning and focus.</p>
        <p className='banner-text'>Inomsia does not ask who you are, nor does it place a name upon you. It is simply a vast, boundless land, waiting to be filled with your words, your dreams, and your silence.</p>
      </div>
      <div className="card-container">
        <div className="card" style={{ backgroundImage: `url(${story})` }}>
          <div className="card-text">A Story for Myself</div>
        </div>
        <div className="card" style={{ backgroundImage: `url(${wishlist})` }}>
          <div className="card-text">A Wish to be Fulfilled</div>
        </div>
        <div className="card" style={{ backgroundImage: `url(${night})` }}>
          <div className="card-text">A Room of My Own</div>
        </div>
      </div>
    </div>
  );
}