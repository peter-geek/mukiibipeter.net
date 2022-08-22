import React from "react";

function projects() {
    let langs = ["Rugby", "Es6", "Scala"];
    return (
        <div>
            {langs.map((it) => (
                <p>{it}</p>
            ))}
        </div>
    );
}

export default projects;
