import data from '../constants/content';
import HomeGuestContentDiv from './HomeGuest';


const Data = () => {
  return data.map(data => <HomeGuestContentDiv key = {data.id}>

    <div className="home-guests-box box">

      <a href="#" className="home-guests-photo-link">
        <img className="home-guests-photo photo" src={data.imageUrl} alt="hotel_leopold"/>
      </a>
      <p className="home-hotel-name home-text"><a href="#">{data.name}</a></p>
      <p className="home-destination home-text"><a href="#">{data.city}, {data.country}</a></p>
    </div>

  </HomeGuestContentDiv>)
}

export default Data;

