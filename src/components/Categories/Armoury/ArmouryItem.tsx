import React from 'react';
import { MagicItemList, magicWeapon } from '../../../data/magicItems/MagicItem';
import { Link } from 'react-router-dom';
import { ArmouryList, ArmouryListMagic } from '../../../data/_ArmouryList';
import DnD5eMagicItemVariantsBlock from '../../_DnD5e/DnD5eMagicItemVariantsBlock';
import DnD5eMagicItemBlock from '../../_DnD5e/DnD5eMagicItemBlock';
import Path2eItemVariants from '../../_Path2e/Path2eItemVariants';
import Path2eItemBlock from '../../_Path2e/Path2eItemBlock';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { StyledTab } from '../../../utils/common';
import { Table, TableRow, TableCell } from '@mui/material';
import { WikiBar, wikiPageHeader } from '../../../utils/wiki';

interface MagicItemProps {
    width: string,
    height: string,
    roleplaySystem: string,
    item: any,
}

function ArmouryItem(props: MagicItemProps) {
    const item = props.item
    const [value, setValue] = React.useState('Summary');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            {WikiBar(item)}

            {wikiPageHeader(item.name + (item.epitath && `, ${item.epitath}`))}

            <TabContext value={value}>
                <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                >
                    <StyledTab label={'Summary'} value={'Summary'} />
                    <StyledTab label={'Foundry'} value={'Foundry'} />
                </TabList >
                <TabPanel value={'Summary'}>
                    {item.summary}
                    {props.roleplaySystem === 'WFRP4e' && item.WFRP4e && item.WFRP4e.system &&
                        <>
                            <div>
                                {item.WFRP4e.system.description && item.WFRP4e.system.description.value}
                            </div>
                            <div>
                                Damage: SL{item.WFRP4e.system.damage && item.WFRP4e.system.damage.value}
                            </div>
                            <div>
                                Encumbrance {item.WFRP4e.system.encumbrance && item.WFRP4e.system.encumbrance.value}
                            </div>
                            {item.WFRP4e.system.gmdescription && item.WFRP4e.system.gmdescription.value}
                        </>
                    }
                    {item.variants ?
                        <TabContext value={value}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                {item.variants.map(variant => {
                                    return (
                                        <StyledTab label={variant} value={variant} />
                                    )
                                })}
                            </TabList >
                            {item.variants.map(variant => {
                                return (
                                    <TabPanel value={variant}>
                                        {variant}
                                    </TabPanel>
                                )
                            })}
                        </TabContext>
                        :
                        <div>

                        </div>
                    }
                </TabPanel>

                <TabPanel value={'Foundry'}>
                    <textarea value={JSON.stringify( item['WFRP4e'] , null, 2)} readOnly cols={120} rows={45} />
                </TabPanel>
            </TabContext>

            Tags: {item.tags &&
                item.tags.map((tag: string) => {
                    return (
                        <>{tag}, </>
                    )
                })
            }



            <div>
                {/* {props.roleplaySystem === 'DnD5e' ?
                    (props.item.variants.length > 1 ?
                        <DnD5eMagicItemVariantsBlock item={props.item} />
                        : <DnD5eMagicItemBlock name={props.item.name} fileName={props.item.fileName} />)
                    : null
                } */}
                {/* {props.roleplaySystem === 'Path2e' ?
                    (props.item.variants.length > 1 ?
                        <Path2eItemVariants item={props.item} />
                        : <Path2eItemBlock name={props.item.name} fileName={props.item.fileName} magicItem={props.item.tags.some((e: any) => e === 'Magic')} />)
                    : null
                } */}
            </div>
            {/* {RelatedMagicItems(props.item, props.roleplaySystem)} */}

        </div >
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
