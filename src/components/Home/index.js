import React from 'react'
import NavState from 'src/containers/NavState'
import Header from 'src/containers/Header'
import Showcase from 'src/containers/Showcase'
import './home.scss'

const Home = () => {
  return (
    <main className='home flex-column'>
      <NavState axis='lateral-axis' />
      <Header />
      <Showcase />
      <section className='services'>
        <div className='service flex-column-around'>
          <p className='page-title'>Création</p>
          <p className='serviceDesc medium-size'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore ducimus, fuga quas libero,
            quos autem minima incidunt ex tempora nemo velit adipisci accusamus vitae similique sint ad enim blanditiis.
          </p>
        </div>
        <div className='service flex-column-around'>
          <p className='page-title'>Précision</p>
          <p className='serviceDesc medium-size'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore ducimus, fuga quas libero,
            quos autem minima incidunt ex tempora nemo velit adipisci accusamus vitae similique sint ad enim blanditiis.
          </p>
        </div>
        <div className='service flex-column-around'>
          <p className='page-title'>Innovation</p>
          <p className='serviceDesc medium-size'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore ducimus, fuga quas libero,
            quos autem minima incidunt ex tempora nemo velit adipisci accusamus vitae similique sint ad enim blanditiis.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home