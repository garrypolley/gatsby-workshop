import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Page was not found. <Link to="/">Head back to the home page.</Link>
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
