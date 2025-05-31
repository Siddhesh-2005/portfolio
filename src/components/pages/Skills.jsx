import React from 'react'
import SkillBox from './SkillBox';
import htmlLogo from "../../assets/htmlLogo.svg"
import cssLogo from "../../assets/cssLogo.svg"
import jsLogo from "../../assets/jsLogo.svg"
import reactLogo from "../../assets/reactLogo.svg"
import nodeLogo from "../../assets/nodeLogo.svg"
import postgresLogo from "../../assets/postgresLogo.svg"
import javaLogo from "../../assets/javaLogo.svg"
import figmaLogo from "../../assets/figmaLogo.svg"

function Skills() {
  return (
    <div className='skills'>
      <p className='skillsHeading'>My Skills</p>
      <div className='skillBoxContainer'>
        <SkillBox src={htmlLogo} title="HTML" />
        <SkillBox src={cssLogo} title="CSS" />
        <SkillBox src={jsLogo} title="JavaScript" />
        <SkillBox src={nodeLogo} title="Node.js" />
        <SkillBox src={reactLogo} title="React" />
        <SkillBox src={postgresLogo} title="PostgreSQL" />
        <SkillBox src={javaLogo} title="Java" />
        <SkillBox src={figmaLogo} title="Figma" />
      </div>
    </div>
  )
}
export default Skills;