import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { AiOutlineAntDesign } from "react-icons/ai";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world from
      Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End/CMS</ListTitle>
          <ListParagraph>
            Experiences with <br />
            Contentful
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiences with <br />
            Html , Css , JavaScript , ReactJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineAntDesign size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiences with <br />
            AntDesign
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
