import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./Pages/CompleteProfile";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container xl:max-w-screen-xl">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/notfound" element={<CompleteProfile />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
