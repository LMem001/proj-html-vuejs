const app = new Vue ({
    el: "#root",
    data: {
        // host
        sitePlatform: "WordPress",
        /* object menuLinks
        * param pageName {string}
        * param pageLink {string}: link to the corresponding page
        * param currentPage {boolean}: turns true if the corresponding and the selected page are the same
        */
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
        /* object avada: contains all the information about the site owner

        ** object copyright: copyright infos
        ** param companyName {string}: name of the company of the owner
        ** param themeName {string}: name of the product
        ** param range {string}: years of ownership of the compani

        ** object contacts: contains all the contacts of the owner
        *** object address, phone, email
        *** param info {string}: address, phone and email of the owner
        *** param icon {string}: class name of the decorative icon

        **object apps: links to mobile apps
        *** object android, apple
        *** param os {string}: name of the operative sistem used by the app
        **** object platform: infos about the platform that distributes the app
        **** param name {string}
        **** param icon {string}: index of the image for app ad
        **** param link {string}: link to the app
        
        ** param socialLinks {array}: array of object that contains infos about all the socials that the owner choosed to share
        *** object socialLink
        *** param name {string}: name of the shared social
        *** param icon {string}: icon of the font awesome class
        *** param link {string}: link to the social
        */
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

        /* param articles {array of objects}
        * object article
        * param articleLink {string}
        ** object images: contain various image of four tipes of format
        ** param img(Xs-S-L-Xl) {strings}: image path
        *
        ** obj articleInfos
        ** param author {string}: name/nickname of the author
        ** param date {string}: date of pubblication
        *  
        ** object articleContent: contains the article
        ** param title {string}
        ** param articleBody {string}
        */
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