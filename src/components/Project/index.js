import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MenuToggler from 'src/containers/MenuToggler'
import History from 'src/containers/History'
import Transition from 'src/containers/Transition'
import NavState from 'src/containers/NavState'
import './project.scss'

const Project = ({ getProject, project, setPrevPath }) => {
  const { pathname } = useLocation();
  const projectIdFromURL = pathname.match(/\d/g) // get characters between slashes
                               .toString()
                               .replace(/,/g, ""); // replace comma with empty str

  useEffect(() => {
    getProject(projectIdFromURL);
    setPrevPath(pathname);
  }, [pathname]);

  const projectThemes = project?.attributes.themes.data

  return (
    project && (
    <div className='projectWrapper'>
      <MenuToggler />
      <History />
      <Transition type='lateral' title={project.attributes.name} text={project.attributes.description} content={projectThemes} />
      <div className='left flex'>
        <div className='flex-column'>
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
        </div>
        <NavState axis='vertical-axis' />
      </div>
    </div>
    )
  );
}

export default Project;