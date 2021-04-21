const app = new Vue ({
    el: "#root",
    data: {
        menuLinks: [
            {
                pageName: "Home",
                pageLink: "#",
                currentPage: true
            },
            {
                pageName: "Recipes",
                pageLink: "#",
                currentPage: false 
            },
            {
                pageName: "Places",
                pageLink: "#",
                currentPage: false 
            },
            {
                pageName: "Blog",
                pageLink: "#",
                currentPage: false 
            },
            {
                pageName: "About",
                pageLink: "#",
                currentPage: false 
            },
            {
                pageName: "Contact",
                pageLink: "#",
                currentPage: false 
            },
        ],
        socialLinks: [
            {
                socialName: "Facebook",
                icon: "facebook-f",
                socialLink: "#"
            },
            {
                socialName: "Instagram",
                icon: "instagram",
                socialLink: "#"
            },
            {
                socialName: "Twitter",
                icon: "twitter",
                socialLink: "#"
            },
            {
                socialName: "Youtube",
                icon: "youtube",
                socialLink: "#"
            },
            {
                socialName: "Pinterest",
                icon: "pinterest-p",
                socialLink: "#"
            },
        ],
        articles: [
            {
                articleLink: "#",
                images: {
                    imgXs:"single-post-img3-400x263.jpg",
                    imgS:"single-post-img3-400x263.jpg",
                    imgL: "single-post-img3-600x395.jpg",
                    imgXl:"single-post-img3-1200x790.jpg",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Food Corner: Top Japanese Restaurants for Sushi",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                images: [
                    "first",
                    "second",
                    "third"
                ],
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Food Corner: Top Japanese Restaurants for Sushi",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            }
        ]
    }
})