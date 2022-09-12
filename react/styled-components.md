import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  width: ${(props) => (props.fluid ? "100%" : "auto")};
  max-width: ${(props) => (props.fluid ? "1440px" : "auto")};
  padding-left: ${(props) => (props.fluid ? "20px" : "15px")};
  padding-right: ${(props) => (props.fluid ? "20px" : "15px")};

  @media (min-width: 576px) {
    padding-left: ${(props) => (props.fluid ? "32px" : "15px")};
    padding-right: ${(props) => (props.fluid ? "32px" : "15px")};
  }

  @media (min-width: 768px) {
    width: ${(props) => (props.fluid ? "100%" : "750px")};
  }

  @media (min-width: 992px) {
    width: ${(props) => (props.fluid ? "100%" : "970px")};
    padding-left: ${(props) => (props.fluid ? "48px" : "15px")};
    padding-right: ${(props) => (props.fluid ? "48px" : "15px")};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-shrink: ${(props) => (props.shrink == 0 ? 0 : props.shrink || 1)};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;


import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  getColor,
  getSpace,
  responsive,
} from "@components/creator_ui/theme/utils";
import { grayLight } from "@components/creator_ui/theme/colors";

const Section = styled.section`
  position: relative;
  background-color: ${getColor("background")};
  ${({ withBorderBottom }) =>
    withBorderBottom &&
    css`
      border-bottom: 1px solid ${grayLight};
    `};
  ${({ isHeader }) =>
    !isHeader &&
    css`
      overflow: hidden;
    `};
`;

const backgroundOpacity = ({ opacity }) =>
  opacity !== 100
    ? css`
        opacity: ${parseFloat(opacity) / 100};
      `
    : "";

const backgroundFilters = ({ blur, grayscale, contrast }) => {
  const filters = [
    blur !== 0 && `blur(${blur}px)`,
    grayscale !== 0 && `grayscale(${grayscale}%)`,
    contrast !== 0 && `contrast(${contrast}%)`,
  ].filter(Boolean);

  if (filters.length === 0) {
    return "";
  }

  return css`
    filter: ${filters.join(" ")};
    ${blur !== 0 && `transform: scale(${blur / 50 + 1})`};
  `;
};

const backgroundBlendMode = ({ blend }) =>
  blend
    ? css`
        mix-blend-mode: ${blend};
      `
    : "";

const Background = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background-image: url(${({ url }) => url});
  ${backgroundOpacity};
  ${backgroundFilters};
  ${backgroundBlendMode};
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: ${({ isHeader }) => (isHeader ? 2 : 1)};
  ${({ noVerticalPadding }) =>
    !noVerticalPadding &&
    css`
      padding-top: ${getSpace(10)};
      padding-bottom: ${getSpace(10)};
    `};
  padding-left: 20px;
  padding-right: 20px;
  max-width: ${({ fluid, theme }) =>
    fluid ? theme.viewportSize.fluid : "auto"};
  width: ${({ fluid }) => (fluid ? "100%" : "auto")};

  ${responsive(
    "sm",
    css`
      width: ${({ fluid, theme }) =>
        fluid ? "auto" : theme.viewportSize.sm};
    `
  )};

  ${responsive(
    "md",
    css`
      width: ${({ fluid, theme }) => (fluid ? "auto" : theme.viewportSize.md)};
      padding-left: ${({ fluid }) => (fluid ? "32px" : "20px")};
      padding-right: ${({ fluid }) => (fluid ? "32px" : "20px")};
    `
  )};

  ${responsive(
    "lg",
    css`
      padding-left: ${({ fluid }) => (fluid ? "48px" : "20px")};
      padding-right: ${({ fluid }) => (fluid ? "48px" : "20px")};
    `
  )};
