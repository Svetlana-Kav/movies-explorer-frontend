import './SectionName.css'

function SectionName(props){
    return(
        <h3 className= {`section-name ${props.class}`}>{props.text}</h3>
    )
}

export default SectionName;