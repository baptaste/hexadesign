import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import History from 'src/containers/History'
import Transition from 'src/containers/Transition'
import NavState from 'src/containers/NavState'
import cover from 'src/assets/images/project-cover.jpg'
import rightArrow from 'src/assets/images/right-arrow.png'
import { getCategoryName, getRandomInt } from 'src/utils'
import './project.scss'

const Project = ({
  getProject,
  project,
  projects,
  setPrevPath,
  categoryPath,
  setNextProject,
  nextProject,
  categories,
  clearNextProject,
  getCategoryProjects,
  setFoundIndex,
  currentProjectIndex,
  setNextCategory,
  nextCategory
}) => {

  useEffect(() => {
    getCategoryProjects()
  }, [])

  const { pathname } = useLocation(),
        navigate = useNavigate(),
        projectThemes = project?.attributes.themes.data,
        categoryName = getCategoryName(categoryName, categories, pathname);

  const projectIdFromURL = pathname.match(/\d/g) // get characters between slashes
                               .toString()
                               .replace(/,/g, ""); // replace comma with empty str

  useEffect(() => {
    getProject(projectIdFromURL)
    setPrevPath(pathname)
  }, [pathname])

  useEffect(() => {
    if (project) {
      const foundIndex = projects.map((el, i) => el.id === project.id && i).filter((item) => item !== false);
      setFoundIndex(...foundIndex)

      const nextProject = projects.filter((el) => el.id === project.id + 1)
      setNextProject(nextProject)
    }
  }, [project])

  useEffect(() => {
    if (currentProjectIndex && currentProjectIndex === (projects.length - 1)) {
      const randomInt = getRandomInt(0, 1),
            currentProjectCategory = project.attributes.categories.data[0].attributes.path;

      const nextRandomCategory = categories.filter((el) =>
        el.attributes.path !== currentProjectCategory && el.attributes.name !== 'À propos'
      )
      setNextCategory(nextRandomCategory[randomInt])
    }
  }, [project, pathname, currentProjectIndex])

  function goToNextProject() {
    navigate(`${categoryPath}/${nextProject[0].id}`)
  }

  return (
    project && (
    <div className='projectWrapper'>
      <History />
      <Transition type='lateral' title={project.attributes.name} text={project.attributes.description} content={projectThemes} />
      <div className='left flex'>
        <div className='flex-column'>
        {/* mobile-section */}
          {/* 1st project img for cover
          <img src={`http://localhost:1337${project.attributes.image.data[0].attributes.formats.small.url}`}
            className='project-cover' />*/}
          <img src={cover} className='project-cover' />
          <h1 className='page-title project-title-mob text-center'>{project.attributes.name}</h1>
          <p className='project-description'>
            {project.attributes.description}
          </p>
        {/* mobile-section */}
          {project.attributes.image.data.map((img) => (
            <img key={img.id} src={`http://localhost:1337${img.attributes.formats.small.url}`} className='projectImg' />
          ))}
          <p style={{width: '100%'}} className='medium-size'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio iusto porro ut perspiciatis quibusdam sed eaque. Consequuntur inventore, praesentium porro quam ex, dignissimos commodi libero recusandae et, minus dolores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut perspiciatis error doloremque, ipsa assumenda enim aliquid. Id nemo ab suscipit facilis aliquam reprehenderit eum a facere, earum praesentium quae ut.
          Quos architecto quidem maxime asperiores modi? Ut, velit aliquam iusto corporis assumenda odit enim. Enim quae, voluptate fugiat maiores commodi animi quis harum, facilis tenetur officiis laboriosam dolor pariatur fuga!
          Sint provident eligendi ex. Iste eligendi voluptas accusamus unde mollitia quos labore! Sint pariatur distinctio minima dolorem ratione quasi necessitatibus eveniet quidem voluptatibus sed, odio consectetur animi exercitationem cupiditate in!
          Doloribus ea illum, modi iste dignissimos quam minima. Pariatur beatae mollitia numquam necessitatibus quibusdam inventore? Nam dolorem adipisci necessitatibus, deserunt iure doloremque explicabo nihil ratione repudiandae facilis rem illo sit?
          Vero cupiditate natus consectetur nisi ratione animi, quia eius voluptas tenetur modi dicta accusantium voluptatibus obcaecati architecto veritatis quaerat perspiciatis itaque officiis molestias magnam commodi odio ipsum? Commodi, laboriosam ratione.
          Vero perspiciatis aspernatur nobis omnis incidunt similique nostrum harum ad recusandae? Harum exercitationem voluptatem qui sit voluptate eos porro amet nostrum aspernatur dolorum ad, voluptatibus ipsum dolorem voluptatum, placeat expedita.
          Doloribus aut aspernatur saepe, culpa dolores possimus facilis repudiandae asperiores sit officia obcaecati. Laudantium, eligendi aliquid magni nam rerum inventore expedita, corrupti officiis nostrum eum illo maxime, adipisci magnam maiores.
          </p>

          {currentProjectIndex < (projects.length - 1) && nextProject.length !== 0 ? (
            /* NEXT PROJECT SECTION */
            <div className='next-project flex-align-center'>
              <button className='next-project-btn flex-align-center button-reset text-bold medium-size second-font' onClick={goToNextProject}>
                Réalisation suivante <img src={rightArrow} className='small-icon' style={{marginLeft: '50px'}} />
              </button>
              <div className='next-project-preview pointer' onClick={goToNextProject}>
                <p className='next-project-name medium-size'>{nextProject[0].attributes.name}</p>
                <img src={`http://localhost:1337${nextProject[0].attributes.image.data[0].attributes.formats.small.url}`}
                  className='small-img' alt='Photo projet suivant'/>
              </div>
            </div>
            ) : (
            /* NEXT CATEGORY SECTION */
            <div className='next-category flex-column-around'>
              <p>Il s'agit de la dernière réalisation de la categorie
                <span className='text-bold'> {categoryName}</span>.
              </p>
              {nextCategory !== null &&
              <Link to={nextCategory.attributes.path} onClick={clearNextProject} className='next-category-link flex-column'>
                <span>Voir la catégorie</span>
                <span className='next-category-name big-size second-font'> {nextCategory.attributes.name}</span>
              </Link>}
            </div>
          )}
        </div>
        <NavState axis='vertical-axis' />
      </div>
    </div>
    )
  );
}

export default Project;