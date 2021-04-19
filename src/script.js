const app = new Vue ({
    el: "#root",
    data: {
        menuLinks: [
            {
                pageName: "Home",
                pageLink: "#"
            },
            {
                pageName: "Recipes",
                pageLink: "#" 
            },
            {
                pageName: "Places",
                pageLink: "#" 
            },
            {
                pageName: "Blog",
                pageLink: "#" 
            },
            {
                pageName: "About",
                pageLink: "#" 
            },
            {
                pageName: "Contact",
                pageLink: "#" 
            },
        ],
        socialLinks: [
            {
                socialName: "Facebook",
                icon: "",
                socialLink: "#"
            },
            {
                socialName: "Instagram",
                icon: "",
                socialLink: "#"
            },
            {
                socialName: "Twitter",
                icon: "",
                socialLink: "#"
            },
            {
                socialName: "Youtube",
                icon: "",
                socialLink: "#"
            },
            {
                socialName: "Pinterest",
                icon: "",
                socialLink: "#"
            },
        ],
        articles: [
            {
                image: "#",
                title: "Food Corner: Top Japanese Restaurants for Sushi",
                author: "admin",
                date: "March 25th, 2019",
                articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
            }
        ]
    }
})