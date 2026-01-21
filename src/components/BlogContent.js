import { useEffect, useState } from "react";

export default function BlogContent({ contentFile }) {
    const [html, setHtml] = useState("");

    useEffect(() => {
        fetch(`/BlogData/${contentFile}`)
            .then(res => res.text())
            .then(setHtml)
            .catch(() => setHtml("<p>Content not found.</p>"));
    }, [contentFile]);

    return (
        <div

            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
