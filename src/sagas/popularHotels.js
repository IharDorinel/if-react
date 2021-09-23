import { put, takeLatest } from 'redux-saga/effects';
import { getPopularHotels, setPopularHotels } from '../actionCreators/popularHotels';

const apiURL = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

const getPopular = () => fetch(apiURL)
  .then((res) => res.json())
  .then((hotels) => hotels)
  .catch((err) => console.log(err));

function* getPopularSaga() {
  try {
    const hotels = yield getPopular();
    yield put(setPopularHotels(hotels));
  } catch (err) {
    console.log(err.message);
  }
}

function* hotelsSaga() {
  yield takeLatest(getPopularHotels.toString(), getPopularSaga);
}

export default hotelsSaga;
