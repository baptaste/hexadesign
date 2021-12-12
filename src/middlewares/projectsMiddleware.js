const projectsMiddleware = (store) => (next) => async (action) => {
  next(action)
}

export default projectsMiddleware