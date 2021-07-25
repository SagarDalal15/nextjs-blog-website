import React from "react";

export default function GithubLink() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "black",
        marginTop: "40px",
      }}
    >
      <a
        style={{ color: "white" }}
        href="https://github.com/SagarDalal15/nextjs-blog-website"
      >
        See code on Github {"->"}
      </a>
    </div>
  );
}
