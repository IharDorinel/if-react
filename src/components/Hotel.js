import React from 'react';
import { useParams } from 'react-router-dom';


const Hotel = ({ data }) => {
  const { id } = useParams();


  return (

    <>
      <p>
        {data.filter((elem) => elem.id === id).map((elem) => <img className="avail-hotels-photo-big" key={elem.id} src={elem.imageUrl} alt="hotel_image" />)}
      </p>
    </>

  );
};

export default Hotel;
