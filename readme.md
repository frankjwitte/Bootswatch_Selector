# Bootswatch Selector
## Intro
Bootstrap is a great way to easily setup a decent looking web application.
For developers it is a great time saver. To make it even more interesting there are many
themes around for Bootstrap to give the web application a custom look. 
[Bootswatch](http://bootswatch.com) presents a dozen free themes.
You can apply them by replacing the Bootstrap CSS with one of the themes. There is a nice API
that lists up the available themes and references to a CDN version.
There is themes available for both V2 and V3 of Bootstrap.

I want to make a theme selector directive for AngularJS where you can just drop in a tag like:

    <bootswatch-theme version="3" default-theme="spacelab">
    </bootswatch-theme>

