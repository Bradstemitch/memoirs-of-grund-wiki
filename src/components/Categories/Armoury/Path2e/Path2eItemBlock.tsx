import React from 'react';
import { capitalise, cleanFoundryVariables } from '../../../../utils/common';

interface DnD5eMagicItemBlockProps {
    name: string,
    fileName: string
    magicItem?: boolean
}

function Path2eItemBlock(props: any) {
    let item
    let error = false

    try {
        item = require(`../../../../data/${props.magicItem ? 'magicItems' : 'armoury'}/Path2e/fvtt-${props.fileName}.json`);
    } catch (e) {
        error = true
    }
    return (
        <div>
            {!error ?
                <>
                    <div style={{ "color": "black", "padding": "5px" }}>
                        <div style={{ "background": "#522e2c", "color": "#cbc18f", "padding": "5px" }}>
                            <strong> {item.name} </strong>

                            <strong style={{ "float": "right" }}>
                                {item.system.level.value !== 0 && `Item ${item.system.level.value || 0}`}
                            </strong>
                        </div>
                        <div>
                            {item.system.traits.value.length !== 0 &&
                                <div style={{ "background": "beige", "color": "white", "padding": "6px 2px 6px 6px", "margin": "2px 0px 0px 0px", "display": "inline-block" }}>
                                    {item.system.traits.value.map((trait: string) =>
                                        <strong style={{ "background": "brown", "padding": "2px 10px 2px 10px", "marginRight": "4px" }}>
                                            {capitalise(trait)}
                                        </strong>
                                    )}
                                </div>
                            }
                        </div>
                        {item.type === '' && AdventuringGearBlock(item.system)}
                        {item.type === '' && AlchemicalItemBlock(item.system)}
                        {item.type === 'armor' && ArmourBlock(item.system)}
                        {item.type === '' && HeldItemBlock(item.system)}
                        {item.type === '' && RuneBlock(item.system)}
                        {item.type === '' && ShieldBlock(item.system)}
                        {item.type === 'weapon' && WeaponBlock(item.system)}
                        {item.type === '' && WornItemsBlock(item.system)}
                    </div>
                </>
                : <>File Not Found </>
            }
        </div>

    );
}
function AdventuringGearBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> AC Bonus </strong> {system.acBonus};
                <strong> Dex Cap </strong> {system.dexCap};
                <strong> Check Penalty </strong> {system.checkPenalty};
                <strong> Speed Penalty </strong> {system.speedPenalty};
            </div>
            <div>
                <strong> Strength </strong> {system.strength};
                <strong> Bulk </strong> {system.price.value.gp};
                <strong> Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: cleanFoundryVariables(system.description.value) }} />
        </>
    )
}
function AlchemicalItemBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> AC Bonus </strong> {system.acBonus};
                <strong> Dex Cap </strong> {system.dexCap};
                <strong> Check Penalty </strong> {system.checkPenalty};
                <strong> Speed Penalty </strong> {system.speedPenalty};
            </div>
            <div>
                <strong> Strength </strong> {system.strength};
                <strong> Bulk </strong> {system.price.value.gp};
                <strong> Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: cleanFoundryVariables(system.description.value) }} />
        </>
    )
}
function ArmourBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> AC Bonus </strong> {system.acBonus};
                <strong> Dex Cap </strong> {system.dexCap};
                <strong> Check Penalty </strong> {system.checkPenalty};
                <strong> Speed Penalty </strong> {system.speedPenalty};
            </div>
            <div>
                <strong> Strength </strong> {system.strength};
                <strong> Bulk </strong> {system.price.value.gp};
                <strong> Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: cleanFoundryVariables(system.description.value) }} />
        </>
    )
}
function HeldItemBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> AC Bonus </strong> {system.acBonus};
                <strong> Dex Cap </strong> {system.dexCap};
                <strong> Check Penalty </strong> {system.checkPenalty};
                <strong> Speed Penalty </strong> {system.speedPenalty};
            </div>
            <div>
                <strong> Strength </strong> {system.strength};
                <strong> Bulk </strong> {system.price.value.gp};
                <strong> Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: cleanFoundryVariables(system.description.value) }} />
        </>
    )
}
function RuneBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> AC Bonus </strong> {system.acBonus};
                <strong> Dex Cap </strong> {system.dexCap};
                <strong> Check Penalty </strong> {system.checkPenalty};
                <strong> Speed Penalty </strong> {system.speedPenalty};
            </div>
            <div>
                <strong> Strength </strong> {system.strength};
                <strong> Bulk </strong> {system.price.value.gp};
                <strong> Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: cleanFoundryVariables(system.description.value) }} />
        </>
    )
}
function ShieldBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> AC Bonus </strong> {system.acBonus};
                <strong> Dex Cap </strong> {system.dexCap};
                <strong> Check Penalty </strong> {system.checkPenalty};
                <strong> Speed Penalty </strong> {system.speedPenalty};
            </div>
            <div>
                <strong> Strength </strong> {system.strength};
                <strong> Bulk </strong> {system.price.value.gp};
                <strong> Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: cleanFoundryVariables(system.description.value) }} />
        </>
    )
}
function WeaponBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> Damage </strong> {system.damage.dice}{system.damage.die} {system.damage.damageType};
                <strong> Bulk </strong> {system.price.value.gp};
            </div>
            <div>
                <strong> Hands </strong> {system.usage.value === 'held-in-one-hand' ? 1 : 2};
            </div>
            <div>
                <strong> Type </strong> {system.range === null ? 'Melee' : 'Ranged'};
                <strong>  Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            {system.description.value}
        </>
    )
}
function WornItemsBlock(system: any) {
    return (
        <>
            <div>
                <strong> Price </strong> {system.price.value.gp} GP;
                <strong> Damage </strong> {system.damage.dice}{system.damage.die} {system.damage.damageType};
                <strong> Bulk </strong> {system.price.value.gp};
            </div>
            <div>
                <strong> Hands </strong> {system.usage.value === 'held-in-one-hand' ? 1 : 2};
            </div>
            <div>
                <strong> Type </strong> {system.range === null ? 'Melee' : 'Ranged'};
                <strong>  Category </strong> {system.category};
                <strong> Group </strong> {system.group};
            </div>
            <hr />
            {system.description.value}
        </>
    )
}

export default Path2eItemBlock;

