import { Box, Card, Typography } from "@mui/material";
import React from "react";
import JobItem from "../JobItem";


export default function Applied() {
    return <Card sx={{
        width: '80%',
        height: '90vh',
        margin: 'auto'
    }}>
        <Box sx={{
            marginLeft: '60px',
            marginTop: '42px'
        }}>
            <Typography sx={{
            fontFamily: "SF Pro Display",
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "40px",
            }}> Applied Jobs </Typography>
        </Box>
        <Box sx={{
            paddingLeft: '60px',
            paddingRight: '60px',
            marginTop: '42px',
        }}>
            <JobItem />
        </Box>
    </Card>
}
