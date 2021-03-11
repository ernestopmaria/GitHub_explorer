import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg';
import { Header, UserInfo, Repositories, Title } from './styles'
import { FiChevronLeft, FiChevronRight, FiMapPin, FiTool, FiStar } from 'react-icons/fi';

interface UserParams {
    users: string
}


const UserDetatils: React.FC = () => {
    const { params } = useRouteMatch<UserParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={24} />
            voltar
        </Link>
            </Header>
            <UserInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="" />
                    <div>
                        <strong>Ernesto Maria</strong>
                        <p><FiTool size={15} />   React Native and NodeJs developer</p>
                        <h5><FiMapPin size={12} />    Luanda Angola</h5>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>50</strong>
                        <span> Publics repos</span>
                    </li>
                    <li>
                        <strong>25</strong>
                        <span> following</span>
                    </li>
                    <li>
                        <strong>56</strong>
                        <span> followers</span>
                    </li>
                </ul>
            </UserInfo>

            <Title>Welcome to my profile , you can explore my repositories here! </Title>
            <Repositories>
                <Link to="jxjsds">

                    <div>
                        <strong>React Landing page</strong>
                        <p><FiStar size={15} /> 2</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>

            </Repositories>
        </>
    )
}

export default UserDetatils