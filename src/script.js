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
                        link: "https://play.google.com/store"
                    }
                },
                apple: {
                    os: "iOS",
                    platform: { 
                        name: "App Store",
                        icon: "download-app-store.png",
                        link: "https://www.apple.com/it/ios/app-store/"
                    }
                }
            },
            socialLinks: [
                {
                    socialName: "Facebook",
                    icon: "facebook-f",
                    socialLink: "https://it-it.facebook.com/"
                },
                {
                    socialName: "Instagram",
                    icon: "instagram",
                    socialLink: "https://www.instagram.com/"
                },
                {
                    socialName: "Twitter",
                    icon: "twitter",
                    socialLink: "https://twitter.com/?lang=it"
                },
                {
                    socialName: "Youtube",
                    icon: "youtube",
                    socialLink: "https://www.youtube.com/"
                },
                {
                    socialName: "Pinterest",
                    icon: "pinterest-p",
                    socialLink: "https://www.pinterest.it/"
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
                articleLink: "#",
                images: {
                    imgXs:"fi-roundup-66x66.jpg",
                    imgS:"fi-roundup-400x263.jpg",
                    imgL: "fi-roundup-600x395.jpg",
                    imgXl:"fi-roundup-1200x790.jpg",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "RoundUp: My New Favourite Recipes For Healthy Living",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"fi-toasts-66x66.jpg",
                    imgS:"fi-toasts-400x263.jpg",
                    imgL: "fi-toasts-600x395.jpg",
                    imgXl:"fi-toasts-66x66.jpg",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Wbhy These Toasts with Tea are My New Favorite",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"Yogurt-Nan-200x132.jpg",
                    imgS:"Yogurt-Nan-400x263.jpg",
                    imgL: "Yogurt-Nan-600x395.jpg",
                    imgXl:"Yogurt-Nan-img3-1200x790.jpg",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"Mixed-fruits-200x132.jpg",
                    imgS:"Mixed-fruits-400x263.jpg",
                    imgL: "Mixed-fruits-600x395.jpg",
                    imgXl:"Mixed-fruits-img3-1200x790.jpg",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"r-rachel-park-366508-unsplash-min-200x132.jpg",
                    imgS:"r-rachel-park-366508-unsplash-min-400x263.jpg",
                    imgL: "r-rachel-park-366508-unsplash-min-600x395.jpg",
                    imgXl:"r-rachel-park-366508-unsplash-min-img3-1200x790.jpg",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"r-michelle-tsang-500721-unsplash-min-200x132.jpg",
                    imgS:"r-michelle-tsang-500721-unsplash-min-400x263.jpg",
                    imgL: "r-michelle-tsang-500721-unsplash-min-600x395.jpg",
                    imgXl:"r-michelle-tsang-500721-unsplash-min-img3-1200x790.jpg",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"",
                    imgS:"quick-summer-drink-460x295.jpg",
                    imgL: "",
                    imgXl:"",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"",
                    imgS:"r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg",
                    imgL: "",
                    imgXl:"",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"",
                    imgS:"perfect-cosmopolitan-460x295.jpg",
                    imgL: "",
                    imgXl:"",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
            {
                articleLink: "#",
                images: {
                    imgXs:"",
                    imgS:"r-brooke-lark-96398-unsplash-min-460x295.jpg",
                    imgL: "",
                    imgXl:"",
                },
                articleInfos: {
                    author: "admin",
                    date: "March 25th, 2019",
                },
                articleContent: {     
                    title: "Lunch Favorite with Salad, Naan And Beans",
                    articleBody: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi. Donec pulvinar pharetra nisi, finibus euismod justo molestie vel. Nullam sit amet enim quis orci sollicitudin tincidunt non eu lorem."
                }
            },
        ]
    }
})