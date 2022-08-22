import React from "react";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import { Facebook, Github, LinkedIn } from "./icons";
// import FontAwesome from "@fortawesome/react-fontawesome";
import FontAwesome from "react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
// import "@heroicons/react";

import Link from "next/link";

function Footer() {
    return (
        <footer>
            <div className="wd mx-auto">
                <div className="flex py-20 justify-center gap-10">
                    <Link href="https://www.linkedin.com/in/mukiibi-peter/">
                        <a target="_blank" className="flex items-center">
                            <LinkedIn className="w-6 fill-slate-400" />
                            <p className="ml-2">Linkedin</p>
                        </a>
                    </Link>
                    <Link href="https://github.com/peter-geek">
                        <a target="_blank" className="flex items-center">
                            <Github className="w-6 fill-slate-400" />
                            <p className="ml-2">Github</p>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
