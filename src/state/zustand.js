import create from 'zustand';
import { listCoins } from './actions';

export const useStore = create((set) => (
    {
        coin: [],
        loading: true,
        error: null,
        getCoins: (url) => {
            listCoins(url)
            .then(response => set({coin: response, loading: false}) )
            .catch(error => set({loading: false, error: error}) )
        }
    }
))