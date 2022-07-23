import * as React from 'react';
import {Typography, InputAdornment, IconButton,  FormControl, RadioGroup} from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { fontSize } from '@mui/system';
import { useEffect,  useState } from "react"

export default function SignUp() {
  
  const [role, setRole] = React.useState("applicant");
  const [checked, setChecked] = React.useState(false);
  const [next, setNext] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [userid, setUserid] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('passwd') === "" || data.get('passwd') !== data.get('confirmPwd')){
      setHelperText("Passwords do not match or are empty");
      return
    }else if(data.get('username')===""){
      setHelperText("The user name is invalid");
      return
    }else{
      setHelperText("");
    }
     //const param = new FormData(event.currentTarget);
     var url;
     if(role === "applicant"){
       url = 'http://ec2-52-14-66-91.us-east-2.compute.amazonaws.com:8888/signupApp'
     }else{
       url = 'http://ec2-52-14-66-91.us-east-2.compute.amazonaws.com:8888/signupRec'
     }
     data.set('userid',userid)
     try {
       fetch(url, {
         method: "POST",
         body: data
       }).then(res => res.json())
       .then(
         (result) => {
           if(result.res === 0){
            setHelperText("");
            sessionStorage.setItem("token", result.token);
            sessionStorage.setItem("userid", userid);
            window.location.href="#"
           }else{
            setHelperText(result.msg);
             
           }
         }
         
       )
     } catch (error) {
       console.log(error);
     }
   
      
    
  };

  const handleNextChange = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setUserid(event.currentTarget.userid.value)
    setCode(event.currentTarget.password.value)
    if(userid === ""){
      setHelperText("The user ID is invalid");
      return
    }
    setNext(!next)
   
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };
  
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  


  
  
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
       
      
          <Box mt={5} ml={6}>
          <Button variant="text" onClick={!next ? () => {
              window.location.href="#"
            } : ()=>{setNext(!next); setHelperText("");}} startIcon={<ArrowBackIosIcon />} color="inherit" sx = {{fontSize: "medium", alignItems: "center"}}>
            返回
          </Button>
        
          </Box>    
          
          <Box
            sx={{
              my: 8,
              mx: 10,
              ml: 30,
              display: 'flex',
              
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
           >
            
            <Typography component="h1" sx={{fontWeight: "2000px", fontStyle: "Semibold", fontSize: "40px", lineHeight: "48px"}} >
              {!next ? '手机号注册' : '完成昵称及密码设置'}
            </Typography>
            <Box mt={10} alignItems={'center'}>
              <FormControl>
              
                <RadioGroup
                  row
                  aria-labelledby="role-select-group"
                  name="role-select"
                  value={role}
                  onChange={handleRoleChange} 
                  
                > 
              
                  <FormControlLabel  value="applicant" control={<Radio color="secondary" />} label={<Typography fontSize={17} > 我是求职者 </Typography>} />
                  <Box ml={10}>
                      <FormControlLabel value="recruiter" control={<Radio color="secondary" />} label={<Typography fontSize={17}> 我是 HR </Typography>} />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>


              {!next && 
              <>
              <Box component="form" noValidate onSubmit={handleNextChange} sx={{ my: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userid"
                label="手机号"
                name="userid"
                color="secondary" 
                autoFocus
                sx={{my:3}}
               
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="验证码"
                color="secondary" 
                type="password"
                id="password"
                sx={{my:2}}
                InputProps={{
                  endAdornment:  <InputAdornment position="end">
                  <Button variant="outlined" color = {'inherit'} sx={{color: "#AAAAAA"}}>获取验证码</Button>
                </InputAdornment>
                }}
            
              />
              <FormHelperText>{helperText}</FormHelperText>
              <Grid sx={{mt:10}}>
               
                <FormControlLabel
                control={<Checkbox value="agree" checked={checked} onChange={handleCheckChange} color="default" />}
                label = {<Typography>注册即同意 <Link href="#" underline="hover" color="secondary">{"《用户协议》"}</Link> 和 <Link href="#" underline="hover" color="secondary">{"《隐私政策》"}</Link></Typography>}/> 
              
              </Grid>
              
              
              {checked && <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                下一步
              </Button>}

              {!checked && <Button
                type="submit"
                fullWidth
                disabled
                
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                下一步
              </Button>}
              </Box>
            </>}

            { next && 
            <>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 3 }}>
               <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="用户昵称"
                name="username"
                color="secondary" 
                autoFocus
                sx={{my:3}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="passwd"
                label="密码设置"
                name="passwd"
                color="secondary" 
               
                sx={{my:3}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirmPwd"
                label="确认密码"
                name="confirmPwd"
                color="secondary" 
            
                sx={{my:3}}
              />
              <FormHelperText>{helperText}</FormHelperText>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                完成注册
              </Button>
              </Box>
            </>

            }
             
            
          </Box>
        </Grid>


        
        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          sx={{
            backgroundImage: 'url("./moon.png")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
            backgroundSize: 'auto',
            backgroundPosition: 'right',
            
          }}/>
            
     
      </Grid>
  );
}
