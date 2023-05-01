import { SkillsInfo } from "../../data/data"
import "./Skills.css"

export default function Skills () {
    return (
        <section id="skills">
        <div className="skills-container">
        <h1>Skills</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>

          <div>
          {SkillsInfo.map((skill) => (
             <div key={skill.title}>
             <h2>{skill.title}</h2>
             <img src={skill.image} alt={skill.title} />
           </div>
    
        
          ))}
 </div>
 </div>
        </section> 

    )
}

