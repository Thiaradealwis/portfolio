import { useEffect, useState } from "react";
import Section from "./Section.jsx";
import { academia } from "./content.js";

export default function Journalism() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const mediumFeed =
                    "https://medium.com/feed/@t.dealwis";

                const response = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
                        mediumFeed
                    )}`
                );

                const data = await response.json();

                if (data.status === "ok") {
                    setArticles(data.items.slice(0, 3));
                }
            } catch (error) {
                console.error("Could not load Medium articles:", error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <div>
            <div className="subpage">
                <Section
                    id="academia"
                    title="Academia"
                    items={academia}
                    variant="experience"
                />
            </div>
            <div className="jline"></div>
            <div className="subpage">
                <Section
                    id="journalism"
                    title="Journalism"
                    items={articles}
                    variant="journalism"
                />
            </div>
        </div>
    );
}