import React from 'react'
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import PrivateRoute from './components/Routes/PrivateRoute'
import DeckContainer from "./components/DeckContainer/DeckContainer";
import PublicRoute from "./components/Routes/PublicRoute";
import LoginForm from "./components/LoginForm/LoginForm";
import NewCardContainer from "./components/NewCardContainer/NewCardContainer";

const App = () => <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/cards" />} />
        <Route
            path="/cards"
            element={
                <PrivateRoute>
                    <DeckContainer />
                </PrivateRoute>
            }
        />
        <Route
            path="cards/new"
            element={
                <PrivateRoute>
                    <NewCardContainer />
                </PrivateRoute>
            }
        />
        <Route path="/login" element={<PublicRoute><LoginForm /></PublicRoute>} />
    </Routes>
</BrowserRouter>

export default App
