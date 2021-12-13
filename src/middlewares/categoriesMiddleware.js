import axios from 'axios'

const projectsMiddleware = (store) => (next) => async (action) => {
  const strapi_API_URL = 'http://localhost:1337/api';

  if (action.type === 'GET_ALL_CATEGORIES') {
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