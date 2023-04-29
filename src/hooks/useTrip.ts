import {useSelector} from 'react-redux';
import { selectTrip } from '@/ducks/trip.duck';

export const useTrip = () => useSelector(selectTrip);
