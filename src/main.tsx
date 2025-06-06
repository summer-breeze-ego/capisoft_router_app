import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { Provider } from './components/ui/provider.tsx'

// imports for react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// imports for chakra UI

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <App />
        </Provider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
)
