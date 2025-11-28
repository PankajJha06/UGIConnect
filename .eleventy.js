module.exports = function (eleventyConfig) {
    // Copy the `styles.css` and `script.js` to the output
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/script.js");

    // Copy images folder
    eleventyConfig.addPassthroughCopy("src/images");

    // Copy admin folder
    eleventyConfig.addPassthroughCopy("src/admin");

    // Copy all favicon files
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
    eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
    eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("src/android-chrome-192x192.png");
    eleventyConfig.addPassthroughCopy("src/android-chrome-512x512.png");
    eleventyConfig.addPassthroughCopy("src/site.webmanifest");

    // Add custom filter to sort events by date (nearest first)
    eleventyConfig.addFilter("sortByDate", function (events) {
        return events.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB; // Ascending order (nearest first)
        });
    });

    // Add filter to get upcoming events only (future dates)
    eleventyConfig.addFilter("upcomingOnly", function (events) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to start of day
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= today;
        });
    });

    // Add filter for RSS date formatting (ISO 8601)
    eleventyConfig.addFilter("toIsoString", function (dateString) {
        return new Date(dateString).toISOString();
    });

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            data: "_data"
        }
    };
};
