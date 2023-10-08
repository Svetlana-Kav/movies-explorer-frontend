import './SectionName.css'

function SectionName(props){
    return(
        <h2 className= {`section-name ${props.class}`}>{props.text}</h2>
    )
}

export default SectionName;