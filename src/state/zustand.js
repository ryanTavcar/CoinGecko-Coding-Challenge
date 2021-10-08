import create from "zustand";
// import { listCoins } from './actions';
import axios from "axios";

export const useMarket = create((set) => ({
  coins: [],
  loading: true,
  error: null,
  getCoins: async (url) => {
    try {
      const { data } = await axios.get(url);
      set({ coins: data, loading: false });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      set({ loading: false, error: message });
    }
  },
  resetCoins: () => {
    set({ coins: [] });
  },
}));

export const useCoinInfo = create((set) => ({
  coin: {},
  loading: true,
  error: null,
  getCoin: async (url) => {
    try {
      const { data } = await axios.get(url);
      set({ coin: data, loading: false });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      set({ loading: false, error: message });
    }
  },
}));

export const useTrending = create((set) => ({
  coins: [],
  loading: true,
  error: null,
  getCoins: async (url) => {
    try {
      const { data } = await axios.get(url);
      set({ coins: data, loading: false });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      set({ loading: false, error: message });
    }
  },
  resetCoins: () => {
    set({ coins: [] });
  },
}));
