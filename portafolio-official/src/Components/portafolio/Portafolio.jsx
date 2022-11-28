import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
    {
        id: 1,
        image: IMG1,
        title: 'project 1',
        github:'https://github.com/marckes04/Portafolio_Oficial',
        demo: 'https://www.youtube.com/watch?v=Wdik6c80vPU'
    },
    {
        id: 2,
        image: IMG2,
        title: 'project 2',
        github:'https://github.com/marckes04/Portafolio_Oficial',
        demo: 'https://www.youtube.com/watch?v=Wdik6c80vPU'
    },
    {
        id: 3,
        image: IMG3,
        title: 'project 3',
        github:'https://github.com/marckes04/Portafolio_Oficial',
        demo: 'https://www.youtube.com/watch?v=Wdik6c80vPU'
    },
    {
        id: 4,
        image: IMG4,
        title: 'project 4',
        github:'https://github.com/marckes04/Portafolio_Oficial',
        demo: 'https://www.youtube.com/watch?v=Wdik6c80vPU'
    },
    {
        id: 5,
        image: IMG5,
        title: 'project 5',
        github:'https://github.com/marckes04/Portafolio_Oficial',
        demo: 'https://www.youtube.com/watch?v=Wdik6c80vPU'
    },
    {
        id: 6,
        image: IMG6,
        title: 'project 6',
        github:'https://github.com/marckes04/Portafolio_Oficial',
        demo: 'https://www.youtube.com/watch?v=Wdik6c80vPU'
    }
]

const Portafolio = () => {
    return (
        <section id='portafolio'>
            <h5>My recent Work</h5>
            <h2>Portafolio</h2>
            <div className="container portafolio__container">
                {
                        data.map(({id,image,title,github,demo}) =>{
                            return(
                                <article key = {id} className='portafolio__item'>
                                <div className="portafolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portafolio__item-cta">
                                    <a href={github} className='btn'>GitHub</a>
                                    <a href={demo}className='btn btn-primary' target='blank'>Live Demo</a>
                                </div>
                            </article>
                            )
                        })
                }
            </div>
        </section>
    )
}

export default Portafolio