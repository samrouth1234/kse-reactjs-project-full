import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { HttpError } from 'http-errors'; // Import HttpError

/**
 * The QueryClient is a powerful tool for managing data fetching and caching in React applications.
 * Cache query results for 1 minute
 * Retry failed queries up to 3 times, unless the error is a 4xx error, in which case it will not retry.
 */

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // set to one minutes
      retry: (failureCount, error) => {
        // Do not retry on 4xx error codes
        if (error instanceof HttpError && String(error.code).startsWith("4")) {
          return false;
        }
        return failureCount !== 3;
      },
    },
  },
});

const App = () =>{
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
