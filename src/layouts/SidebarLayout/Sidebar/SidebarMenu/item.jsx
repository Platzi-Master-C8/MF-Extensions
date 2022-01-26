/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { useState, useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, Badge, Collapse, ListItem } from '@mui/material';

import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { SidebarContext } from '../../../../contexts/SidebarContext';

const SidebarMenuItem = ({ children, link, icon: Icon, badge, open: openParent, active, name, ...rest }) => {
    const [menuToggle, setMenuToggle] = useState(openParent);

    const { toggleSidebar } = useContext(SidebarContext);

    const toggleMenu = () => {
        setMenuToggle((Open) => !Open);
    };

    if (children) {
        return (
            <ListItem component="div" className="Mui-children" key={name} {...rest}>
                <Button
                    className={clsx({ 'Mui-active': menuToggle })}
                    startIcon={Icon && <Icon />}
                    endIcon={menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    onClick={toggleMenu}
                >
                    {name}
                </Button>
                <Collapse in={menuToggle}>{children}</Collapse>
            </ListItem>
        );
    }

    return (
        <ListItem component="div" key={name} {...rest}>
            <Button
                activeclassname="Mui-active"
                component={RouterLink}
                onClick={toggleSidebar}
                to={link}
                startIcon={Icon && <Icon />}
            >
                {name}
                {badge && <Badge badgeContent={badge} />}
            </Button>
        </ListItem>
    );
};

SidebarMenuItem.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    link: PropTypes.string,
    icon: PropTypes.elementType,
    badge: PropTypes.string,
    open: PropTypes.bool,
    name: PropTypes.string.isRequired,
};

SidebarMenuItem.defaultProps = {
    open: false,
    active: false,
};

export default SidebarMenuItem;
