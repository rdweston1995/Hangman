import React, { Component } from "react";
import "./landingPage.css";
import Card from "./../components/card";
import themes from "./../themes.json";
class landingPage extends Component {
    state = {
        themes
    };

    componentDidMount() {

    }

    render() {
        return (
            <div className="landingContainer">
                <h1 className="landingTitle">Hangman</h1>
                {this.state.themes.length ? (
                    <div className="row">
                        {this.state.themes.map(theme => {
                            return (
                                <Card
                                    key={theme.title}
                                    title={theme.title}
                                    description={theme.description}
                                    image={theme.image}
                                />
                            );

                        })}
                    </div>

                ) : (
                    <h1>Nothing to display</h1>
                )}
                
            </div>
        );
    }
}

export default landingPage;