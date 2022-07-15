import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Nav'
import IndividualTopic from './Pages/IndividualTopic'
import CreateAccount from './Pages/CreateAccount'
import SignIn from './Pages/SignIn'
import CreatePost from './Pages/CreatePost'

const topics = [
    { _id: '1', name: 'How to feed your elephant' },
    { _id: '2', name: 'Photography for beginners' },
    { _id: '3', name: 'Gaming' },
    { _id: '4', name: 'Psychology' },
    { _id: '5', name: 'How to feed your elephant' },
    { _id: '6', name: 'Photography for beginners' },
    { _id: '7', name: 'Gaming' },
    { _id: '8', name: 'Psychology' },
    { _id: '9', name: 'How to feed your elephant' },
    { _id: '10', name: 'Photography for beginners' },
    { _id: '11', name: 'Gaming' },
    { _id: '12', name: 'Psychology' },
    { _id: '13', name: 'How to feed your elephant' },
    { _id: '14', name: 'Photography for beginners' },
    { _id: '15', name: 'Gaming' },
    { _id: '16', name: 'Psychology' }
]

const posts = [
    { _id: '1', title: 'How to prepare elephant food', link: 'https://www.youtube.com/watch?v=sHdK4i-NQjo', resource_type:{type: 'Video', enum:{values:['Video']} }, date_created: '2022-07-10', rating: 5},
    { _id: '2', title: "What's in an elephant's diet", link: 'https://www.elephantparade.com/blog/what---s-in-an-elephants-diet-', resource_type:{type: 'Blog', enum:{values:['Blog']} }, date_created: '2022-07-12', rating: 4},
    { _id: '3', title: 'Elephant general knowledge', link: 'https://www.sciencenewsforstudents.org/article/lets-learn-about-elephants', resource_type:{type: 'Article', enum:{values:['Article']} }, date_created: '2022-06-15', rating: 3},
    { _id: '4', title: 'Why do elephants have trunks?', link: 'https://podcasts.apple.com/au/podcast/why-do-elephants-have-trunks-why-do-giraffes-have-purple/id1103320303?i=1000428987788', resource_type:{type: 'Podcast', enum:{values:['Podcast']} }, date_created: '2022-03-01', rating: 2},
    { _id: '5', title: 'The Asian Elephant', link: 'https://www.google.com.au/books/edition/The_Asian_Elephant/95MoRwdQlcYC?hl=en&gbpv=0', resource_type:{type: 'Book', enum:{values:['Book']} }, date_created: '2022-07-13', rating: 4},
    { _id: '6', title: 'Elephant Health and Reproduction Training Course', link: 'https://www.asianelephantresearch.com/elephant-health-and-reproduction-training-course/', resource_type:{type: 'Course', enum:{values:['Course']} }, date_created: '2021-12-04', rating: 5},
    { _id: '7', title: 'Image of elephant in Kenya', link: 'https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/hero_small/3v49raxlb8_WW187785.jpg', resource_type:{type: 'Other', enum:{values:['Other']} }, date_created: '2020-08-31', rating: 5}
]

const App = () => {
    
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
                    </Routes>
                </Nav>
            </BrowserRouter>
        </div>
    )

}

export default App
