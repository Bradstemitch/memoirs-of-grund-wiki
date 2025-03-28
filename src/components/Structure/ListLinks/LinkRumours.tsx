import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ForumIcon from '@mui/icons-material/Forum';

function LinkRumours(props: any) {
    return (
        <ListItem key='Rumours' disablePadding sx={{ display: 'block' }}>
            <Link to={'/rumours'}>
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
                        <ForumIcon />
                    </ListItemIcon>
                    <ListItemText primary='Rumours' sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

export default LinkRumours;
