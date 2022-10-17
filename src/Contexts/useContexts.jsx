import { createContext } from 'react';
import useAppProvider from '../hooks/useAppProvider';

const UserContext = createContext({});

export function AppProvider(props) {
    const userProvider = useAppProvider()
    return (
        <UserContext.Provider value={userProvider}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;