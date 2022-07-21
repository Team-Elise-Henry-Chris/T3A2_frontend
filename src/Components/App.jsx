import { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Nav'
import IndividualTopic from './Pages/IndividualTopic'
import CreateAccount from './Pages/CreateAccount'
import SignIn from './Pages/SignIn'
import CreatePost from './Pages/CreatePost'
import AuthContext from './AuthProvider'
import axios from './../api/axios'
import AdminDashboard from './Pages/AdminDashboard'


const App = () => {
    const { auth } = useContext(AuthContext)

    const [topics, setTopics] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getTopics = async () => {
            const response = await axios.get('/api/v1/topic')
            setTopics(response.data)
        }
        
        getTopics()
    },[])

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get('/api/v1/post')
            setPosts(response.data)
        }
        
        getPosts()
    },[])

    return (
        <div data-theme="bumblebee" className="min-h-screen flex flex-col">
            <BrowserRouter>
                <Nav>
                    <Routes>
                        <Route exact path="/" element={<Home topics={topics} />} />
                        <Route path="/topic/:id" element={<IndividualTopic posts={posts} />} />
                        <Route path="/topic/:id/create-post" element={<CreatePost topics={topics} />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/create-account" element={<CreateAccount />} />
                        <Route path="/create-post" element={<CreatePost topics={topics} />} />
                        
                        {auth?.role === 'admin' && <Route path="/admin" element={<AdminDashboard topics={topics} setTopics={setTopics} />} />}

                        {/* Route not found - redirects to home page */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Nav>
            </BrowserRouter>           
        </div>
    )

}

export default App

