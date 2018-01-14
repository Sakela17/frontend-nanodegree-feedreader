# Feed Reader Testing
This is one of the projects for the Front-End Web Developer Nanodegree program at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
In this project I used [Jasmine](http://jasmine.github.io/) framework to write tests for a web-based application that reads RSS feeds.

## Project Details
After analyzing the pre-existing application, I'd written a number of tests required to pass the project. These include:
* 'to have URL' spec that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not an empty string;
* 'to have name' spec that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not an empty string;
* 'is hidden on load' spec that ensures the menu element is hidden by default;
* 'is visible/hidden on click' spec that ensures the menu changes visibility when the menu icon is clicked;
* 'are loaded with at least a single .entry element' spec that ensures when the loadFeed() is called and completes its work, there is at least a single .entry element within the .feed container;
* 'loads new content' spec that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Quick Start
To run the application, you need:
* Clone or download project's repository to your destination folder;
* In the project's folder, open index.html file in any browser of your choice.