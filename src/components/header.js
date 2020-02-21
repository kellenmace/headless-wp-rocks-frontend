import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import HwpLogo from "./hwpLogo"
import ExternalLinkIcon from "./externalLinkIcon"

const StyledHeader = styled.div`
  padding-top: var(--content-padding);
  .wrap {
    display: flex;
    padding-bottom: var(--content-padding);
    border-bottom: 1px solid var(--color-gray-9);
    > div {
      flex: 1;
    }
  }
  .nav {
    align-self: center;
    text-align: right;
    svg {
      vertical-align: top;
    }
  }
  a {
    text-decoration: none;
    background: none;
    font-weight: 400;
  }
`

function Header() {
  return (
    <StyledHeader className="content-area">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <HwpLogo />
          </Link>
        </div>
        <div className="nav">
          <a href="https://youtube.com/">
            YouTube
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
