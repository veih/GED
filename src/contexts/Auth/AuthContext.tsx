import { createContext } from 'react';
import { AuthContextType, User } from '../../types/User';



export const AuthContext = createContext<AuthContextType>(null!);