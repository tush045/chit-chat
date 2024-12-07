import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { mmkvStorage } from './storage'



interface authStore {
    user: Record<string, any> | null;
    setUser: (user: any) => void;
    logout: () => void;
    deviceTokenAdded: boolean;
    setDeviceTokenStatus: (value: boolean) => void;
}

export const useAuthStore = create<authStore>()(
    persist(
        (set, get) => ({
            user: null,
            deviceTokenAdded: false,
            setUser: (data) => set({user:data}),
            logout: () => set({user:null,deviceTokenAdded:false}),
            setDeviceTokenStatus: (value) => ({ deviTokenAdded: value }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => mmkvStorage),
        },
    ),
);