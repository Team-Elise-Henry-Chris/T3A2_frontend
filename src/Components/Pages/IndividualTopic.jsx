import { useParams } from 'react-router-dom'

const IndividualTopic = () => {
    const { id } = useParams()

    return (
        <div className="individual_topic">
            <h2>Individual Topic Page - { id }</h2>
        </div>
    )
}

export default IndividualTopic