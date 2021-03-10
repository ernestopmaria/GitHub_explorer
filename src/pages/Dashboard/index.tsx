import React, { useState, FormEvent, useEffect } from 'react';
import { Title, Form, Users, Error } from './styles'
import logoImg from '../../assets/images/logo.svg'
import { FiChevronRight, FiSettings } from 'react-icons/fi';
import api from '../../services/api'

const Dashboard: React.FC = () => {

    interface User {
        name: 'string';
        description: 'string',
        login: 'string',
        avatar_url: 'string',
        public_repos: 'string',
        type: 'User' | 'Organization'
    }

    const [organizations, setOrganization] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState("");
    const [mainStatus, setmainStatus] = useState(0);
    const [inputError, setInputError] = useState("");
    const [searchLenght, setSearchLenght] = useState(Boolean);
    const [searchUserLenght, setSearchUserLenght] = useState(Boolean);

    async function handleAddUsers(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (users.length >= 0) {
            setmainStatus(1)
            if (!newUser) {
                setmainStatus(0)
            }
        }
        if (!newUser) {
            setInputError("Insert the username");
            return;
        }



        try {

            const response = await api.get<User>(`users/${newUser}`)
            const user = response.data;


            if (user.type === "Organization") {
                setOrganization([...organizations, user])
                setNewUser('');
                setInputError('')

                if (organizations.length >= 0) {
                    setSearchLenght(true);
                    return
                }
                return
            }
            if (users.length >= 0) {
                setSearchUserLenght(true);

            }
            setUsers([...users, user]);
            setNewUser('');
            setInputError('')

        } catch (err) {
            setInputError('user not found')
        }
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Search for GitHub Users</Title>
            <Form hasError={!!inputError} onSubmit={handleAddUsers} >
                <input
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    placeholder="Insert the github username" />
                <button type="submit">Search</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            {!mainStatus ? (
                <h1>Nada encontrado</h1>
            ) : (

                <Users existisCompany={!!searchLenght} existisUser={!!searchUserLenght}>

                    <div className="users">

                        <button>Single Users({users.length})</button>
                        {users.map(user => (<a href="user_name" key={user.login}>
                            <img src={user.avatar_url} alt={user.name} />

                            <div>
                                <strong>{user.login}</strong>
                                <p> {user.name}</p>
                                <p><h6>Repositories:{user.public_repos}</h6></p>
                            </div>
                            <FiChevronRight size={24} />
                        </a>
                        ))}
                    </div>





                    <div className="companies">
                        <button>Organizations({organizations.length})</button>
                        {organizations.map(organization => (<a href="user_name" key={organization.name}>
                            <img src={organization.avatar_url} alt={organization.name} />

                            <div>
                                <strong>{organization.login}</strong>
                                <p> {organization.name}</p>
                                <p><h6>Repositories:{organization.public_repos}</h6> </p>

                            </div>
                            <FiChevronRight size={24} />
                        </a>
                        ))}

                    </div>
                </Users>)}
        </>
    )
}

export default Dashboard