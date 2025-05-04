import { Container, Flex, Form } from "@/src/components/common/styles";
import translations from "@/src/constants/translations.json";
import { PointsAndFAQWrapper, StyledInput } from "./points-and-faq.style";
import { FaqBox } from "@/src/components/common/faq-box";

export const PointsAndFAQ = () => {
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
          <h1 className="title">
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
              />
            </Form>
            <Flex
              direction="row"
              justify="flex-start"
              align="center"
              gap="10px"
            >
              <StyledInput
                disabled
                value={
                  translations.landingPage.calculatePointsBox.amountPlaceholder
                }
                className="small__input__box"
              />
              =
              <StyledInput
                disabled
                value={
                  translations.landingPage.calculatePointsBox.pointsPlaceholder
                }
                className="small__input__box"
              />
              =
              <StyledInput
                disabled
                className="result__input__box"
                value={
                  translations.landingPage.calculatePointsBox.calculateButton
                }
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
            <h1 className="title">{translations.landingPage.faq.title}</h1>
            <Flex className="faqs__wrapper" direction="row" gap="25px">
              {translations.landingPage.faq.faqs.map((faq, idx) => (
                <FaqBox content={faq} key={idx} />
              ))}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </PointsAndFAQWrapper>
  );
};
