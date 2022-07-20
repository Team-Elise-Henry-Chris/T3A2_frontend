import { useState, useRef } from 'react'
import axios from '../../api/axios'

const AdminDashboard = ({ topics, setTopics }) => {
    const [showInput, setShowInput] = useState(false)
    const newTopicName = useRef()


    // const handleEdit = async () => {
        // Function ready for logic to edit a topic
    // }

    const handleDelete = async (id) => {
        setTopics(topics.filter((topic) => topic._id !== id))
        await axios.delete(`/api/v1/topic/${id}`)
    }

    // Handles the UI
    const toggleShowNewTopic = () => {
        setShowInput(!showInput)
    }

    // Logic to create the topic in the db
    const createTopic = async () => {
        const response = await axios.post('/api/v1/topic', {topic_name: newTopicName.current.value})

        setTopics([...topics, response.data])
    }

    


    return (
        <>
            <div className="overflow-x-auto shadow-md sm:rounded-lg max-w-4xl m-5">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>Topics</th>
                            <th colSpan={2}>
                                {!showInput && <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide lg:btn-sm btn-success hover:bg-green-400" onClick={toggleShowNewTopic}>Create new topic</button>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map((topic, index) => (
                            <tr key={index}>
                                <td>{topic._id}</td>
                                <td>{topic.topic_name}</td>
                                {/* No edit route - edit button ready to go when implemented */}
                                {/* <td>
                                    <button className="btn btn-warning  hover:bg-primary-focus">
                                        Edit
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 20 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </button>
                                </td> */}
                                <td>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide lg:btn-sm btn-error hover:bg-red-600" onClick={() => handleDelete(topic._id)}>
                                        Delete
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 20 25" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            {showInput &&
                <div>
                    <input type="text" placeholder="Enter New Topic Name" className="input input-bordered input-primary w-full max-w-xs ml-5" ref={newTopicName} />
                    <button onClick={createTopic} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-3">
                        Save
                    </button>
                    <button onClick={toggleShowNewTopic} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-3">
                        Close
                    </button>
                </div>
            }
        </>
    )
}

export default AdminDashboard