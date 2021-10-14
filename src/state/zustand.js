import create from 'zustand'
import axios from 'axios'

const errorRepsonse = (error) => {
    return error.response && error.response.data.message
        ? error.response.data.message
        : error.message
}

export const useCoinInfo = create((set) => ({
    coin: {},
    marketCoins: [],
    trendingCoins: [],
    prices: {},
    news: [],
    loading: true,
    error: null,
    getPrices: async (coinId) => {
        set({ loading: true })
        try {
            const { data } = await axios.get(
                `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=aud&days=30&interval=daily`
            )
            set({ prices: data })
        } catch (error) {
            const message = errorRepsonse(error)
            set({ error: message })
        }
    },
    getCoin: async (coinId) => {
        set({ loading: true })
        try {
            const { data } = await axios.get(
                `https://api.coingecko.com/api/v3/coins/${coinId}`
            )
            set({ coin: data, loading: false })
        } catch (error) {
            const message = errorRepsonse(error)
            set({ loading: false, error: message })
        }
    },
    fetchMarketDetails: async (currency) => {
        set({ loading: true })
        try {
            const { data } = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
            )
            set({ marketCoins: data, loading: false })
        } catch (error) {
            const message = errorRepsonse(error)
            set({ loading: false, error: message })
        }
    },
    fetchTrendingCoins: async () => {
        set({ loading: true })
        try {
            const { data } = await axios.get(
                'https://api.coingecko.com/api/v3/search/trending'
            )
            set({ trendingCoins: data, loading: false })
        } catch (error) {
            const message = errorRepsonse(error)
            set({ loading: false, error: message })
        }
    },
    fetchNews: async () => {
        set({ loading: true })
        try {
            const { data } = await axios.get(
                'https://api.coingecko.com/api/v3/events?upcoming_events_only=false'
            )

            set({ news: data, loading: false })
        } catch (error) {
            const message = errorRepsonse(error)
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

export const useGeneralState = create((set) => ({
    isModalOpen: false,
    setIsModalOpen: () =>
        set((state) => ({
            isModalOpen: !state.isModalOpen,
        })),
}))
