import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="bg-primary small text-center text-white-50">
      <div className="container">
        Copyright &copy; Oscar Throedsson 2021 •{" "}
        <Link
          to="/cookies"
          className="text-white-50"
          title="Cookie Policy"
          target="_blank"
        >
          Cookiepolicy •{" "}
        </Link>
        <a className="text-white-50" href="/kopesavtal.pdf" target="_blank">
          Köpesavtal
        </a>
      </div>
    </footer>
  );
}
