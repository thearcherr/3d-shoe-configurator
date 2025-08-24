import { create } from "zustand";

const useColor = create((set) => ({
    color: "#3333ff",
    setColor: (color) => set({ color: color }),
    colorLaces: "#ffffff",
    setColorLaces: (color) => set({ colorLaces: color }),
    colorStripes: "#ffffff",
    setColorStripes: (color) => set({ colorStripes: color }),
    colorSole: "#ffffff",
    setColorSole: (color) => set({ colorSole: color }),
    price: 99,
    setPrice: (price) => set({ price: price }),
    nightView: true,
    setNightView: (nv) => set({ nightView: nv }),
}))

export default useColor;