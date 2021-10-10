import create from 'zustand'
// import { listCoins } from './actions';
import axios from 'axios'

// export const useInfo = create((set) => ({
//     coins: [],
//     loading: true,
//     error: null,
//     getCoins: async (url) => {
//         try {
//             const { data } = await axios.get(url)
//             set({ coins: data, loading: false })
//         } catch (error) {
//             const message =
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//             set({ loading: false, error: message })
//         }
//     },
//     resetCoins: () => {
//         set({ coins: [] })
//     },
// }))

export const useCoinInfo = create((set) => ({
    coin: {},
    marketCoins: [],
    trendingCoins: [],
    prices: {},
    loading: true,
    error: null,
    getPrices: async (url) => {
        try {
            const { data } = await axios.get(url)
            set({ prices: data })
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            set({ error: message })
        }
    },
    getCoin: async (url) => {
        try {
            const { data } = await axios.get(url)
            set({ coin: data, loading: false })
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            set({ loading: false, error: message })
        }
    },
    getMarketCoins: async (url) => {
        try {
            const { data } = await axios.get(url)
            set({ marketCoins: data, loading: false })
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            set({ loading: false, error: message })
        }
    },
    getTrendingCoins: async (url) => {
        try {
            const { data } = await axios.get(url)
            set({ trendingCoins: data, loading: false })
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            set({ loading: false, error: message })
        }
    },

    resetCoins: () => {
        set({
            marketCoins: [],
            trendingCoins: [],
            coin: [],
            loading: true,
            error: null,
        })
    },
}))

// export const useTrendingInfo = create((set) => ({
//     coins: [],
//     coin: [],
//     prices: [],
//     loading: true,
//     error: null,
//     getCoins: async (url) => {
//         try {
//             const { data } = await axios.get(url)
//             set({ coins: data, loading: false })
//         } catch (error) {
//             const message =
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//             set({ loading: false, error: message })
//         }
//     },
//     getPrices: async (url) => {
//         try {
//             const { data } = await axios.get(url)
//             set({ prices: data })
//         } catch (error) {
//             const message =
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//             set({ error: message })
//         }
//     },
//     resetCoins: () => {
//         set({ coins: [] })
//     },
// }))
