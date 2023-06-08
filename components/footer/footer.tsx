import { FooterContainer, Copyright } from 'components/footer/footer-style'
import { useEffect, useRef, useState } from 'react'
import { Grid } from '@mui/material'

const Footer = () => {
  return <FooterContainer>
    <Grid container alignItems={'center'} justifyContent={'center'}>
      <Copyright>© fancythings.io 2022</Copyright>
    </Grid>
  </FooterContainer>
}

export default Footer