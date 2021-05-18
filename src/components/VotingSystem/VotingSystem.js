import React from 'react';
import './VotingSystem.css';

class VotingSystem extends React.Component {
    state = {
        languages: [
            {name: 'PHP', votes: 0},
            {name: 'Python', votes: 0},
            {name: 'Go', votes: 0},
            {name: 'Java', votes: 0}
        ]
    }

    vote = (index, event) => {
        event.preventDefault();

        let newLanguages = [...this.state.languages];

        newLanguages[index].votes++;
        this.setState({languages: newLanguages});
    }

    render() {
        return (
            <div className="VotingSystem">
                <h1>Vote your language!</h1>

                <div className="language-container">
					{
						this.state.languages.map((language, index) => 
							<div key={index} className="language-item">
								<div className="vote">
									{language.votes}
								</div>
								<div className="name">
									{language.name}
								</div>
								<a href="#" onClick={(event) => this.vote(index, event)}>click here</a>
							</div>
						)
					}
				</div>
            </div>
        )
    }
}

export default VotingSystem