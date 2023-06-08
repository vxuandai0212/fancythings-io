import Link from 'next/link'
import { NAV_ITEMS } from 'utils/constant'
import { Search } from 'components/icons'
import styled from 'styled-components'
import { useState } from 'react'
import Hamburger from 'components/icons/hamburger'
import { Grid } from '@mui/material'

const NavContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 70px;
  li {
    display: inline-block;
    line-height: 40px;
    margin-right: 30px;
    a {
      &:active,
      &:hover {
        color: #8a7783;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const Logo = styled.div`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 24px;
  color: #515151;
  float: left;
  line-height: 40px;
  cursor: pointer;
  text-transform: uppercase;
`
const NavItemContainer = styled.div`
  height: 40px;
  margin: 0;
  float: left;
  padding: 0;
  margin-left: 70px;
  li {
    display: inline-block;
    line-height: 40px;
    margin-right: 30px;
    a {
      &:active,
      &:hover {
        color: #8a7783;
      }
    }
  }
`
const NavItem = styled.a`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  color: #515151;
  cursor: pointer;
`

const MobileNavDropdown = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background: #e6e7d9;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 30px;
  right: 15px;
  top: 45px;
  z-index: 1;
`
const MobileNavItem = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #515151;
`
const MobileHeader = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
    margin-top: 10px;
  }
`

const Nav = () => {
  const [visibleMobileNav, setVisibleMobileNav] = useState(false)

  const navItems = NAV_ITEMS.map((item) => (
    <li key={item.NAME}>
      <Link href={item.PATH}>
        <NavItem>{item.NAME}</NavItem>
      </Link>
    </li>
  ))
  const renderMobileNavItem = NAV_ITEMS.map((item) => (
    <Link key={item.NAME} href={item.PATH}>
      <MobileNavItem>{item.NAME}</MobileNavItem>
    </Link>
  ))
  return (
    <div>
      <NavContainer>
        <Logo>
          <Link href='/'>FANCY THINGS</Link>
        </Logo>
        <NavItemContainer>{navItems}</NavItemContainer>
      </NavContainer>
      <MobileHeader>
        <Grid
          justifyContent={'space-between'}
          alignItems={'center'}
          paddingLeft={'15px'}
          paddingRight={'15px'}
          container
          item
          xs={12}
        >
          <Link href='/'>
            <Logo>fancy things</Logo>
          </Link>
          <div onClick={() => setVisibleMobileNav(!visibleMobileNav)}>
            <Hamburger color={'#515151'} />
          </div>
          <MobileNavDropdown visible={visibleMobileNav}>{renderMobileNavItem}</MobileNavDropdown>
        </Grid>
      </MobileHeader>
    </div>
  )
}

export default Nav
