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
import RuleEditForm from "./components/RuleEditForm/RuleEditForm";
import RulesContainer from "./components/RulesContainer/RulesContainer";
import NewCardContainer from "./components/NewCardContainer/NewCardContainer";
import StudyCardContainer from "./components/StudyCardContainer/StudyCardContainer";
import CardEditForm from "./components/CardEditForm/CardEditForm";
import CardEditContainer from "./components/CardEditForm/CardEditContainer";

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
        <Route
            path="cards/study"
            element={
                <PrivateRoute>
                    <StudyCardContainer />
                </PrivateRoute>
            }
        />
        <Route
            path="rules"
            element={
                <PrivateRoute>
                    <RulesContainer />
                </PrivateRoute>
            }
        />
        <Route
            path="rules/new"
            element={
                <PrivateRoute>
                    <RuleEditForm />
                </PrivateRoute>
            }
        />
        <Route
            path="cards/:id/edit"
            element={
                <PrivateRoute>
                    <CardEditContainer />
                </PrivateRoute>
            }
        />
        <Route path="/login" element={<PublicRoute><LoginForm /></PublicRoute>} />
    </Routes>
</BrowserRouter>

export default App