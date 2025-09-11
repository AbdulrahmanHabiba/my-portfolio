import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24,    // 24 hours - how long data stays fresh
            gcTime: 1000 * 60 * 60 * 48,       // 48 hours - how long to keep in memory
            retry: 2,
            refetchOnWindowFocus: false,
        },
    }
})
