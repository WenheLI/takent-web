import { Box } from "@mui/material";
import React from "react";
import Appbar from "../../Components/Appbar";
import SideBar from "../../Components/Sidebar";
import DashboardComp from "../../Components/Dashboard";
import Uploader from "../../Components/UploadCV";
import Applied from "../../Components/Applied";

export default function Dashboard() {
  const [page, setPage] = React.useState(0);

  const [close, handleClose] = React.useState(true);
  return <>
      <Appbar />
      <Uploader handleClose={handleClose} open={close}/>
      <Box sx={{
            display: 'flex',
            flexDirection: 'row',
      }}>
        <SideBar setPage={setPage} currPage={page} />
        {page === 1 && <DashboardComp handleClose={handleClose} />}
        {page === 2 && <Applied />}
      </Box>
  </>
}