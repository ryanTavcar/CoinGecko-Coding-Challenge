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
    loading: true,
    error: null,
    getPrices: async (coinId) => {
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
