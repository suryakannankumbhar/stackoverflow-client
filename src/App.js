import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoute';
import { fetchAllQuestions } from './actions/questions';
import { fetchAllUsers } from './actions/users';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllQuestions());
        dispatch(fetchAllUsers());
    }, [dispatch]);

    return (
        <div className='App'>
            <Suspense fallback={null}>
                <Router>
                    <Navbar />
                    <AllRoutes />
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
