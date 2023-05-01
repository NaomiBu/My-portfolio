import { ProjectInfo } from "../../data/data";
import "./Projects.css"

export default function Projects () {
    return (
        <section id="projects">
          <div className="projects-container">
            <h1 >
              My Projects
            </h1>
    
          <div>
            {ProjectInfo.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className=''>
                
                <h1> {project.title} </h1>
             <p>{project.description}</p>

                <div className= ''>
                  <img
                    alt=""
                    className=""
                    src={project.image}
                  />
                  <div>
                    <h2>{project.subtitle}</h2>
                 </div>

                </div>
              </a>
            ))}
          </div>
          </div>
      </section>
    );
}