import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  incrementAdults, decrementAdults, incrementChildren, decrementChildren, incrementRooms, decrementRooms,
} from '../actionCreators';

import FilterQuest from './FilterQuest';

const Filter = ({
  adults, children, rooms,
}) => {
  const [filterHeight, setFilterHeight] = useState('filter-related');

  const [filterAdultIsDisabled, setFilterAdultIsDisabled] = useState('filter-disabled');
  const [filterAdultIsActive, setFilterAdultIsActive] = useState('filter-related-change');
  const [filterChildIsDisabled, setFilterChildIsDisabled] = useState('filter-disabled');
  const [filterChildIsActive, setFilterChildIsActive] = useState('filter-related-change');
  const [filterRoomIsDisabled, setFilterRoomIsDisabled] = useState('filter-disabled');
  const [filterRoomIsActive, setFilterRoomIsActive] = useState('filter-related-change');

  const [changeAdultIsDisabled, setChangeAdultIsDisabled] = useState('change-disabled');
  const [changeAdultIsActive, setChangeAdultIsActive] = useState('change');
  const [changeChildIsDisabled, setChangeChildIsDisabled] = useState('change-disabled');
  const [changeChildIsActive, setChangeChildIsActive] = useState('change');
  const [changeRoomIsDisabled, setChangeRoomIsDisabled] = useState('change-disabled');
  const [changeRoomIsActive, setChangeRoomIsActive] = useState('change');

  const dispatch = useDispatch();

  const childrenSection = children > 0 ? <FilterQuest childrenCount={children} /> : null;

  const increaseAdultNumber = () => {
    if (adults === 29) {
      setFilterAdultIsActive('filter-disabled');
      setChangeAdultIsActive('change-disabled');
    }

    if (adults < 30) {
      setFilterAdultIsDisabled('filter-related-change');
      setChangeAdultIsDisabled('change');
      dispatch(incrementAdults());
    }
  };

  const decreaseAdultNumber = () => {
    if (adults === 2) {
      setFilterAdultIsDisabled('filter-disabled');
      setChangeAdultIsDisabled('change-disabled');
    }

    if (adults > 1) {
      setFilterAdultIsActive('filter-related-change');
      setChangeAdultIsActive('change');
      dispatch(decrementAdults());
    }
  };

  const increaseChildrenNumber = () => {
    if (children === 9) {
      setFilterChildIsActive('filter-disabled');
      setChangeChildIsActive('change-disabled');
    }

    if (children < 10) {
      setFilterChildIsDisabled('filter-related-change');
      setChangeChildIsDisabled('change');
      setFilterHeight('filter-related-newheight');
      dispatch(incrementChildren());
    }
  };

  const decreaseChildrenNumber = () => {
    if (children === 1) {
      setFilterChildIsDisabled('filter-disabled');
      setChangeChildIsDisabled('change-disabled');
      setFilterHeight('filter-related');
    }

    if (children > 0) {
      setFilterChildIsActive('filter-related-change');
      setChangeChildIsActive('change');
      dispatch(decrementChildren());
    }
  };

  const increaseRoomNumber = () => {
    if (rooms === 29) {
      setFilterRoomIsActive('filter-disabled');
      setChangeRoomIsActive('change-disabled');
    }

    if (rooms < 30) {
      setFilterRoomIsDisabled('filter-related-change');
      setChangeRoomIsDisabled('change');
      dispatch(incrementRooms());
    }
  };

  const decreaseRoomNumber = () => {
    if (rooms === 2) {
      setFilterRoomIsDisabled('filter-disabled');
      setChangeRoomIsDisabled('change-disabled');
    }

    if (rooms > 1) {
      setFilterRoomIsActive('filter-related-change');
      setChangeRoomIsActive('change');
      dispatch(decrementRooms());
    }
  };

  return (
    <div>

      <div className={filterHeight}>

        <div className="filter-related-bigCont">

          <div className="filter-related-cont">

            <p className="filter-related-text">Adults</p>
            <div className="filter-related-change-cont">
              <div id="changeMinusAdults" className={filterAdultIsDisabled} onClick={decreaseAdultNumber}>
                <p
                  id="changeDisabledMinusAdults"
                  className={changeAdultIsDisabled}
                >
                  -
                </p>
              </div>
              <p id="numberAdults" className="filter-related-text">{adults}</p>
              <div id="changePlusAdults" className={filterAdultIsActive} onClick={increaseAdultNumber}>
                <p id="changeDisabledPlusAdults" className={changeAdultIsActive}>+</p>
              </div>
            </div>
          </div>

          <div className="filter-related-cont">
            <p className="filter-related-text">Children</p>
            <div className="filter-related-change-cont">
              <div id="changeMinusChildren" className={filterChildIsDisabled} onClick={decreaseChildrenNumber}>
                <p
                  id="changeDisabledMinusChildren"
                  className={changeChildIsDisabled}

                >
                  -
                </p>
              </div>
              <p id="numberChildren" className="filter-related-text">{children}</p>
              <div id="changePlusChildren" className={filterChildIsActive} onClick={increaseChildrenNumber}>
                <p id="changeDisabledPlusChildren" className={changeChildIsActive}>+</p>
              </div>
            </div>
          </div>

          <div className="filter-related-cont">
            <p className="filter-related-text">Rooms</p>
            <div className="filter-related-change-cont">
              <div id="changeMinusRooms" className={filterRoomIsDisabled} onClick={decreaseRoomNumber}>
                <p id="changeDisabledMinusRooms" className={changeRoomIsDisabled}>-</p>
              </div>
              <p id="numberRooms" className="filter-related-text">{rooms}</p>
              <div id="changePlusRooms" className={filterRoomIsActive} onClick={increaseRoomNumber}>
                <p id="changeDisabledPlusRooms" className={changeRoomIsActive}>+</p>
              </div>
            </div>
          </div>

          {childrenSection}
          <div className="filter-hidden filter-age" />

        </div>

      </div>
    </div>
  );
};

export default Filter;
