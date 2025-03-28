import React from 'react';
import Path2eItemBlock from './Path2eItemBlock';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material';


interface DnD5eMagicItemBlockProps {
    item: any
}

interface StyledTabProps {
    label: string;
    value: string;
}

const StyledTab = styled((props: StyledTabProps) => (
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

function DnD5eMagicItemVariantsBlock(props: DnD5eMagicItemBlockProps) {
    const [value, setValue] = React.useState(props.item.variants[0].fileName);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
            >
                {props.item.variants.map((variant: any) => <StyledTab label={variant.name} value={variant.fileName} />)}
            </TabList >
            {props.item.variants.map((variant: any) =>
                <TabPanel value={variant.fileName}>
                    <Path2eItemBlock name={props.item.name + ' ' + variant.name} fileName={props.item.fileName + variant.fileName} magicItem={props.item.tags.some((e: any) => e === 'Magic')} />
                </TabPanel>
            )}
        </TabContext>
    );
}

export default DnD5eMagicItemVariantsBlock;