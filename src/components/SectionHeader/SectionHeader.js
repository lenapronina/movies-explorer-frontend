import './SectionHeader.css';

function SectionHeader({layoutClass, text}){
  const fullClassName = `${layoutClass} section-header`
  return (
    <h2 className={fullClassName}>{text}</h2>
  )
}

export default SectionHeader;