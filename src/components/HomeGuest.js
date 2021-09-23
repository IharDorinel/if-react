import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularHotels } from '../actionCreators/popularHotels';

// components
import HomeGuestContent from './HomeGuestContent';

const HomeGuest = ({ currentTheme }) => {
  const popularHotels = useSelector((state) => state.hotels.popular || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularHotels());
  }, []);

  return (
    <section css={(theme) => ({
      backgroundColor: theme[currentTheme].colors.primary,
    })}
    >
      <div className="homes-guests-container">
        <h1 css={(theme) => ({
          color: theme[currentTheme].colors.secondary,
        })}
        >
          Homes guests loves
        </h1>
        <div className="home-guests-gallery">
          <HomeGuestContent props={popularHotels} />
        </div>
      </div>
    </section>
  );
};

export default HomeGuest;
