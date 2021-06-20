import React from "react"
import { isMobile } from "react-device-detect"
import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"
import SvgIcon from "../components/SvgIcon"
import Social from "./Social"
import { FluidGrid } from "../layouts/global-styles"

interface Props {}
interface LinkProps {
  href?: string
  target?: string
}


const Wrapper = styled.footer`
  padding: ${rem(12)} 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray};
  text-align: left;

  &:empty {
    display: none;
  }

  @media all and (min-width: 581px) {
    position: relative;
    padding: ${rem(30)} 0;
  }
`

const Disclaimer = styled.div`
  font-size: ${rem(14)};
  line-height: normal;
  opacity: 0.5;
  text-align: center;
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Grid as={FluidGrid} fluid>
        {isMobile && <Social />}
        <Disclaimer>
          I am not affiliated with Shopify. This website is created for fun and it does not store or transmit
          photos, personal information or any other data. This project has been inspired by <a href = "https://cryptolasereyes.com/" target="_blank">Crypto Laser Eyes</a>.
        </Disclaimer>

	  <SocialLink href="https://twitter.com/NeeravMakwana" target="_blank" rel="noreferrer">
	  <SvgIcon iconKey="twitter" />
	  </SocialLink>
      </Grid>
	  </Wrapper>
	
  )
}

const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(5)};
`

export default Footer
