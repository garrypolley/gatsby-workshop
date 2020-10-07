import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SpeakerCard from "../components/speakerCards";

function SpeakersPage() {
  const data = useStaticQuery(graphql`
    query FetchSpeakersPage {
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
  `);
  return (
    <Layout>
      <SEO title="Speakers" keywords={[`Speakers`]} />
      <h2 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
        Speakers
      </h2>
      <SpeakerCard speakers={data.allSpeakersYaml.edges} />
    </Layout>
  );
}

export default SpeakersPage;
