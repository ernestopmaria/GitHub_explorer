import React, { useState, FormEvent, useEffect } from 'react';
import { Title, Form, TabPanels, Error, No } from './styles'
import logoImg from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import api from '../../services/api'
import { Theme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


const Dashboard: React.FC<void> = () => {



    interface TabPanelProps {
        children?: React.ReactNode;
        index: any;
        value: any;

    }

    interface User {
        name: string;
        description: string,
        login: string,
        avatar_url: string,
        public_repos: string,
        type: 'User' | 'Organization',
    }
    const [newUser, setNewUser] = useState("");
    const [inputError, setInputError] = useState("");




    const [initialStatus, setInitialStatus] = useState(false)


    const [organizations, setOrganization] = useState<User[]>(() => {
        const storagedOrganization = localStorage.getItem('@GithubExplorer:organizations');
        if (storagedOrganization) {
            setInitialStatus(true)
            return JSON.parse(storagedOrganization)
        }
        return []
    });

    const [users, setUsers] = useState<User[]>(() => {
        const storagedUsers = localStorage.getItem('@GithubExplorer:users');
        if (storagedUsers) {


            return JSON.parse(storagedUsers)
        }
        return []
    });

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:users', JSON.stringify(users))
        localStorage.setItem('@GithubExplorer:organizations', JSON.stringify(organizations))
    }, [users, organizations])

    async function handleAddUsers(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
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
                setInitialStatus(true)
                return
            }
            setUsers([...users, user]);
            setNewUser('');
            setInputError('')
            setInitialStatus(true)


        } catch (err) {
            setInputError('user not found')
        }
    }

    function TabPanel(props: TabPanelProps) {
        const { children, index, value, ...other } = props;

        return (
            <div role="tabpanel" hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
                className="TabPanels"
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}

            </div>
        );
    }

    function a11yProps(index: any) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper
        },
    }));

    const classes = useStyles();
    const [value, setValue] = useState(0)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
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
            <div className={classes.root}>
                <AppBar position="static" color="transparent">
                    <Tabs value={value} onChange={handleChange} aria-label="github-explorer">
                        <Tab label={`All (${organizations.length + users.length})`}{...a11yProps(0)} />
                        <Tab label={`Users(${users.length})`}{...a11yProps(1)} />
                        <Tab label={`Companies(${organizations.length})`} {...a11yProps(2)} />

                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} >{!!initialStatus ? (
                    <TabPanels className="users" >
                        {users.map(user => (<Link to={`users/${user.login}`} key={user.login}>
                            <img src={user.avatar_url} alt={user.name} />

                            <div>
                                <strong>{user.login}</strong>
                                <p> {user.name}</p>
                                <h6>Repositories:{user.public_repos}</h6>
                            </div>
                            <FiChevronRight size={24} />
                        </Link>
                        ))}
                    </TabPanels>) : (<No><h6> No users or company! you can search one  <FiSearch size={16} /></h6></No>)}
                    <TabPanels className="companies">

                        {organizations.map(organization => (<Link to={`users/${organization.login}`} key={organization.login}>
                            <img src={organization.avatar_url} alt={organization.name} />

                            <div>
                                <strong>{organization.login}</strong>
                                <p> {organization.name}</p>
                                <h6>Repositories:{organization.public_repos}</h6>

                            </div>
                            <FiChevronRight size={24} />
                        </Link>
                        ))}

                    </TabPanels>
                </TabPanel>

                <TabPanel value={value} index={1} >{!!initialStatus ? (
                    < TabPanels className="users" >
                        {users.map(user => (<Link to={`users/${user.login}`} key={user.login}>
                            <img src={user.avatar_url} alt={user.name} />

                            <div>
                                <strong>{user.login}</strong>
                                <p> {user.name}</p>
                                <h6>Repositories:{user.public_repos}</h6>
                            </div>
                            <FiChevronRight size={24} />
                        </Link>
                        ))}
                    </TabPanels>) : (<No><h6> No users or company! you can search one  <FiSearch size={16} /></h6></No>)}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {!!initialStatus ? (
                        <TabPanels className="companies">

                            {organizations.map(organization => (<Link to={`users/${organization.login}`} key={organization.login}>
                                <img src={organization.avatar_url} alt={organization.name} />

                                <div>
                                    <strong>{organization.login}</strong>
                                    <p> {organization.name}</p>
                                    <h6>Repositories:{organization.public_repos}</h6>

                                </div>
                                <FiChevronRight size={24} />
                            </Link>
                            ))}

                        </TabPanels>) : (<No><h6> No users or company! you can search one  <FiSearch size={16} /></h6></No>)}
                </TabPanel>

            </div>
        </>
    )
}

export default Dashboard;