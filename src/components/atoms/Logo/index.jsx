import { Box, Hidden, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LogoWrapper = styled(Link)(
    ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`,
);

const LogoSignWrapper = styled(Box)(
    () => `
        height: 38px;
        margin-top: 4px;
        transform: scale(.8);
`,
);

const VersionBadge = styled(Box)(
    ({ theme }) => `
        background: ${theme.palette.success.main};
        color: ${theme.palette.success.contrastText};
        padding: ${theme.spacing(0.4, 1)};
        border-radius: ${theme.general.borderRadiusSm};
        text-align: center;
        display: table;
        line-height: 1;
        font-size: ${theme.typography.pxToRem(11)};
`,
);

const LogoImage = styled('img')(
    ({ theme }) => `
        height: ${theme.typography.pxToRem(30)};
`,
);

const Logo = () => {
    return (
        <LogoWrapper to="/">
            <LogoSignWrapper>
                <LogoImage src="/static/logos/gethired_logo.svg" alt="logo" />
                <Hidden smDown>
                    <Tooltip title="Version 1.1.0" arrow placement="right">
                        <VersionBadge>1.1.0</VersionBadge>
                    </Tooltip>
                </Hidden>
            </LogoSignWrapper>
        </LogoWrapper>
    );
};

export default Logo;
