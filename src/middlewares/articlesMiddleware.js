import axios from 'axios'

const articlesMiddleware = (store) => (next) => async (action) => {
  const strapi_API_URL = 'http://localhost:1337/api',
        state = store.getState();

  if (action.type === 'GET_ARTICLES') {
    state.settings.loading = true;
    try {
      const articlesData = await axios.get(`${strapi_API_URL}/articles?populate=image`);
      console.log('articlesData : ', articlesData.data.data);
      store.dispatch({ type: 'GET_ARTICLES_SUCCESS', articles: articlesData.data.data });
    } catch (err) {
      console.error(err);
      store.dispatch({ type: 'GET_ARTICLES_ERROR', error: err });
    }
  }

  next(action);
}

export default articlesMiddleware