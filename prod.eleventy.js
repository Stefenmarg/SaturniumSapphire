const pass_through = require("./config/json/pass_through.json");
const domains = require("./config/json/domains.json")["Prod"];

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const xmlPlugin = require("eleventy-xml-plugin");

const fs = require('fs').promises;

module.exports = function (eleventyConfig) {
    //All the plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(xmlPlugin);

    //Additional tempate formats used to build this site
    eleventyConfig.addTemplateFormats("xml");

    //Filters that are used in the site
    eleventyConfig.addFilter("dateToRfc2822", function (dateObj) {
        return new Date(dateObj).toUTCString();
    });

    //Automatic collection register
    fs.readdir('./src/posts/', (err, entries) => {
        if (err) return console.error(err.message);

        entries.forEach(entry => {
            const entryPath = `./src/posts/${entry}`;

            fs.stat(entryPath, (err, status) => {
                if (err || !status.isDirectory()) return;

                console.log(`[Saturnium] Registered new collection '${entry}'`);
                eleventyConfig.addCollection(entry, collection =>
                    collection.getFilteredByGlob(`${entryPath}/*.md`).sort((a, b) => new Date(b.date) - new Date(a.date))
                );
            });
        });
    });

    //Files to copy to the destination without processing
    pass_through["Paths"].forEach(path => {
        eleventyConfig.addPassthroughCopy(`${path}`);
    });

    //Url attributes
    eleventyConfig.addGlobalData("url", domains["url"]);
    eleventyConfig.addGlobalData("baseurl", domains["baseurl"]);

    //Build input and output files    
    return {
        dir: {
            output: "docs",
            input: "src"
        },
        pathPrefix: domains["baseurl"]
    };
};
