import React from 'react'
2import UserProfile from './UserProfile';
3import { Outlet, Link, useParams } from 'react-router-dom';
4
5function User() {
6    const { userId } = useParams();
7
8    return (
9    <>
10        <UserProfile />
11        <hr/>
12        <Link to={`/users/${userId}/posts`}>View All Posts</Link>
13        ||
14        <Link to={`/users/${userId}/posts/1`}>View Post with ID 1</Link>
15        <hr/>
16        <Outlet />
17    </>
18    )
19}
20
21export default User
