import React from 'react';

function WFRP4eArmourBlock(props: any) {
    return (
        <table>
            <tbody>
                <tr>
                    <td />
                    {ArmourBlock(props.armour.head, props.armour.headFlex, props.toughnessBonus, "Head")}
                    <td />
                </tr>
                <tr>
                    {ArmourBlock(props.armour.lArm, props.armour.lArmFlex, props.toughnessBonus, "Left Arm")}
                    {ArmourBlock(props.armour.body, props.armour.bodyFlex, props.toughnessBonus, "Body")}
                    {ArmourBlock(props.armour.rArm, props.armour.rArmFlex, props.toughnessBonus, "Right Arm")}
                </tr>
                <tr>
                    {ArmourBlock(props.armour.lLeg, props.armour.lLegFlex, props.toughnessBonus, "Left Leg")}
                    <td />
                    {ArmourBlock(props.armour.rLeg, props.armour.rLegFlex, props.toughnessBonus, "Right Leg")}
                </tr>
            </tbody>
        </table>
    );
}

function ArmourBlock(armour: any, armourFlexible: any, toughnessBonus: any, location: string) {
    return (
        <td style={{ "width": "100px", "height": "60px", "paddingBottom": "10px", "border": "1px black solid", "textAlign": "center" }}>
            <div style={{ "paddingBottom": "10px" }}>
                <strong>
                    {location}
                </strong>
            </div>
            <span style={{ "backgroundColor": "LightGreen", "borderRadius": "50%", "padding": "2px 9px" }}>
                {(armour + armourFlexible)}
            </span>
            {" "}
            <span style={{ "backgroundColor": "LightGrey", "borderRadius": "50%", "padding": "2px 9px" }}>
                {"0"}
            </span>
            {" "}
            <span style={{ "backgroundColor": "Orange", "borderRadius": "50%", "padding": "2px 9px" }}>
                {toughnessBonus}
            </span>
        </td>
    )
}

export default WFRP4eArmourBlock;
