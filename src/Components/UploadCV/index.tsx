import { Button, Card, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { FileUploader } from "react-drag-drop-files";

type SideBarProps = {
    open: boolean,
    handleClose: React.Dispatch<React.SetStateAction<boolean>>,
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '680px',
  height: '300px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '24px',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

const btnStyle = {
    width: '120px',
    height: '40px',
    borderRadius: '16px',
    marginLeft: '12px',
};

function childDropZone() {
    return <Box sx={{
        paddingLeft: '40px',
        paddingRight: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '156px',
        color: '#DDD',
        cursor: 'pointer',
        marginTop: '43px',
        backgroundColor: '#F3F2F6',
    }}>
        <Typography>Please select or drag and drop jpg, png, pdf or word. Max 15M</Typography>
    </Box>
}

export default function Uploader({open, handleClose}: SideBarProps) {
    const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
        setFile(file);
    };
    return <Modal
        open={open}
        onClose={() => handleClose(false)}
    >
        <Card sx={style}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Typography variant="h6">Upload CV</Typography>
                <CloseIcon sx={{
                    cursor: 'pointer',
                }} onClick={() => handleClose(false)}></CloseIcon>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
            }}>
                <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    children={childDropZone()}
                />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignSelf: 'flex-end',
                justifySelf: 'flex-end',
            }}>
                <Button sx={btnStyle} onClick={() => handleClose(false)} variant="contained">Cancel</Button>
                <Button sx={btnStyle} variant="contained" color="secondary">Upload</Button>
            </Box>
        </Card>
    </Modal>

}