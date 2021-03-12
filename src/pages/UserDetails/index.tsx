import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg';
import { Header, UserInfo, Repositories, Title, LoadingFlag, No } from './styles'
import { FiChevronLeft, FiChevronRight, FiMapPin, FiTool, FiStar } from 'react-icons/fi';
import api from '../../services/api'
import { CircularProgress } from '@material-ui/core';

interface UserParams {
    users: string
}

interface User {
    name: string;
    bio: string;
    followers: number;
    avatar_url: string;
    public_repos: string;
    following: number,
    events_url: string;
    location: string;

}
interface Repository {
    stargazers_count: number;
    name: string;
    id: string;

}

const UserDetatils: React.FC = () => {
    const [user, setUser] = useState<User | null>(null)
    const [repository, setRepository] = useState<Repository[]>([]);
    const { params } = useRouteMatch<UserParams>();


    useEffect(() => {
        api.get(`users/${params.users}`).then(response => {
            setUser(response.data)
        })
        api.get(`users/${params.users}/repos`).then(response => {
            setRepository(response.data)
        });
    }, [params.users, repository]);

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={24} />
            voltar
        </Link>
            </Header>
            {user && (
                <UserInfo>
                    <header>
                        <img src={user.avatar_url} alt={user.name} />
                        <div>
                            <strong>{user.name}</strong>
                            <p><FiTool size={15} />  {user.bio}</p>
                            <h5><FiMapPin size={12} />   {user.location}</h5>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{user.public_repos}</strong>
                            <span> Publics repos</span>
                        </li>
                        <li>
                            <strong>{user.following}</strong>
                            <span> following</span>
                        </li>
                        <li>
                            <strong>{user.followers}</strong>
                            <span> followers</span>
                        </li>
                    </ul>
                </UserInfo>)}


            {user ? <Title>Welcome to my profile , you can explore my ({repository.length}) repositories here!</Title> :
                (<LoadingFlag><CircularProgress disableShrink /></LoadingFlag>)}

            {repository.map(repositor => (<Repositories key={repositor.id}>
                <Link to="example" >

                    <div>
                        <strong>{repositor.name}</strong>
                        <p><FiStar size={15} />:{repositor.stargazers_count}</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>

            </Repositories>))}
        </>
    )
}

export default UserDetatils