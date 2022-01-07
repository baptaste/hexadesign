import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Transition from 'src/containers/Transition'
import NavState from 'src/containers/NavState'
import './about.scss'

const About = ({ setPrevPath }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setPrevPath(pathname);
  }, []);

  return (
    <div className='aboutWrapper flex-column'>
      <Transition type='vertical' />
      <NavState axis='lateral-axis' />
      <h1 className='aboutTitle page-title'>À propos</h1>
      <p style={{width: '100%'}} className='aboutDesc medium-size'>
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

  );
}

export default About;