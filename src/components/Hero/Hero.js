import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcon To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established
        developers to improve their performance
      </SectionText>
      <Button onClick={() => (window.location = "http://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
