import axios from 'axios'

const projectsMiddleware = (store) => (next) => async (action) => {
  const state = store.getState(),
        strapi_API_URL = 'http://localhost:1337/api';

  if (action.type === 'GET_ALL_PROJECTS') {
    state.settings.loading = true;
    try {
      const projectsData = await axios.get(`${strapi_API_URL}/projects?populate=categories,themes,image`);
      store.dispatch({ type: 'GET_ALL_PROJECTS_SUCCESS', allProjects: projectsData.data.data });
    } catch (err) {
      console.error(err);
      store.dispatch({ type: 'GET_ALL_PROJECTS_ERROR', error: err });
    }
  }

  if (action.type === 'GET_CATEGORY_PROJECTS') {
    state.settings.loading = true;
    let pageURL = window.location.pathname;

    try {
      let projectsData = await axios.get(`${strapi_API_URL}/projects?populate=categories,themes,image`);
      projectsData = projectsData.data.data;

      const filteredProjectsWithURL = projectsData.filter((project) => (
        // project.attributes.categories.data[0].attributes.name === state.categories.category
        project.attributes.categories.data[0].attributes.path === pageURL || pageURL.includes(project.attributes.categories.data[0].attributes.path)
      ));

      const firstProjectData = filteredProjectsWithURL[0];
      // console.log('firstProjectData : ', firstProjectData);

      store.dispatch({ type: 'GET_CATEGORY_PROJECTS_SUCCESS', projects: filteredProjectsWithURL});
      store.dispatch({ type: 'REVEAL_FIRST_PROJECT', project: firstProjectData});
    } catch (err) {
      console.error(err);
      store.dispatch({ type: 'GET_CATEGORY_PROJECTS_ERROR', error: err });
    }
  }

  if (action.type === 'GET_PROJECT') {
    state.settings.loading = true;

    try {
      const projectData = await axios.get(`${strapi_API_URL}/projects/${action.id}?populate=categories,themes,image`);
      // console.log('projectData : ', projectData.data.data);
      store.dispatch({ type: 'GET_PROJECT_SUCCESS', project: projectData.data.data });
    } catch (err) {
      console.log(err)
      store.dispatch({ type: 'GET_PROJECT_ERROR', error: err });
    }
  }

  next(action);
}

export default projectsMiddleware