var preferences = require('sdk/preferences/service');
var self = require('sdk/self');
var tabs = require('sdk/tabs');

// Set browser startup and new tab preferences
preferences.set('browser.newtab.url', 'about:blank');
preferences.set('browser.startup.homepage', 'about:blank');
preferences.set('startup.override_homepage_url', '');

// Does not yet work
tabs.on('open', function(tab) {
    var contentString = self.data.load('./index.html').replace(/\n/g, '');
    console.log(contentString);
    tab.attach({
        contentScript: "document.body.innerHTML='" + contentString + "';"
        // contentScript: "document.body.innerHTML='<h1>Hello World</h1>'"
    });
});
