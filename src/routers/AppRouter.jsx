import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { firebase } from '../firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';
import { Loading } from '../components/loading/Loading';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));

            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });



    }, [ dispatch, setChecking, setIsLoggedIn ]);

    if (checking) {
        return (<Loading />)
    }

    return (
        <Router>

            <div>
                
                <Switch>
                    
                    <PublicRoute
                        isAuthenticated={ isLoggedIn }
                        component={ AuthRouter }
                        path="/auth"                    
                    />

                    <PrivateRoute
                        isAuthenticated={ isLoggedIn }
                        component={ JournalScreen }
                        path="/"
                        exact

                    
                    />

                    <Redirect to="/auth/login" />


                    {/* <Route path="/auth" component={ AuthRouter } />

                    <Route exact path="/" component={ JournalScreen } /> 

                    <Redirect to="/auth/login" />*/}

                </Switch>
            
            </div>

        </Router>
    )
}