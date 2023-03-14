import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import Album from "./pages/Album";
import Photo from "./pages/Album/pages/Photo";
import Home from "./pages/Home";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                }
            />
            <Route
                path="/album"
                element={
                    <DefaultLayout>
                        <Album />
                    </DefaultLayout>
                }
            />
            <Route
                path="/album/:id"
                element={
                    <DefaultLayout>
                        <Album />
                    </DefaultLayout>
                }
            />
            <Route
                path="/photo/:id"
                element={
                    <DefaultLayout>
                        <Photo />
                    </DefaultLayout>
                }
            />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
