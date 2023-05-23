import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography sx={{ color: 'white' }}>New app</Typography>

                <Button variant='contained' color='secondary'>login</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar