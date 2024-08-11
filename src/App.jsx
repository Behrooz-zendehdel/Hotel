import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./Pages/CompleteProfile";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AppLayout from "./UI/AppLayout";
import OwnerDashboard from "./Pages/OwnerDashboard";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/owner" element={<AppLayout />}>
          {/* <Route index element={<Navigate to="dashboard" replace />} /> */}
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
