import create from 'zustand';

type BearsState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}


const useBearStore = create<BearsState>((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore
