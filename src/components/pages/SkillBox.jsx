import React from 'react';
function SkillBox({ src, alt = "Skill", title = "Skill" }) {
  return <img src={src} alt={alt} title={title} />;
}
export default SkillBox;