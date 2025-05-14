import { LogoSVG } from "@/src/assets/svgs";
import { Button, Container, Flex } from "../common/styles";
import { FooterWrapper, StyledInput } from "./footer.styles";
import translations from "@/src/constants/translations.json";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown as ArrowDown } from "react-icons/md";

export const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  const [quickLinksOpen, setQuickLinksOpen] = useState(true);
  const [contactUsOpen, setContactUsOpen] = useState(true);

  return (
    <FooterWrapper direction="row" align="center" justify="center">
      <Container>
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          className="footer__content"
        >
          <Flex
            direction="row"
            align="flex-start"
            justify="space-between"
            className="top__footer__content"
          >
            <Flex
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap="12px"
              className="column__one__footer bridgetune__section"
            >
              <LogoSVG />
              <p className="bridgetune__text">
                {translations.footer.columnOne}
              </p>
            </Flex>
            <Flex className="mobile__menu">
              <div className="footer__item__wrap">
                <div
                  className="top__section"
                  onClick={() => setQuickLinksOpen((prev) => !prev)}
                >
                  <p
                    style={{
                      color: quickLinksOpen ? "#ffcc08" : "",
                    }}
                  >
                    Quick Links
                  </p>
                  <button
                    className="arrown__btn"
                    style={{ background: "#ffcc08" }}
                  >
                    <ArrowDown
                      size={8}
                      style={{
                        transform: quickLinksOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </button>
                </div>
                {quickLinksOpen && (
                  <div className="content__section">
                    {translations.footer.quickLinks.links.map((item, index) => (
                      <Link href={item.link} key={index}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="footer__item__wrap">
                <div
                  className="top__section"
                  onClick={() => setContactUsOpen((prev) => !prev)}
                >
                  <p
                    style={{
                      color: contactUsOpen ? "#ffcc08" : "",
                    }}
                  >
                    Contact Us
                  </p>
                  <button
                    className="arrown__btn"
                    style={{ background: "#ffcc08" }}
                  >
                    <ArrowDown
                      size={8}
                      style={{
                        transform: contactUsOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </button>
                </div>
                {contactUsOpen && (
                  <div className="content__section">
                    {translations.footer.contactUs.links.map((item, index) => (
                      <Link href={item.link} key={index}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Flex>
            <Flex
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap="12px"
              className="column__item__width quick__links"
            >
              <p className="footer__content__title">
                {translations.footer.quickLinks.title}
              </p>
              <ul className="footer__content__list">
                {translations.footer.quickLinks.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </Flex>
            <Flex
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap="12px"
              className="column__item__width contact__us"
            >
              <p className="footer__content__title">
                {translations.footer.contactUs.title}
              </p>
              <ul className="footer__content__list">
                {translations.footer.contactUs.links.map((item, index) => (
                  <li key={index}>
                    {item.link === "#" ? (
                      <p>{item.title}</p>
                    ) : (
                      <Link href={item.link}>{item.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </Flex>
            <Flex
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap="12px"
              className="stay__updated__box"
            >
              <p className="footer__content__title">
                {translations.footer.stayUpdated.title}
              </p>
              <Flex
                width="100%"
                direction="column"
                justify="flex-start"
                align="flex-start"
              >
                <p className="stay__updated__text">
                  {translations.footer.stayUpdated.text}
                </p>
                <StyledInput placeholder="Email" type="email" />
                <div className="stay__updated__btn__wrap">
                  <Button
                    fontSize="0.75rem"
                    padding="0.4rem 1.2rem"
                    borderRadius="4px"
                    margin="0.3rem 0"
                    className="stay__updated__btn"
                  >
                    {translations.footer.stayUpdated.button}
                  </Button>
                </div>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            className="bottom__footer__content"
          >
            <p>© {year} Bridgetune. All rights reserved.</p>
            <Flex
              direction="row"
              align="center"
              justify="flex-start"
              className="bottom__footer__links"
            >
              {translations.footer.bottomLink.map((item, idx) => (
                <Link key={idx} href={item.link}>
                  {item.title}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
