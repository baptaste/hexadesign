export function getCategoryName(emptyField, array, location) {
  // let categoryName;
  // categories.filter((cat) => {
  //   if (cat.attributes.path === location.pathname) {
  //     categoryName = cat.attributes.name
  //   }
  // })
  array.filter((elem) => {
    if (elem.attributes.path === location) {
      emptyField = elem.attributes.name
    }
  })
  return emptyField;
}

export function getCategoryThemes(newThemes, array) {
    // let currentThemes = [];
  // let extractedThemesNames = categoryProjects.map((project) => {
  //   let theme;
  //   project.attributes.themes.data.forEach((item) => theme = item.attributes.name)
  //   return theme;
  // })
  // currentThemes = [...new Set(extractedThemesNames)]
  let theme;
  let results = array.map((elem) => {
    elem.attributes.themes.data.forEach((item) => theme = item.attributes.name)
    return theme
  });
  newThemes = [...new Set(results)]
  return newThemes
}

