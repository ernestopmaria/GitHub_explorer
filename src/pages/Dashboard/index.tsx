import React from 'react';
import {Title, Form, Users} from './styles'
import logoImg from '../../assets/images/logo.svg'
import {FiChevronRight} from 'react-icons/fi';

const Dashboard :React.FC =()=>(
    <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Search for GitHub Users</Title>
    <Form action ="">
        <input placeholder="Insert the github username"/>
        <button type="submit">Search</button>
    </Form>

    <Users>
        <div className="users">
        <button>Single Users</button>
        <a href="teste">
            <img src="https://avatars.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="Ernesto Maria"/>
     
        <div>
            <strong>Ernesto Maria</strong>
            <p> React Native developer</p>
        </div>
        <FiChevronRight size={24}/>
        </a>
        <a href="teste">
            <img src="https://avatars.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="Ernesto Maria"/>
     
        <div>
            <strong>Ernesto Maria</strong>
            <p> React Native developer</p>
        </div>
        </a>
        <a href="teste">
            <img src="https://avatars.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="Ernesto Maria"/>
     
        <div>
            <strong>Ernesto Maria</strong>
            <p> React Native developer</p>
        </div>
        </a>
        </div>
        


        <div className="companies">
            <button>Organizations</button>
        <a href="teste">
            <img src="https://avatars.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="Ernesto Maria"/>
            <div>
            <strong>Ernesto Maria</strong>
            <p> React Native developer</p>
        </div>
        <FiChevronRight size={24}/>
        </a>
        <a href="teste">
            <img src="https://avatars.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="Ernesto Maria"/>
            <div>
            <strong>Ernesto Maria</strong>
            <p> React Native developer</p>
        </div>
        </a>
        </div>
    </Users>
    </>
)

export default Dashboard