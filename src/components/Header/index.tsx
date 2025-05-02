import React, { useState, useEffect } from "react"
import { HeaderContainer } from "./styles"
import { LogoSVG } from "@/src/assets/svgs/index"
import path from "path"
import Link from "next/link"
import { Button, Container } from "../common/styles"
import { useAuth } from "@/src/contexts/AuthContext"
import { useRouter } from "next/router"

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const { push } = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/opt-in-experience",
      label: "Opt-in Experience",
    },
    {
      path: "/draw-calendar",
      label: "Draw Calendar",
    },
    {
      path: "/prizes",
      label: "Prizes",
    },
    {
      path: "/winners",
      label: "Winners",
    },
    {
      path: "/livestream",
      label: "Livestream",
    },
  ]

  return (
    <HeaderContainer>
      <Container>
        <div className="header__wrapper">
          <LogoSVG />
          <nav className="nav__link__wrapper">
            {links.map(link => (
              <Link key={link.path} href={link.path} className="link">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="cta__wrapper">
            {isAuthenticated ? (
              <Button>Dashboard</Button>
            ) : (
              <Button
                color="#0056B3"
                backgroundColor="transparent"
                border="1px solid #2C73DB"
                onClick={() => push("/login")}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default Header
