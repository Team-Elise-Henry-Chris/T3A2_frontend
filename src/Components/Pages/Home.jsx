import TopicList from '../TopicList'
// import jwt_decode from 'jwt-decode'

const Home = ({ topics }) => {
    // var token = JSON.parse(window.localStorage.getItem('data'))?.accessToken
    // var decoded = jwt_decode(token)

    return (
        <>
            <TopicList topics={topics} />
            {/* <h4>{window.localStorage.getItem('data')}</h4> */}
            {/* {console.log(decoded.id)} */}

        </>
    )
}

export default Home