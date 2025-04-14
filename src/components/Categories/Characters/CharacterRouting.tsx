import React from 'react';
import logo from './logo.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { CharacterList } from '../../../data/characters/CharacterList';
import CharacterPage from './CharacterPageWiki';

function CharacterRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Characters</h2>
                        {CharacterList.map(character => {
                            return (
                                // <li key={creature.fileName + '-creaturePage-li'}>
                                <Link
                                    key={character.fileName + '-creaturePage-Link'}
                                    to={`/characters/${character.fileName}`}
                                >
                                    <button>
                                        {character.name.fore} {character.name.sur}
                                    </button>
                                </Link>
                                // </li>
                            )
                        })}
                    </div>
                } />

                {CharacterList.map(char => {
                    return (
                        <Route
                            key={char.fileName + '-creaturePage-Route'}
                            path={char.fileName}
                            element={
                                <CharacterPage
                                    key={char.fileName + '-creaturePage-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem={props.roleplaySystem}
                                    character={char}
                                />}
                        />
                    )
                })}
            </Route>
        </Routes>
    );
}

export default CharacterRouting;
