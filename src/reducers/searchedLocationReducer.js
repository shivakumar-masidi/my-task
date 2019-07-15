const initialData = { 
  searchHistory:{
  address: '',
  selectedLat: '',
  selectedLng: ''
  }
}

const fetchingData = (state = initialData , action) => {
  switch (action.type) {
    case 'SEARCHED_LOCATION':
      return action.data;
    default:
      return state;
  }
}
  export default fetchingData
  