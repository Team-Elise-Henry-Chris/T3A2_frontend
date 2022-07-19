const AdminDashboard = ({ topics }) => {

    const handleEdit = () => {

    }

    const handleDelete = () => {

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
                                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide lg:btn-sm btn-success">Create new topic</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map((topic, index) => (
                            <tr key={index}>
                                <td>{topic._id}</td>
                                <td>{topic.topic_name}</td>
                                <td>
                                    <button className="btn btn-warning">Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-error">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminDashboard