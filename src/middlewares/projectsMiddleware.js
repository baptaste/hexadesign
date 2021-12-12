import axios from 'axios'

const projectsMiddleware = (store) => (next) => async (action) => {
  const strapi_API_URL = 'http://localhost:1337/api';

  if (action.type === 'GET_ALL_PROJECTS') {
    try {
      const projectsData = await axios.get(`${strapi_API_URL}/projects?populate=categories,themes,image`);
      // console.log('projectsData : ', projectsData.data.data);
      store.dispatch({ type: 'GET_ALL_PROJECTS_SUCCESS', projects: projectsData.data.data });
      // .then((res) => {
      //   store.dispatch({ type: 'GET_ALL_PROJECTS_SUCCESS', projects: res.data })
      // })
    } catch (err) {
      console.error(err);
      store.dispatch({ type: 'GET_ALL_PROJECTS_ERROR', error: err });
    }
  }

  next(action);
}

export default projectsMiddleware