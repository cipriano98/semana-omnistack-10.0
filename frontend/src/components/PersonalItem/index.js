import React from 'react';
import './styles.css';

function PersonalItem({ personal }) {
    return (
        <li className="personal-item">
            <header>
                <img src={personal.avatar_url} alt={personal.name} />
                <div className="user-info">
                    <strong>{personal.name}</strong>
                    <span>{personal.techs.join(', ')}</span>
                </div>
            </header>
            <p>{personal.bio}</p>
            <a href={`https://github.com/${personal.github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}
export default PersonalItem;