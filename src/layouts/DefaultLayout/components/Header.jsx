import * as React from "react";
import { Link, NavLink } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import NavbarItem from "./NavbarItem";

const Wrapper = styled(Box)({
    flexGrow: 1,
});

const Logo = styled(Typography)({
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
});

export default function ButtonAppBar() {
    return (
        <Wrapper>
            <AppBar position="static">
                <Toolbar>
                    <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
                        <Link>
                            <Logo variant="h4" noWrap sx={{}}>
                                LOGO
                            </Logo>
                        </Link>
                        <NavbarItem to="/" name="Home" />
                        <NavbarItem to="/album" name="Album" />
                    </Stack>
                    <NavLink to="/login">Login</NavLink>
                </Toolbar>
            </AppBar>
        </Wrapper>
    );
}
