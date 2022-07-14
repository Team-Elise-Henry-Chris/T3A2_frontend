import { Link, useParams } from 'react-router-dom'

const Nav = ({ children }) => {
    const { id } = useParams()

    const getNavLinks = () => {
        const createPostRoute = (id ? `/topic/${id}/create-post` : '/create-post')

        return (
            <>
                <li><Link to="/">Home</Link></li>
                <li><Link to={createPostRoute}>Create Post</Link></li>
                <li><Link to="/sign-in">Sign In</Link></li>
            </>
        )
    }

    return (
        <div className="drawer h-full flex-grow">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">

                    {/* Burger Nav */}
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-1 px-2 mx-2">Teach Yo'Self</div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/*  Navbar menu content here */}
                            {getNavLinks()}
                        </ul>
                    </div>
                </div>

                {/* children relates to the content between the start and end tag of the Nav component in App.jsx */}
                {children}

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/*  Sidebar content here  */}
                    {getNavLinks()}
                </ul>
            </div>

        </div>
    )
}

export default Nav