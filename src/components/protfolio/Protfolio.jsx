import React from 'react'
import './Protfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [

{
id: 1,
title: 'data visualization and charts templates for Figma',

image: IMG1,
github: 'https://github.com' ,
demo: 'https://cdn.dribbble.com/userupload/11362472/file/original-ac7e9f09c4dee89b3b4e3cb78cf73346.jpg?resize=752x564'
},
{
id: 2,
title: 'Aurora Bundle',
image: IMG2,
github: 'https://github.com' ,
demo: 'https://cdn.dribbble.com/userupload/11322042/file/original-a7b3e43f0f48320f9ea1704a6f72d8fb.jpg?resize=752x564'
},
{
id: 3,
title: 'charts templates',

image: IMG3,
github: 'https://github.com' ,
demo:  'https://cdn.dribbble.com/userupload/11304262/file/original-437511f981263c994c008a24356b803d.jpg?resize=752x564'
},
{
id: 4,
title: 'Make Impactful Data Visualizations',
image: IMG4,
github: 'https://github.com' ,
demo: 'https://cdn.dribbble.com/userupload/11276107/file/original-372d66eb30fd4c4ae5276361175e5c75.jpg?resize=752x564'
},
{
id: 5,
title: 'Futuristic dashboard widgets',

image: IMG5,
github: 'https://github.com' ,
demo: 'https://cdn.dribbble.com/userupload/11086327/file/original-071c2e363ffb73fbb29f693b872404d3.jpg?resize=752x564'
},
{
id: 6,
title: 'Futuristic dashboard widgets',
image: IMG6,
github: 'https://github.com' ,
demo: 'https://cdn.dribbble.com/userupload/10947695/file/original-f8ac7b99fad06440413e33e14034d79c.jpg?resize=752x564'
},
]













    






const Protfolio = () => {
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">


    {
      data.map(({id, image, title, github, demo}) => {

        return(

    <article key={id}className="portfolio_item">
    <div className="portfolio_item-image">

    <img src={image} alt={title}/>
  </div>

      <h3>{title}</h3>

<div className="portfolio_item-cta">
      <a href={github} className='btn'>Github</a>

    <a target='_blank' href={demo} className='btn btn-primary'>Live Demo</a>
</div>
    </article>          
        )



      })
    }


    </div>
    </section>
  )
}

export default Protfolio
