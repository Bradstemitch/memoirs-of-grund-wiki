import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function LinkMagicItems(props: any) {
    return (
        <ListItem key='MagicItems' disablePadding sx={{ display: 'block' }}>
            <Link to={'/magicItems'}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <AutoFixHighIcon />
                    </ListItemIcon>
                    <ListItemText primary='Magic Items' sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

export default LinkMagicItems;
