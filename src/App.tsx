import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WholeApp from "./components/WholeApp";
import { LocationProvider } from "./context/LocationContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <LocationProvider>
      <QueryClientProvider client={queryClient}>
        <WholeApp />
      </QueryClientProvider>
    </LocationProvider>
  );
}

export default App;