`;

export default function BaseSection({
  children,
  backgroundImage = {},
  noVerticalPadding,
  withBorderBottom,
  fluid,
  isHeader,
  ...props
}) {
  const hasBackgroundImage = backgroundImage.url?.length > 0;
  return (
    <Section withBorderBottom={withBorderBottom} isHeader={isHeader} {...props}>
      <Container
        data-testid="container"
        noVerticalPadding={noVerticalPadding}
        fluid={fluid}
        isHeader={isHeader}
      >
        {children}
      </Container>
      {hasBackgroundImage && <Background {...backgroundImage} />}
    </Section>
  );
}

BaseSection.propTypes = {
  backgroundImage: PropTypes.shape({
    blend: PropTypes.string,
    blur: PropTypes.number,
    contrast: PropTypes.number,
    grayscale: PropTypes.number,
    opacity: PropTypes.number,
    url: PropTypes.string,
  }),
  noVerticalPadding: PropTypes.bool,
  withBorderBottom: PropTypes.bool,
  fluid: PropTypes.bool,
  isHeader: PropTypes.bool,
};



import React from "react";
import PropTypes from "prop-types";
import pick from "lodash-es/pick";
import { ThemeProvider } from "styled-components";
import StorefrontContext from "../context";
import { useStorefront } from "../hooks";
import { useSectionTheme } from "./hooks";
import BaseSection from "./BaseSection";
import { variantTypes } from "@components/creator_ui/LayoutWithMedia";
import TogglesProvider from "./TogglesProvider";
import { getDefaultStoreFront } from "./utils";

export default function SectionWrapper({
  theme: initialTheme,
  id,
  children,
  noVerticalPadding,
  withBorderBottom,
  fluid,
  isHeader,
  toggles,
}) {
  const defaultStorefront = getDefaultStoreFront();
  const storefront = useStorefront(defaultStorefront);
  const theme = useSectionTheme(initialTheme, id, storefront);

  return (
    <StorefrontContext.Provider value={storefront}>
      <ThemeProvider theme={theme}>
        <TogglesProvider toggles={toggles}>
          <BaseSection
            backgroundImage={theme.backgroundImage}
            noVerticalPadding={noVerticalPadding}
            withBorderBottom={withBorderBottom}
            fluid={fluid}
            isHeader={isHeader}
          >
            {children}
          </BaseSection>
        </TogglesProvider>
      </ThemeProvider>
    </StorefrontContext.Provider>
  );
}

export const baseSectionPropTypes = {
  id: PropTypes.any.isRequired,
  theme: PropTypes.shape({
    name: PropTypes.string,
    colors: PropTypes.shape({
      background: PropTypes.string,
      button: PropTypes.string,
      buttonText: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
  collectionLayout: PropTypes.string,
  contentAlignment: PropTypes.string,
  mediaAlignment: PropTypes.string,
  mediaStyle: PropTypes.string,
  layout: PropTypes.string,
  toggles: PropTypes.objectOf(PropTypes.bool),
};

SectionWrapper.propTypes = {
  ...pick(baseSectionPropTypes, ["id", "theme"]),
  variant: PropTypes.oneOf(variantTypes),
  children: PropTypes.element.isRequired,
  noVerticalPadding: PropTypes.bool,
  withBorderBottom: PropTypes.bool,
  fluid: PropTypes.bool,
  isHeader: PropTypes.bool,
};

import React, { useContext } from "react";

const TogglesContext = React.createContext();

export function useVisibilityToggles() {
  const toggles = useContext(TogglesContext);
  const isVisible = (key) =>
    toggles.hasOwnProperty(key) ? toggles[key] : true;

  return isVisible;
}

export default function TogglesProvider({ toggles, children }) {
  return (
    <TogglesContext.Provider value={toggles}>
      {children}
    </TogglesContext.Provider>
  );
}


import merge from "lodash-es/merge";
import { useObject } from "../page_section/hooks";
import defaultTheme from "@components/creator_ui/theme";
import {
  buildDarkTheme,
  buildLightTheme,
  buildNoneTheme,
} from "@components/creator_ui/theme/presets";
import { rgbWhite } from "@components/creator_ui/theme/colors";

function pickColorsFrom(storefront, theme = storefront) {
  return merge({}, defaultTheme.color, {
    text: theme.colors.text,
    subheading: theme.colors.text,
    preheading: theme.colors.text,
    heading: theme.colors.heading,
    background: theme.colors.background,
    brand:
      theme?.name !== "custom" ? storefront.colors.brand : theme.colors.text,
    button: {
      background: theme.colors.button,
      text: theme.colors.buttonText,
    },
    card: {
      background: rgbWhite,
      text: theme.colors.text,
      heading: theme.colors.heading,
    },
  });
}

export function useSectionTheme(initialTheme, sectionId, storefront) {
  const theme = useObject("theme", initialTheme, sectionId);
  const storefrontBrandedTheme = {
    brand: storefront.colors.brand,
    button: {
      background: storefront.colors.brand,
      text: rgbWhite,
    },
  };

  let color;
  switch (theme.name) {
    case "default":
      color = pickColorsFrom(storefront);
      break;
    case "custom":
      color = pickColorsFrom(storefront, theme);
      break;
    case "dark":
      color = merge({}, storefrontBrandedTheme, buildDarkTheme());
      break;
    case "light":
      color = merge({}, storefrontBrandedTheme, buildLightTheme());
      break;
    default:
      color = merge({}, storefrontBrandedTheme, buildNoneTheme());
      break;
  }

  return {
    ...defaultTheme,
    name: theme.name || "none",
    backgroundImage: theme.background,
    color,
  };
}



