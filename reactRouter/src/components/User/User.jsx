import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const { userid } = useParams();
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h1>User: {userid}</h1>
        </div>
    );
}