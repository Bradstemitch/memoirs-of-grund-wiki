import React from 'react';
import { MagicItemList, magicWeapon } from '../../../data/magicItems/MagicItem';
import { Link } from 'react-router-dom';
import { ArmouryList, ArmouryListMagic } from '../../../data/armoury/_ArmouryList';
import DnD5eMagicItemVariantsBlock from '../../_DnD5e/DnD5eMagicItemVariantsBlock';
import DnD5eMagicItemBlock from '../../_DnD5e/DnD5eMagicItemBlock';
import Path2eItemVariants from '../../_Path2e/Path2eItemVariants';
import Path2eItemBlock from '../../_Path2e/Path2eItemBlock';

interface MagicItemProps {
    width: string,
    height: string,
    roleplaySystem: string,
    item: any,
}

function ArmouryItem(props: MagicItemProps) {
    return (
        <div style={{
            'width': props.width,
            'height': props.width,
        }}>
            <div>
                {props.roleplaySystem === 'DnD5e' ?
                    (props.item.variants.length > 1 ?
                        <DnD5eMagicItemVariantsBlock item={props.item} />
                        : <DnD5eMagicItemBlock name={props.item.name} fileName={props.item.fileName} />)
                    : null
                }
                {props.roleplaySystem === 'Path2e' ?
                    (props.item.variants.length > 1 ?
                        <Path2eItemVariants item={props.item} />
                        : <Path2eItemBlock name={props.item.name} fileName={props.item.fileName} magicItem={props.item.tags.some((e: any) => e === 'Magic')} />)
                    : null
                }
            </div>
            {RelatedMagicItems(props.item, props.roleplaySystem)}

        </div>
    );
}

function RelatedMagicItems(item: any, roleplaySystem: string) {
    return (
        <>
            <br />
            <div>
                Magic {item.type[roleplaySystem]}
            </div>
            {
                ArmouryListMagic.filter(i => i.baseItem!.some(e => e === item.fileName)).map(item => {
                    return (
                        <Link
                            key={item.fileName + '-magicItemPage-Link'}
                            to={`/magicItems/${item.fileName}`}
                        >
                            {item.name}
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ArmouryItem;
