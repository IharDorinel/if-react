import React, {useState} from 'react';

import FilterQuest from "./FilterQuest";


const Filter = ({ adultNumber, setAdultNumber, childrenNumber, setChildrenNumber, roomNumber, setRoomNumber }) => {

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


  const childrenSection = childrenNumber > 0 ? <FilterQuest childrenCount={childrenNumber} /> : null;


  const increaseAdultNumber = () => {

    if (adultNumber === 29) {
      setFilterAdultIsActive('filter-disabled');
      setChangeAdultIsActive('change-disabled');
    }

    if (adultNumber < 30) {
      setFilterAdultIsDisabled('filter-related-change');
      setChangeAdultIsDisabled('change');
      setAdultNumber((prevState) => prevState + 1);
    }
  };

  const decreaseAdultNumber = () => {
    if (adultNumber === 2) {
      setFilterAdultIsDisabled('filter-disabled');
      setChangeAdultIsDisabled('change-disabled');
    }

    if (adultNumber > 1) {
      setFilterAdultIsActive('filter-related-change');
      setChangeAdultIsActive('change');
      setAdultNumber((prevState) => prevState - 1);
    }
  };

  const increaseChildrenNumber = () => {
    if (childrenNumber === 9) {
      setFilterChildIsActive('filter-disabled');
      setChangeChildIsActive('change-disabled');
    }

    if (childrenNumber < 10) {
      setFilterChildIsDisabled('filter-related-change');
      setChangeChildIsDisabled('change');
      setFilterHeight('filter-related-newheight');
      setChildrenNumber((prevState) => prevState + 1);
    }
  };

  const decreaseChildrenNumber = () => {
    if (childrenNumber > 0) {
      setFilterChildIsActive('filter-related-change');
      setChangeChildIsActive('change');
      setChildrenNumber((prevState) => prevState - 1);
    }

    if (childrenNumber === 1) {
      setFilterChildIsDisabled('filter-disabled');
      setChangeChildIsDisabled('change-disabled');
      setFilterHeight('filter-related');
    }
  };

  const increaseRoomNumber = () => {
    if (roomNumber === 29) {
      setFilterRoomIsActive('filter-disabled');
      setChangeRoomIsActive('change-disabled');
    }

    if (roomNumber < 30) {
      setFilterRoomIsDisabled('filter-related-change');
      setChangeRoomIsDisabled('change');
      setRoomNumber((prevState) => prevState + 1);
    }
  };

  const decreaseRoomNumber = () => {
    if (roomNumber > 1) {
      setFilterRoomIsActive('filter-related-change');
      setChangeRoomIsActive('change');
      setRoomNumber((prevState) => prevState - 1);
    }

    if (roomNumber === 2) {
      setFilterRoomIsDisabled('filter-disabled');
      setChangeRoomIsDisabled('change-disabled');
    }
  };


  return (
      <div>


        <div className={filterHeight}>

          <div className="filter-related-bigCont">

            <div className="filter-related-cont">

              <p className="filter-related-text">Adults</p>
              <div className="filter-related-change-cont">
                <div id="changeMinusAdults" className={filterAdultIsDisabled}>
                  <p
                    id="changeDisabledMinusAdults"
                    className={changeAdultIsDisabled}
                    onClick={decreaseAdultNumber}
                  >
                    -
                  </p>
                </div>
                <p id="numberAdults" className="filter-related-text">{adultNumber}</p>
                <div id="changePlusAdults" className={filterAdultIsActive}>
                  <p id="changeDisabledPlusAdults" className={changeAdultIsActive} onClick={increaseAdultNumber}>+</p>
                </div>
              </div>
            </div>

            <div className="filter-related-cont">
              <p className="filter-related-text">Children</p>
              <div className="filter-related-change-cont">
                <div id="changeMinusChildren" className={filterChildIsDisabled}>
                  <p
                    id="changeDisabledMinusChildren"
                    className={changeChildIsDisabled}
                    onClick={decreaseChildrenNumber}
                  >
                    -
                  </p>
                </div>
                <p id="numberChildren" className="filter-related-text">{childrenNumber}</p>
                <div id="changePlusChildren" className={filterChildIsActive}>
                  <p id="changeDisabledPlusChildren" className={changeChildIsActive} onClick={increaseChildrenNumber}>+</p>
                </div>
              </div>
            </div>

            <div className="filter-related-cont">
              <p className="filter-related-text">Rooms</p>
              <div className="filter-related-change-cont">
                <div id="changeMinusRooms" className={filterRoomIsDisabled}>
                  <p id="changeDisabledMinusRooms" className={changeRoomIsDisabled} onClick={decreaseRoomNumber}>-</p>
                </div>
                <p id="numberRooms" className="filter-related-text">{roomNumber}</p>
                <div id="changePlusRooms" className={filterRoomIsActive}>
                  <p id="changeDisabledPlusRooms" className={changeRoomIsActive} onClick={increaseRoomNumber}>+</p>
                </div>
              </div>
            </div>

            {childrenSection}
            <div className="filter-hidden filter-age" />

          </div>

        </div>
      </div>
    )

}


export default Filter;