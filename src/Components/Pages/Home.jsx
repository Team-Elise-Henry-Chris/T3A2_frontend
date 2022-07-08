import TopicList from '../TopicList'

const Home = ({ topics }) => {
    return (
        <>
            <h1>Home Page</h1>
            <TopicList topics={topics} />
        </>
    )
}

export default Home