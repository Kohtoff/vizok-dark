import {useSelector} from 'react-redux';
import {selectTrip} from '@/ducks/trip.ducks';
import { selectAuth } from '@/ducks/auth.ducks';

export const useTrip = () => useSelector(selectTrip);

export const useAuth = () => useSelector(selectAuth);
