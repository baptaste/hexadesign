import React from 'react'
import './home.scss'

const Home = () => {

  return (
    <main className='home flex-start-around '>
      <div className='service flex-column-around radius-15'>
        <p className='extra-size text-bold'>Création</p>
        <p className='serviceDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore ducimus, fuga quas libero,
          quos autem minima incidunt ex tempora nemo velit adipisci accusamus vitae similique sint ad enim blanditiis.
        </p>
      </div>
      <div className='service flex-column-around radius-15'>
        <p className='extra-size text-bold'>Précision</p>
        <p className='serviceDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore ducimus, fuga quas libero,
          quos autem minima incidunt ex tempora nemo velit adipisci accusamus vitae similique sint ad enim blanditiis.
        </p>
      </div>
      <div className='service flex-column-around radius-15'>
        <p className='extra-size text-bold'>Innovation</p>
        <p className='serviceDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore ducimus, fuga quas libero,
          quos autem minima incidunt ex tempora nemo velit adipisci accusamus vitae similique sint ad enim blanditiis.
        </p>
      </div>
      {/* TODO : get all projects here */}
    </main>
  );
}

export default Home