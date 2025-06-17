import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route>
        <div className="min-h-screen w-full flex items-center justify-center bg-dark-300">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">404 페이지를 찾을 수 없습니다</h1>
            <p className="text-slate-400">요청하신 페이지가 존재하지 않습니다.</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
