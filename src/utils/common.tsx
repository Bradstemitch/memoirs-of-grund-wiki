export function capitalise(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

export function cleanFoundryVariables(s: string) {
    s = s.replaceAll('@UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize}', 'Demoralize')
    //pf2e.conditionitems.Item.
    s = s.replaceAll('@UUID[Compendium.pf2e.conditionitems.Item.', '')
    s = s.replaceAll('TBSHQspnbcqxsmjL]{Frightened}', 'Frightened')
    s = s.replaceAll('AJh5ex99aV6VTggg]{Off-Guard}', 'Off-Guard')
    s = s.replaceAll('fesd1n5eVhpCSS18]{Sickened 1}', 'Sickened 1')
    s = s.replaceAll('xYTAsEpcJE1Ccni3]{Slowed 1}', 'Slowed 1')
    //pf2e.bestiary-effects.Item
    s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-effects.Item.', '')
    s = s.replaceAll('T9wQ1LvsvPWTefQR]{Effect: Under Command}', '')
    s = s.replaceAll('OxOMYmlPtjsEkRtY]{Effect: Aura of Command}', '')
    s = s.replaceAll('wX9L6fbqVMLP05hn]{Effect: Stench}', '')
    //
    s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.v61oEQaDdcRpaZ9X]{Aura}', 'Aura')
    //
    s = s.replaceAll('@Template[type:emanation|distance:', '')
    s = s.replaceAll('10]{10 feet}', '10ft.')
    s = s.replaceAll('30]{30 feet}', '30ft.')
    //
    s = s.replaceAll('<p>', '')
    s = s.replaceAll('</p>', '')
    s = s.replaceAll('<hr />', ':')
    return s;
}

export function creatureBuilder(name: string, species: string, faction: string, weapon: string, threat: number, rank: string, tags: string[]) {
    const creature = {
        'name': name,
        'species': species,
        'faction': faction,
        'weapon': weapon,
        'threat': threat,
        'rank': rank,
        'fileName': (faction + name + weapon).replace(/\s/g, ""),
        'fileLoc': 'creatures',
        'tags': tags,
    }
    return (
        {
            ...creature,
            "WFRP4e": WFRP4eNPCJSONBuilder(creature)
        }
    )
}


import Tab from '@mui/material/Tab';
import { styled, TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import WFRP4eNPCJSONBuilder from '../data/_WFRP4e/Summary/WFRP4eNPCJSONBuilder';
interface StyledTabProps {
    label: string;
    value: string;
}
export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.7)',
    // '&.Mui-selected': {
    //     color: '#fff',
    // },
    // '&.Mui-focusVisible': {
    //     backgroundColor: 'rgba(100, 95, 228, 0.32)',
    // },
}));

export function internalLink(text: string, reference: any) {
    return <Link to={`/${reference.fileLoc}/${reference.fileName}`} >{text}</Link>
}

function InfoRowChar(RowType: string, data: any) {
    let content
    if (Array.isArray(data)) {
        content = data.map((i: any) => {
            const name = i.name ?
                i.name
                : i.detail ?
                    i.data.name
                    : i
            const processedName = i.data && i.data.fileLoc === "characters" ?
                `${name.byNameBef || ''} ${name.fore || ''} ${name.sur || ''} ${name.byNameAft || ''}`
                : name
            const fileName = i.fileName ?
                i.fileName
                : i.data && i.data.fileName ?
                    i.data.fileName
                    : null
            const fileLoc = i.fileLoc ?
                i.fileLoc
                : i.data && i.data.fileLoc ?
                    i.data.fileLoc
                    : null
            return (
                <div>
                    {fileName ?
                        <Link
                            key={fileName + '-characterPage-Link'}
                            to={`/${fileLoc}/${fileName}`}
                        >
                            {`${processedName}`}
                        </Link>
                        :
                        <>{processedName}</>
                    }
                    {i.detail &&
                        <> {` (${i.detail})`}</>
                    }
                </div>
            )
        })
    } else {
        content = data
    }
    return (
        <tr>
            <td style={{
                'width': '100px',
                'textAlign': 'right',
                'paddingRight': '5px',
            }}>
                <div style={{
                    'textAlign': 'right',
                    'padding': '2px',
                }}>
                    <strong> {RowType} </strong>
                </div>
            </td>

            <td style={{ 'padding': '2px', }}>
                {content}
            </td>
        </tr>
    )
}


