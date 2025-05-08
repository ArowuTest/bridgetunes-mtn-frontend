import { Button, Container, Flex, Form } from "@/src/components/common/styles";
import translations from "@/src/constants/translations.json";
import { PointsAndFAQWrapper, StyledInput } from "./points-and-faq.style";
import { FaqBox } from "@/src/components/common/faq-box";
import { useState } from "react";
import { useRouter } from "next/router";

export const PointsAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [rechargedAmount, setRechargedAmount] = useState("");
  const { push } = useRouter();

  const numericRecharge = parseInt(rechargedAmount) || 0;

  // Display the amount with ₦ prefix if a valid number exists,
  // otherwise fallback on the translation placeholder.
  const displayAmount = rechargedAmount
    ? `₦${numericRecharge}`
    : translations.landingPage.calculatePointsBox.amountPlaceholder;

  // Calculate points: every 100 naira provides 1 point, with a max of 10
  const calculatedPoints =
    rechargedAmount && !isNaN(numericRecharge)
      ? Math.min(Math.floor(numericRecharge / 100)).toString() + " points"
      : translations.landingPage.calculatePointsBox.pointsPlaceholder;

  // Calculate number of times entered in draw
  const calculatedNumOfTimeEnteredInDraw =
    rechargedAmount && !isNaN(numericRecharge)
      ? "Number entered " +
        Math.min(Math.floor(numericRecharge / 100)).toString() +
        "x in draw"
      : translations.landingPage.calculatePointsBox.pointsPlaceholder;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent disallowed characters including "e", "+", and "-"
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <PointsAndFAQWrapper>
      <Flex
        className="calculate__winners__point"
        justify="center"
        direction="row"
        align="center"
        background="#000"
      >
        <Flex
          direction="column"
          background="linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%)"
          backgroundColor="linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%)"
          backgroundPattern={"/images/landing-page/bg-pattern.png"}
          hasCustomBG={true}
          justify="center"
          align="center"
          className="calculate__winners__content"
          gap="35px"
        >
          <h1 className="global-title">
            {translations.landingPage.calculatePointsBox.title}
          </h1>
          <Flex
            justify="center"
            direction="column"
            align="center"
            gap="17px"
            className="form__input__wrapper"
          >
            <p className="description">
              {translations.landingPage.calculatePointsBox.desc}
            </p>
            <Form>
              <StyledInput
                placeholder={
                  translations.landingPage.calculatePointsBox.inputPlaceholder
                }
                value={rechargedAmount}
                type="number"
                onChange={(e) => setRechargedAmount(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form>
            <Flex
              direction="row"
              justify="flex-start"
              align="center"
              gap="10px"
              className="results__wrapper"
            >
              <StyledInput
                disabled
                value={displayAmount}
                className="small__input__box"
              />
              <span>=</span>
              <StyledInput
                disabled
                value={calculatedPoints}
                className="small__input__box"
              />
              <span>=</span>
              <StyledInput
                disabled
                className="result__input__box"
                value={calculatedNumOfTimeEnteredInDraw}
              />
            </Flex>
            <p className="tips__text">
              {translations.landingPage.calculatePointsBox.pointsTip}
            </p>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="faq__wrapper" justify="center">
        <Container>
          <Flex className="faq__content__wrapper" direction="column" gap="25px">
            <h1 className="global-title">
              {translations.landingPage.faq.title}
            </h1>
            <Flex className="faqs__boxes__wrapper">
              {translations.landingPage.faq.faqs.map((faq, idx) => (
                <FaqBox
                  content={faq}
                  key={idx}
                  className="faq-item-wrapper"
                  isOpen={openFaq === idx}
                  onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Flex
        direction="row"
        justify="center"
        align="center"
        className="start__winning__box"
        backgroundPattern={"/images/landing-page/bg-pattern.png"}
        hasCustomBG
      >
        <Container>
          <Flex
            direction="row"
            justify="center"
            align="center"
            padding="10px 0"
            gap="20px"
            className="start__winning__box__content"
          >
            <div className="image__wrapper">
              <img src="/images/landing-page/MoneyMan.png" alt="win big" />
            </div>
            <div className="content__wrap">
              <h1 className="global-title">
                Don't Miss Your Chance to Become a Millionaire!
              </h1>
              <p className="sub__text">
                Join thousands of MTN customers who have already won big in
                MyNumba Don Win
              </p>
              <p className="sub__text__2">
                It takes just seconds to opt in, and you could be our next big
                winner!
              </p>
              <Button
                padding="0.5rem 3rem"
                fontSize="0.8rem"
                onClick={() => push("/opt-in-experience")}
              >
                {translations.landingPage.faq.buttonText}
              </Button>
            </div>
          </Flex>
        </Container>
      </Flex>
    </PointsAndFAQWrapper>
  );
};
