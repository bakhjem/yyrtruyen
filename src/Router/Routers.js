import React, { Component } from 'react';
import { BrowserRouter as Router,Link, Route } from "react-router-dom";
import HomeContainer from '../Container/HomeContainer';
import NovelContainer from '../Container/NovelContainer';
import ChapterContainer from '../Container/ChapterContainer';
import NewupdateContainer from '../Container/NewupdateContainer';
import GenresContainer from '../Container/GenresContainer';
import TopViewContainer from '../Container/TopViewContainer';
import NewestNovelContainer from '../Container/NewestNovelContainer';
import CompletedContainer from '../Container/CompletedContainer';
import SearchContainer from '../Container/SearchContainer';

class Routers extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/novel/:id" component={NovelContainer} />
                <Route exact path="/novel/:slug/:id" component={ChapterContainer} />
                <Route exact path="/updates/page/:id" component={NewupdateContainer} />
                <Route exact path="/genres/:slug/page/:id" component={GenresContainer} />
                <Route exact path="/hotnovel/page/:id" component={TopViewContainer} />
                <Route exact path="/newnovel/page/:id" component={NewestNovelContainer} />
                <Route exact path="/completed/page/:id" component={CompletedContainer} />
                <Route exact path="/search/:slug/page/:id" component={SearchContainer} />
            </div>
        );
    }
}

export default Routers;