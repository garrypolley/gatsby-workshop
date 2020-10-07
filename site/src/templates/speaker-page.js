import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Schedule from "../components/schedule";

const TalkSection = ({ speaker }) => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-blue-500 tracking-tight font-inter p-4">
      {speaker.title}
    </h1>
    <h2 className="text-4xl font-extrabold  tracking-tight font-inter p-4">
      with {speaker.name}
    </h2>
  </div>
);

function SpeakerPage({ data }) {
  const speaker = data.speakersYaml;
  const allSpeakers = data.allSpeakersYaml;
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <TalkSection speaker={speaker} />

      <h2 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
        All Schedule
      </h2>
      <br />
      <Schedule talks={allSpeakers.edges} />
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    speakersYaml(fields: { slug: { eq: $slug } }) {
      name
      title
    }
    allSpeakersYaml {
      edges {
        node {
          id
          avatar
          name
          title
          time
          fields {
            url
          }
        }
      }
    }
  }
`;

export default SpeakerPage;
