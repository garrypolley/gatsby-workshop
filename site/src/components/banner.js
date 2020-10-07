import React from "react";
import { Link } from "gatsby";

export default function Banner({ title = "" }) {
  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      <blockquote>
        <Link to="/ticket">Tickets are on sale now for {title}</Link>
      </blockquote>
    </div>
  );
}
