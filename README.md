# ProfileApp

This project is to create my profile using Angular features.

1. Installing Bootstrap and font awesome
    a. Bootstrap requires JQuery and Popper.js, Install thesse two libraries using npm
        npm install jQuery popper.js --save
    b. Postintsalling above two use npm install bootstrap to install bootstrap
    c. Install font awesome npm install @fortawesome/fontawesome-free


    d. After installing refer the requiredd files (bootstrap.min.css,all.min.css(fontawesome) popper.min.js, jquery.min.js and bootstrap.min.js files in angular.json config file respective sections[styles, scripts]).


1. Fetching Data:

Best Practice:

    User Route Resolvers to Prefecth the data.

    See the code in TechSkillsComponent:
        This component Interact with techskills service, which provides an Observable and techskills resolver registered with
        router will resolve the data and makes  it available in activated route.

    Seperate Modules:
        1. Routing and Post a Job are two seperate modules.

    Post a Job , created a form using reactive forms.
    