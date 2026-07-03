import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import RoleplayLayout from './RoleplayLayout';
import CreaturesRouting from '../Categories/Creature/CreaturesRouting';
import MagicItem from '../Categories/MagicItems/MagicItem';
import NationsRouting from '../Categories/Nations/NationsRouting';
import CharacterPage from '../Categories/Characters/CharacterPageWiki';
import CharacterRouting from '../Categories/Characters/CharacterRouting';
import MagicItemsRouting from '../Categories/MagicItems/MagicItemsRouting';
import RumoursRouting from '../Categories/Rumours/RumoursRouting';
import TimelineRouting from '../Categories/Timeline/TimelineRouting';
import ReligionsRouting from '../Categories/Religions/ReligionsRouting';
import ArmouryRouting from '../Categories/Armoury/ArmouryRouting';
import OrgRouting from '../Categories/Organisations/OrgRouting';
import FoundryJSON from '../Categories/Foundry/FoundryJSON';

function RoleplayRoutes() {
    const [roleplaySystem, setRoleplaySystem] = useState<string>('WFRP4e')

    return (
        <Routes>
            <Route path={'/*'} element={
                <>
                    <RoleplayLayout setRoleplaySystem={setRoleplaySystem} />
                </>
            }>
                <Route index element={
                    <div>
                        <p>
                            Hello, Welcome to the Grund Wiki
                        </p>

                        <img src={'src/images/maps/AucediaInlandSea.webp'} style={{width:'100%'}}/>
                    </div>
                } />

                <Route path='creatures/*' element={
                    <CreaturesRouting roleplaySystem={roleplaySystem} />
                } />

                <Route path='armoury/*' element={
                    <ArmouryRouting roleplaySystem={roleplaySystem} />
                } />

                <Route path='magicItems/*' element={
                    <MagicItemsRouting roleplaySystem={roleplaySystem} />
                } />

                <Route path='characters/*' element={
                    <CharacterRouting />
                } />

                <Route path='organisations/*' element={
                    <OrgRouting />
                } />

                <Route path='nations/*' element={
                    <NationsRouting />
                } />

                <Route path='rumours/*' element={
                    <RumoursRouting />
                } />

                <Route path='timeline/*' element={
                    <TimelineRouting />
                } />

                <Route path='religions/*' element={
                    <ReligionsRouting />
                } />

                <Route path='foundry/*' element={
                    <FoundryJSON />
                } />

            </Route>
        </Routes>
    );
}

export default RoleplayRoutes;

