import axios from 'axios'

export const fetchData = () => async dispatch => {
    const response = await axios.get('http://stateapi-test.votenow.tv/widgets/get?wid=31204006f9270601')

    dispatch({
      type: 'FETCH_DATA',
      payload: response.data
    })
}

