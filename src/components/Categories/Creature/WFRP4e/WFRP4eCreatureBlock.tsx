import React from 'react';
import WFRP4eAttributeTable from './WFRP4eAttributeTable';
import WFRP4eSkillList from './WFRP4eSkillList';
import WFRP4eArmourBlock from './WFRP4eArmourBlock';

function WHF4eCreatureBlock(props: any) {
    const creature = props.creature
 
    let armour = {
        head: 0,
        headFlex: 0,
        body: 0,
        bodyFlex: 0,
        lArm: 0,
        lArmFlex: 0,
        rArm: 0,
        rArmFlex: 0,
        lLeg: 0,
        lLegFlex: 0,
        rLeg: 0,
        rLegFlex: 0,
    }

    return (
        <div>
            <strong>
                {creature.name}
            </strong>
            <WFRP4eAttributeTable
                move={creature.system.details.move.value}
                characteristics={creature.system.characteristics}
                wounds={creature.system.status.wounds.max}
            />
            <br />
            <WFRP4eSkillList
                skills={creature.items.filter((item: any) => item.type === "skill")}
                creatureName={creature.name}
                characteristics={creature.system.characteristics}
            />

            <div>
                <strong>Weapons </strong>
                {creature.items.filter((item: any) => item.type === "weapon").map((weapon: any) => {
                    return (
                        <span key={weapon.name + '-WFRP4eCreatureBlock-' + creature.name + '-span'}>
                            {weapon.name}
                            {', '}
                        </span>
                    )
                })}
            </div>

            <div>
                <strong>Armour </strong>
                {creature.items.filter((item: any) => item.type === "armour").map((armourPiece: any) => {
                    if (armourPiece.system.qualities.value.some((quality: any) => quality.name === "flexible")) {
                        if (armour.headFlex < armourPiece.system.AP.head) armour.headFlex = armourPiece.system.AP.head
                        if (armour.bodyFlex < armourPiece.system.AP.body) armour.bodyFlex = armourPiece.system.AP.body
                        if (armour.lArmFlex < armourPiece.system.AP.lArm) armour.lArmFlex = armourPiece.system.AP.lArm
                        if (armour.rArmFlex < armourPiece.system.AP.rArm) armour.rArmFlex = armourPiece.system.AP.rArm
                        if (armour.lLegFlex < armourPiece.system.AP.lLeg) armour.lLegFlex = armourPiece.system.AP.lLeg
                        if (armour.rLegFlex < armourPiece.system.AP.rLeg) armour.rLegFlex = armourPiece.system.AP.rLeg
                    } else {
                        if (armour.head < armourPiece.system.AP.head) armour.head = armourPiece.system.AP.head
                        if (armour.body < armourPiece.system.AP.body) armour.body = armourPiece.system.AP.body
                        if (armour.lArm < armourPiece.system.AP.lArm) armour.lArm = armourPiece.system.AP.lArm
                        if (armour.rArm < armourPiece.system.AP.rArm) armour.rArm = armourPiece.system.AP.rArm
                        if (armour.lLeg < armourPiece.system.AP.lLeg) armour.lLeg = armourPiece.system.AP.lLeg
                        if (armour.rLeg < armourPiece.system.AP.rLeg) armour.rLeg = armourPiece.system.AP.rLeg
                    }
                    return (
                        <span key={armourPiece.name + '-WFRP4eCreatureBlock-' + creature.name + '-span'}>
                            {armourPiece.name}
                            {', '}
                        </span>
                    )
                })}
            </div>
            <br />
            <WFRP4eArmourBlock armour={armour} toughnessBonus={Math.floor(creature.system.characteristics.t.initial / 10)}/>            
        </div>
    );
}

export default WHF4eCreatureBlock;
