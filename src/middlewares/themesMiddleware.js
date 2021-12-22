import axios from 'axios'

const themesMiddleware = (store) => (next) => async (action) => {
  const strapi_API_URL = 'http://localhost:1337/api',
        state = store.getState();

  if (action.type === 'GET_ALL_THEMES') {
    state.settings.loading = true;
    try {
      const themesData = await axios.get(`${strapi_API_URL}/themes`);
      store.dispatch({ type: 'GET_ALL_THEMES_SUCCESS', themes: themesData.data.data });
    } catch (err) {
      console.error(err);
      store.dispatch({ type: 'GET_ALL_THEMES_ERROR', error: err });
    }
  }

  next(action);
}

export default themesMiddleware