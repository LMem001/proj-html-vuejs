const app = new Vue ({
    el: "#root",
    data: {
        sitePlatform: "WordPress",
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
        avada: {
            copyright: {
                companyName: "Theme Fusion",
                themeName: "Avada Theme",
                range: "2012-2020"
            },
            contacts: {
                address: {
                    info: "775 New York Ave, Brooklin, Kings, New York 11203",
                    icon: "fa-map-marker-alt",
                },
                phone: {
                    info: "+0100-505-0000",
                    icon: "fa-phone",
                },
                email: {
                    info: "info@your-domain.com",
                    icon: "fa-envelope"
                }
            },
            apps: {
                android: {
                    os: "Android",
                    platform: { 
                        name: "Google Play",
                        icon: "download-android.png",
                        link: "#"
                    }
                },
                apple: {
                    os: "iOS",
                    platform: { 
                        name: "App Store",
                        icon: "download-app-store.png",
                        link: "#"
                    }
                }
            },
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
        }, 
        articles: [
            {
                articleLink: "#",
                images: {
                    imgXs:"single-post-img3-66x66.jpg",
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