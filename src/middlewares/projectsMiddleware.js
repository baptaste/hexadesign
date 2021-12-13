import axios from 'axios'

const projectsMiddleware = (store) => (next) => async (action) => {
  const state = store.getState(),
        strapi_API_URL = 'http://localhost:1337/api';

  if (action.type === 'GET_ALL_PROJECTS') {
    try {
      const projectsData = await axios.get(`${strapi_API_URL}/projects?populate=categories,themes,image`);
      store.dispatch({ type: 'GET_ALL_PROJECTS_SUCCESS', allProjects: projectsData.data.data });
    } catch (err) {
      console.error(err);
      store.dispatch({ type: 'GET_ALL_PROJECTS_ERROR', error: err });
    }
  }

  //TODO
  /*
    faire une action pour filtrer les projects par catégories lors du clic sur un lien dans le menu
    via state.categories.category récupérée au clic, compararée à la catégorie du project qui porte le même nom

    OU

    récupérer les projects sur la route categories?populate=projects
  */

    if (action.type === 'GET_CATEGORY_PROJECTS') {
      try {
        let projectsData = await axios.get(`${strapi_API_URL}/projects?populate=categories,themes,image`);
        projectsData = projectsData.data.data;

        const filteredProjects = projectsData.filter((project) => (
          project.attributes.categories.data[0].attributes.name === state.categories.category
        ));

        console.log('la catégorie est : ', state.categories.category);
        console.log('filteredProjects : ', filteredProjects);
        store.dispatch({ type: 'GET_CATEGORY_PROJECTS_SUCCESS', categoryProjects: filteredProjects});
      } catch (err) {
        console.error(err);
        store.dispatch({ type: 'GET_CATEGORY_PROJECTS_ERROR', error: err });
      }
    }

  next(action);
}

export default projectsMiddleware