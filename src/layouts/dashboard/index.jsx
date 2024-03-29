import { Box,Divider,IconButton,Stack ,Avatar,Switch } from '@mui/material'
import { useTheme,styled } from '@mui/material/styles';
import {Gear} from 'phosphor-react'
import React, { Component, useState } from 'react'
import {Outlet} from 'react-router-dom'
import {faker} from "@faker-js/faker"


import Logo from "../../assets/images/logo.ico"
import useSettings from "../../hooks/useSettings"

import { Nav_Buttons} from "../../data/index"

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


export default function index  (){
    
        const theme = useTheme();    
        const [selected,setSelected]=useState(0);

        const {onToggleMode} = useSettings();
        console.log({onToggleMode});

    return (
    <>
        <Box 
          sx={{ backgroundColor: theme.palette.background.paper ,
                boxShadow:"0px 0px 2px rgba( 0, 0, 0, 0.25)", 
                height:"100vh", 
                width:100,
              }}  
              >
          
          <Stack 
            direction="column" 
            alignItems={"center"}
            justifyContent={"space-between"} 
            // sx={{height:"100%"}} 
            sx={{ maxHeight: "100%" }} 
            spacing={3} 
            py={2}
          >
            <Stack alignItems={"center"} spacing={4}>

            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height:48,
              width:48,
              borderRadius: 1.5,
              p:0.5,
            }}
            >

              <img src={Logo} style={{maxWidth:"100%", height:"auto"}} alt='Chat App Logo'/> 
            </Box>
            <Stack sx={{width:"max-content" }} direction="column" alignItems="center" spacing={3}>

            {Nav_Buttons.map((e)=>(
              e.index===selected?
              <Box sx={{backgroundColor:theme.palette.primary.main,borderRadius:1.5}}>
                <IconButton 
                  key={e.index} 
                  sx={{ width:"max-content",color:"#fff"}} >
                  {e.icon}
                </IconButton> 
              </Box>
              :
              <IconButton 
              onClick={()=>{
                setSelected(e.index)
              }}
              key={e.index} sx={{ width:"max-content",color:theme.palette.mode==="light"?"#000":theme.palette.text.primary}} >
                  {e.icon}
                </IconButton>
              ))}
            </Stack>
            <Divider  sx={{ height:2, width:48 }} variant="middle" />
            {selected===3?
            <Box sx={{backgroundColor:theme.palette.primary.main,borderRadius:1.5}}>
                <IconButton  
                  sx={{ width:"max-content",color:"#fff"}} >
                 <Gear />
                </IconButton> 
              </Box>
              :
              <IconButton onClick={()=>{
                setSelected(3)
              }}
              sx={{ width:"max-content",color:theme.palette.mode==="light"?"#000":theme.palette.text.primary}}

              >
              <Gear />
            </IconButton>
            }
            </Stack>

            <Stack 
              spacing={4} 
              >
              <AntSwitch onClick={()=>{
                onToggleMode();
              }}/>
              <Avatar src={faker.image.avatar()} />
            </Stack>

          </Stack>
        </Box>
        <Outlet />
      </>
    )
  }

