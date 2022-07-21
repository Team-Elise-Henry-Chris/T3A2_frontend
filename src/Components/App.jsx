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


// const posts = [
//     { _id: '1', title: 'How to start Web Development', link: 'https://www.youtube.com/watch?v=sHdK4i-NQjo', resource_type: { type: 'Video', enum: { values: ['Video'] } }, date_created: '2022-07-10', rating: 5, topic_name: 'web development', user: { email: 'mjane123@gmail.com'} },
//     { _id: '2', title: "What is Web Development", link: 'https://www.elephantparade.com/blog/what---s-in-an-elephants-diet-', resource_type: { type: 'Blog', enum: { values: ['Blog'] } }, date_created: '2022-07-12', rating: 4, topic_name: 'web development', user: { email: 'mjane123@gmail.com'}   },
//     { _id: '3', title: 'CSS general knowledge', link: 'https://www.sciencenewsforstudents.org/article/lets-learn-about-elephants', resource_type: { type: 'Article', enum: { values: ['Article'] } }, date_created: '2022-06-15', rating: 3, topic_name: 'css', user: { email: 'jsmith123@gmail.com'}   },
//     { _id: '4', title: 'Why use CSS?', link: 'https://podcasts.apple.com/au/podcast/why-do-elephants-have-trunks-why-do-giraffes-have-purple/id1103320303?i=1000428987788', resource_type: { type: 'Podcast', enum: { values: ['Podcast'] } }, date_created: '2022-03-01', rating: 2, topic_name: 'css', user: { email: 'jsmith123@gmail.com'}     },
//     { _id: '5', title: 'The Asian Whale', link: 'https://www.google.com.au/books/edition/The_Asian_Elephant/95MoRwdQlcYC?hl=en&gbpv=0', resource_type: { type: 'Book', enum: { values: ['Book'] } }, date_created: '2022-07-13', rating: 4, topic_name: 'whale training', user: { email: 'jsmith123@gmail.com'}     },
//     { _id: '6', title: 'Whale Health and Reproduction Training Course', link: 'https://www.asianelephantresearch.com/elephant-health-and-reproduction-training-course/', resource_type: { type: 'Course', enum: { values: ['Course'] } }, date_created: '2021-12-04', rating: 5, topic_name: 'whale training', user: { email: 'jsmith123@gmail.com'}     },
//     { _id: '7', title: 'Image of Whale in Kenya', link: 'https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/hero_small/3v49raxlb8_WW187785.jpg', resource_type: { type: 'Other', enum: { values: ['Other'] } }, date_created: '2020-08-31', rating: 5, topic_name: 'whale training', user: { email: 'jsmith123@gmail.com'}   },
//     { _id: '8', title: 'Cats vs Dogs', link: 'https://www.sciencenewsforstudents.org/article/lets-learn-about-elephants', resource_type: { type: 'Article', enum: { values: ['Article'] } }, date_created: '2022-06-15', rating: 3, topic_name: 'cat training', user: { email: 'jsmith123@gmail.com'}     },
//     { _id: '9', title: 'Cats and swimming pools', link: 'https://podcasts.apple.com/au/podcast/why-do-elephants-have-trunks-why-do-giraffes-have-purple/id1103320303?i=1000428987788', resource_type: { type: 'Podcast', enum: { values: ['Podcast'] } }, date_created: '2022-03-01', rating: 2, topic_name: 'cat training', user: { email: 'jsmith123@gmail.com'}     },
//     { _id: '10', title: 'What is a Bird?', link: 'https://www.youtube.com/watch?v=sHdK4i-NQjo', resource_type: { type: 'Video', enum: { values: ['Video'] } }, date_created: '2022-07-10', rating: 5, topic_name: 'bird training', user: { email: 'jsmith123@gmail.com'}    },
//     { _id: '11', title: "Birds and penguins", link: 'https://www.elephantparade.com/blog/what---s-in-an-elephants-diet-', resource_type: { type: 'Blog', enum: { values: ['Blog'] } }, date_created: '2022-07-12', rating: 4, topic_name: 'bird training', user: { email: 'jsmith123@gmail.com'}     }
// ]

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

