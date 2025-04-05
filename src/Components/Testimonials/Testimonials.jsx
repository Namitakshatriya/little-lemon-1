import React, { startTransition } from 'react';
import './Testimonials.css';
import YellowStar from '../../icons_assets/YellowStar.png';
import WhiteStar from '../../icons_assets/WhiteStar.png';
import Customer1 from '../../icons_assets/Customer1.png';
import Customer2 from '../../icons_assets/Customer2.png';
import Customer3 from '../../icons_assets/Customer3.png';
import Customer4 from '../../icons_assets/Customer4.png';


const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h1>Testimonials</h1>
      <div className='all-testimonials'>

        <div className='customer-1'>
            <h2>Rating</h2>
            <div className='star'>
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={WhiteStar} alt="Star"  />
            </div>
            <div className='imgName'>
           <img src={Customer1} alt="img1" />
           <h3>Tom Smith <br/> Age-26 <br/> Tour Guide</h3>
            
            </div>
            <h3>Review</h3>
            <h5>“Hands down, some of the best food I’ve had recently! “The food here is absolutely delicious! Every dish we tried was<br/> bursting with flavor and cooked to perfection. I'm <br/>still dreaming about my meal at [Insert restaurant name]! Each bite was a delight, and the presentation just blew us away.”</h5>
        </div>

        <div className='customer-2'>
        <h2>Rating</h2>
            <div className='star'>
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={WhiteStar} alt="Star"  />
            </div>
            <div className='imgName'>
            <img src={Customer2} alt="img2" />
            <h3>Anna Smith <br/> Age-29 <br/> Doctor</h3>
            </div>
            <h3>Review</h3>
            <h5>“Hands down, some of the best food I’ve had recently! “The food here is absolutely delicious! Every dish we tried was<br/> bursting with flavor and cooked to perfection. I'm <br/>still dreaming about my meal at [Insert restaurant name]! Each bite was a delight, and the presentation just blew us away.”</h5>
        </div>

        <div className='customer-3'>
        <h2>Rating</h2>
            <div className='star'>
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={WhiteStar} alt="Star"  />
            </div>
            <div className='imgName'>
            <img src={Customer3} alt="img3" />
            <h3>Sara Paul <br/> Age-70 <br/> Tourist</h3>
            </div>
            <h3>Review</h3>
            <h5>“Hands down, some of the best food I’ve had recently! “The food here is absolutely delicious! Every dish we tried was<br/> bursting with flavor and cooked to perfection. I'm <br/>still dreaming about my meal at [Insert restaurant name]! Each bite was a delight, and the presentation just blew us away.”</h5>
        </div>

        <div className='customer-4'>
        <h2>Rating</h2>
            <div className='star'>
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={YellowStar} alt="Star" />
            <img src={WhiteStar} alt="Star"  />
            </div>
            <div className='imgName'>
            <img src={Customer4} alt="img4" />
            <h3>Manali Sane <br/> Age-35 <br/> Teacher</h3>
            </div>
            <h3>Review</h3>
            <h5>“Hands down, some of the best food I’ve had recently! “The food here is absolutely delicious! Every dish we tried was<br/> bursting with flavor and cooked to perfection. I'm <br/>still dreaming about my meal at [Insert restaurant name]! Each bite was a delight, and the presentation just blew us away.”</h5>
        </div>



      </div>
    </div>
  );
}

export default Testimonials;
