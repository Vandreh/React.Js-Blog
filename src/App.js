import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';

import Home1 from './pages/home1';
// import { Login } from './pages/login/component';
import ContactUs from './pages/contact';
import Blog from './pages/blog';

import Algos from './pages/algos';
import Cloud from './pages/cloud';
import Health from './pages/health';
import Home from './pages/home';
import WebDev from './pages/web-dev';
import BlogPostViewer from './pages/post';
import EditPost from './pages/edit-post';

const user = {
    firstName: 'Vandreh',
    lastName: 'Esm',
};

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation user={user} />
                <Routes>
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/contact" element={<ContactUs />} />
                    <Route exact path="/algos" element={<Algos />} />
                    <Route exact path="/cloud" element={<Cloud />} />
                    <Route exact path="/health" element={<Health />} />
                    {/* <Route exact path="/login" element={<Login />} /> */}
                    <Route exact path="/web-dev" element={<WebDev />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route
                        exact
                        path="/post/:id?"
                        element={<BlogPostViewer />}
                    />
                    <Route exact path="/edit-post" element={<EditPost />} />
                    <Route exact path="/" element={<Home1 />} />

                    {/* <Route path="*" element={() => 404} /> */}
                    {/* <Route path="/post/:id" element={<Post/>} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// import PageRederer from './page_renderer';
// import Post from "./pages/post";
// <Route path="/:page" component={PageRederer} />
