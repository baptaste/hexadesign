import axios from 'axios'

const projectsMiddleware = (store) => (next) => async (action) => {
  const strapi_API_URL = 'http://localhost:1337/api',
        state = store.getState();

  if (action.type === 'GET_ALL_CATEGORIES') {
    state.settings.loading = true;
    try {
      const categoriesData = await axios.get(`${strapi_API_URL}/categories?populate=image`);
      store.dispatch({ type: 'GET_ALL_CATEGORIES_SUCCESS', categories: categoriesData.data.data });

    } catch (err) {
      console.error(err);
      store.dispatch({ type: 'GET_ALL_CATEGORIES_ERROR', error: err });
    }
  }

  next(action);
}

export default projectsMiddleware