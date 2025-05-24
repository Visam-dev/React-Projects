import React, {useEffect, useState} from 'react'; 
import { useLoaderData } from 'react-router-dom';

export default function Github() {
   const data = useLoaderData();

 return(
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h1>Github</h1>
      <h2>Name: Visam-dev</h2>
      <p>Github Followers: {data.followers}</p>
      <img className='mx-auto' src={data.avatar_url} alt="Gitub's Picture"  width="200px"/>
      <p className='font-bold px-4'>GitHub is a cloud-based platform that helps developers manage and store their code using Git, a version control system. It allows multiple people to collaborate on projects from anywhere.

Git: Tracks changes in your code (version control).

GitHub: Hosts your Git repositories online and adds collaboration features like pull requests, issues, discussions, etc.</p>

 </div>
 )
}

export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/Visam-dev');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}