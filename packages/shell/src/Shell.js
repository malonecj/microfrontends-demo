import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Header from "./Header";
import Footer from "./Footer";
import { ServiceProvider } from "./Service";

const HomePageService = React.lazy(() => import("home/HomepageService"));
const SearchResultsService = React.lazy(() => import("searchResults/SearchResultsService"));
const ViewItemPage = React.lazy(() => import("viewItemPage/ViewItemPage"));

const queryClient = new QueryClient();

export default function Shell() {

  return (
    <QueryClientProvider client={queryClient}>
      <ServiceProvider>
        <BrowserRouter>
          <Header />
          <React.Suspense fallback={"Loading"}>
            <Routes>
              <Route path="/home" element={<HomePageService />} />
              <Route path="/ads" element={<SearchResultsService />} />
              <Route path="/item" element={<ViewItemPage />} />
              <Route
                path="*"
                element={<Navigate to="/home" replace />}
              />
            </Routes>
          </React.Suspense>
          <Footer />
        </BrowserRouter>
      </ServiceProvider >
    </QueryClientProvider >
  );
}
