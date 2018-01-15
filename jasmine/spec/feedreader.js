/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This test makes sure that the allFeeds variable
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('to have URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toEqual(jasmine.any(String));  // should be a string
                expect(feed.url.length).not.toBe(0);  // should not be an empty string
                expect(feed.url.indexOf(' ')).toEqual(-1);  // should not have empty spaces
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('to have name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).toEqual(jasmine.any(String));
                expect(feed.name).not.toBe("");
            });
        });
    });

    /* This suite is for testing the sliding menu functionality.
     */
    describe('The menu', function() {
        var menuIconLink = $('.menu-icon-link');
        var bodyEl = $('body');
        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden on load', function() {
            expect(bodyEl.hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('is visible/hidden on click', function() {
            menuIconLink.triggerHandler('click');
            expect(bodyEl.hasClass('menu-hidden')).toBe(false);
            menuIconLink.triggerHandler('click');
            expect(bodyEl.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This suite is for testing asynchronous calls that load RSS feeds.
     */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('are loaded with at least a single .entry element', function() {
            expect($('.feed').has('.entry').length).not.toEqual(0);
        });
    });

    /* This suite is for testing asynchronous calls that load RSS feeds.
     */
    describe('New Feed Selection', function() {
        var currFeed, newFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                currFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('loads new content', function() {
            expect(newFeed).not.toEqual(currFeed);
        });
    });
}());
