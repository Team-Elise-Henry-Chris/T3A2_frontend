import Topic from './Topic'


const TopicList = ({ topics }) => {

    return (
        <>

            <div className="flex flex-wrap justify-center">
                {topics.map((topic, index) => <Topic key={index} topic={topic} />)}
            </div>
            
        </>
    )
}

export default TopicList