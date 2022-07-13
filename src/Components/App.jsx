import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Nav'
import CreateAccount from './Pages/CreateAccount'
import SignIn from './Pages/SignIn'

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

const App = () => {

    return (
        <div data-theme="bumblebee" className="min-h-screen flex flex-col">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home topics={topics} />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App
