import './SectionHeader.css';

function SectionHeader({clss, text}){
  const classk = `${clss} section-header`
  return (
    <h2 className={classk}>{text}</h2>
  )
}

export default SectionHeader;