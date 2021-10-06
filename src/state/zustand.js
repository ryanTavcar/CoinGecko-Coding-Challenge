import create from 'zustand';
import { listCoins } from './actions';

export const useStore = create((set) => (
    {
        coins: [],
        loading: true,
        error: null,
        getCoins: (url) => {
            listCoins(url)
            .then(response => set({coins: response, loading: false}) )
            .catch(error => set({loading: false, error: error}) )
        },
        resetCoins: () => {
            set({coins: []})
        }
    }
))