import React, { useState, useEffect } from 'react';
import axios from './../api/axios'

function DeleteRequest() {
    const [status, setStatus] = useState(null);

    var token = JSON.parse(window.localStorage.getItem('data'))?.accessToken

    useEffect(() => {

        const headers = { 
            'Authorization': `Bearer ${token}`
        };
        axios.delete(`/api/v1/post/${id}`, { headers })
            .then(() => setStatus('Delete successful'))
    }, [])

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">DELETE Request with Set Headers</h5>
            <div className="card-body">
                Status: {status}
            </div>
        </div>
    );
}

export { DeleteRequest };