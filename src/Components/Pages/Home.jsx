

import TopicList from '../TopicList'


const Home = ({ topics }) => {


    return (
        <>
            <TopicList topics={topics} />
            {/* <h4>{window.localStorage.getItem('data')}</h4> */}

        </>
    )
}

export default Home