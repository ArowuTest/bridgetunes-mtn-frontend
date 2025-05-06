import { LogoSVG } from "@/src/assets/svgs";
import { Button, Container, Flex } from "../common/styles";
import { FooterWrapper, StyledInput } from "./footer.styles";
import translations from "@/src/constants/translations.json";
import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
  const [year] = useState(new Date().getFullYear());
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
              className="column__one__footer"
            >
              <LogoSVG />
              <p>{translations.footer.columnOne}</p>
            </Flex>
            <Flex
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap="12px"
              className="column__item__width"
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
              className="column__item__width"
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
              <Flex direction="column" justify="flex-start" align="flex-start">
                <p className="stay__updated__text">
                  {translations.footer.stayUpdated.text}
                </p>
                <StyledInput placeholder="Email" type="email" />
                <Button
                  fontSize="0.75rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="4px"
                  margin="0.3rem 0"
                >
                  {translations.footer.stayUpdated.button}
                </Button>
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
