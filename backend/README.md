# Setup

## Pre-requisites

1. Maven
2. Java
3. Postman (To test)

## Running Backend
1. In your command line, go to the project directory.
2. Run the command ```mvn clean install``` to install all the dependencies
3. Then go to IntelliJ and run ```InfoApplication```

##Endpoint

###GET
#### `http://localhost:3000/search?q={query}`
This endpoint is a GET call that returns a json for the query provided.

*Sample Request*:
`http://localhost:3000/search?q=GTAV`

<details>
  <summary>Sample Response</summary>

```json
{
    "_type": "SearchResponse",
    "queryContext": {
        "originalQuery": "GTAV"
    },
    "webPages": {
        "webSearchUrl": "https://www.bing.com/search?q=GTAV",
        "totalEstimatedMatches": 6460000,
        "value": [
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.0",
                "name": "Rockstar Games - Grand Theft Auto V",
                "url": "https://www.rockstargames.com/V/",
                "isFamilyFriendly": true,
                "displayUrl": "https://www.rockstargames.com/V",
                "snippet": "The official home of Rockstar Games",
                "deepLinks": [
                    {
                        "name": "How to Resolve Errors in The Social Club Launcher for Gtav PC",
                        "url": "https://support.rockstargames.com/articles/204075496/How-to-Resolve-Errors-in-the-Social-Club-Launcher-for-GTAV-PC",
                        "snippet": "Question: When trying to run GTAV on PC, I am getting one of the following errors:\"Social Club failed to initialize.\"\"Social Club failed to load due to an incomplete ...",
                        "deepLinks": []
                    },
                    {
                        "name": "GTA Online",
                        "url": "https://www.rockstargames.com/GTAOnline/",
                        "snippet": "Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared online experience.",
                        "deepLinks": []
                    },
                    {
                        "name": "Rockstar Games Customer Support",
                        "url": "https://support.rockstargames.com/",
                        "snippet": "Receive help with your Rockstar Games technical issues – Use our Knowledge Base Articles and receive assistance via Callback, Chat, Email, and our Player Supported Community",
                        "deepLinks": []
                    },
                    {
                        "name": "Grand Theft Auto IV",
                        "url": "https://www.rockstargames.com/games/IV",
                        "snippet": "What does the American Dream mean today? For Niko Bellic, fresh off the boat from Europe, it is the hope he can escape his past. For his cousin, Roman, it is the vision that together they can find fortune in Liberty City, gateway to the land of..."
                    },
                    {
                        "name": "Legal",
                        "url": "https://www.rockstargames.com/legal",
                        "snippet": "The official home of Rockstar Games"
                    },
                    {
                        "name": "Grand Theft Auto V",
                        "url": "https://www.rockstargames.com/games/V",
                        "snippet": "Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets, and fading celebrities, once the envy of the Western world, now struggling to stay afloat in an era of economic uncertainty and cheap reality TV.Amidst the turmoil, three..."
                    }
                ],
                "dateLastCrawled": "2022-03-10T15:10:00.0000000Z",
                "language": "en",
                "isNavigational": true
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.1",
                "name": "Grand Theft Auto V on Steam",
                "url": "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
                "isFamilyFriendly": true,
                "displayUrl": "https://store.steampowered.com/app/271590",
                "snippet": "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
                "dateLastCrawled": "2022-03-09T16:48:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.2",
                "contractualRules": [
                    {
                        "_type": "ContractualRules/LicenseAttribution",
                        "targetPropertyName": "snippet",
                        "targetPropertyIndex": 3,
                        "mustBeCloseToContent": true,
                        "license": {
                            "name": "CC-BY-SA",
                            "url": "http://creativecommons.org/licenses/by-sa/3.0/"
                        },
                        "licenseNotice": "Text under CC-BY-SA license"
                    }
                ],
                "name": "Grand Theft Auto V - Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Grand_Theft_Auto_V",
                "isFamilyFriendly": true,
                "displayUrl": "https://en.wikipedia.org/wiki/Grand_Theft_Auto_V",
                "snippet": "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber ...",
                "dateLastCrawled": "2022-02-25T11:49:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.3",
                "name": "Grand Theft Auto V: Premium Edition - Epic Games Store",
                "url": "https://www.epicgames.com/store/en-US/p/grand-theft-auto-v",
                "isFamilyFriendly": true,
                "displayUrl": "https://www.epicgames.com/store/en-US/p/grand-theft-auto-v",
                "snippet": "Grand Theft Auto V. The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online. Note: The $1,000,000 bonus cash in GTA Online included with ...",
                "dateLastCrawled": "2022-03-10T13:30:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.4",
                "name": "Download Grand Theft Auto V for Windows - 1.0",
                "url": "https://downloads.digitaltrends.com/gta-v/windows",
                "isFamilyFriendly": true,
                "displayUrl": "https://downloads.digitaltrends.com/gta-v/windows",
                "snippet": "Grand Theft Auto 5 - Where your wildest dreams come alive. 1/7. Rockstar North takes a bold approach to open-world freedom, storytelling, and mission-based gameplay in Grand Theft Auto 5. In it, you can live the digital life you’ve always wanted. Get the most money, best cars and best house that money can buy while having fun completing ...",
                "dateLastCrawled": "2022-03-10T21:57:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.5",
                "name": "GTA 5 - Grand Theft Auto - Download for PC Free - Malavida",
                "url": "https://www.malavida.com/en/soft/gta-5/",
                "isFamilyFriendly": true,
                "displayUrl": "https://www.malavida.com/en/soft/gta-5",
                "snippet": "8/10 (30690 votes) - Download GTA 5 - Grand Theft Auto Free. GTA 5 - Grand Theft Auto takes us back to Los Santos and California of the legendary GTA: San Andres. New adventures and missions on an endless scenario. Grand Theft Auto is one of the most stunning and successful video gaming...",
                "dateLastCrawled": "2022-03-10T11:24:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.6",
                "name": "GTA V - 100% Free Download | GameTop",
                "url": "https://www.gametop.com/download-free/gta-5/",
                "isFamilyFriendly": true,
                "displayUrl": "https://www.gametop.com/download-free/gta-5",
                "snippet": "Description. Grand Theft Auto 5 is a game like no other. If you liked the previous GTA games, GTA V is there to deliver everything and more. Huge open ended gameplay area, more vehicles and storyline with three characters. Fun mini-games to play free when you are not following the main story. Dive deep into the life of the thugs of San Andreas.",
                "dateLastCrawled": "2022-03-09T03:56:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.7",
                "name": "GTA V Game for Android - APK Download - APKPure.com",
                "url": "https://apkpure.com/gta-v-game-2018/com.conderis.gtavgameneww",
                "isFamilyFriendly": true,
                "displayUrl": "https://apkpure.com/gta-v-game-2018/com.conderis.gtavgameneww",
                "snippet": "Update on: 2018-07-26 App uploaded by: Linyker Takahashi Requires Android: Android 4.0.3+ (Ice Cream Sandwich MR1, API 15) Signature ...",
                "dateLastCrawled": "2022-03-09T09:15:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https://api.bing.microsoft.com/api/v7/#WebPages.8",
                "name": "GTA5-Mods.com - Your source for the latest GTA 5 car mods ...",
                "url": "https://www.gta5-mods.com/",
                "isFamilyFriendly": true,
                "displayUrl": "https://www.gta5-mods.com",
                "snippet": "Welcome to GTA5-Mods.com. Select one of the following categories to start browsing the latest GTA 5 PC mods:",
                "dateLastCrawled": "2022-03-07T21:34:00.0000000Z",
                "language": "en",
                "isNavigational": false
            }
        ]
    },
    "entities": {
        "value": [
            {
                "id": "https://api.bing.microsoft.com/api/v7/#Entities.0",
                "contractualRules": [
                    {
                        "_type": "ContractualRules/LicenseAttribution",
                        "targetPropertyName": "description",
                        "mustBeCloseToContent": true,
                        "license": {
                            "name": "CC-BY-SA",
                            "url": "http://creativecommons.org/licenses/by-sa/3.0/"
                        },
                        "licenseNotice": "Text under CC-BY-SA license"
                    },
                    {
                        "_type": "ContractualRules/LinkAttribution",
                        "targetPropertyName": "description",
                        "mustBeCloseToContent": true,
                        "text": "Wikipedia",
                        "url": "http://en.wikipedia.org/wiki/Grand_Theft_Auto_V"
                    },
                    {
                        "_type": "ContractualRules/MediaAttribution",
                        "targetPropertyName": "image",
                        "mustBeCloseToContent": true,
                        "url": "http://en.wikipedia.org/wiki/Grand_Theft_Auto_V"
                    }
                ],
                "webSearchUrl": "https://www.bing.com/entityexplore?q=Grand+Theft+Auto+V&filters=sid:%2257d60610-c99e-4850-5668-e849f7eaab97%22&elv=AXXfrEiqqD9r3GuelwApulrpkxxERHc4yQoJ70nf9LYHXd4AFDNrYWfX20tmf3vEE*1c1aILRnFLMg0SGD1mnA0PnNHb*uM7HrKZkaxI4GXF",
                "name": "Grand Theft Auto V",
                "image": {
                    "name": "Grand Theft Auto V",
                    "thumbnailUrl": "https://www.bing.com/th?id=AMMS_88013296954b21cc55b8389aed7caa36&w=100&h=150&c=7&rs=1&qlt=80&cdv=1&pid=16.1",
                    "provider": [
                        {
                            "_type": "Organization",
                            "url": "http://en.wikipedia.org/wiki/Grand_Theft_Auto_V"
                        }
                    ],
                    "hostPageUrl": "http://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
                    "width": 100,
                    "height": 150,
                    "sourceWidth": 285,
                    "sourceHeight": 350
                },
                "description": "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.",
                "entityPresentationInfo": {
                    "entityScenario": "DominantEntity",
                    "entityTypeHints": [
                        "VideoGame"
                    ]
                },
                "bingId": "57d60610-c99e-4850-5668-e849f7eaab97"
            }
        ]
    },
    "images": {
        "id": "https://api.bing.microsoft.com/api/v7/#Images",
        "readLink": "https://api.bing.microsoft.com/api/v7/images/search?q=gtav&qpvt=gtav",
        "webSearchUrl": "https://www.bing.com/images/search?q=gtav&qpvt=gtav",
        "isFamilyFriendly": true,
        "value": [
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=8492A4442319D628C3C624DD04ECE886D0D37C45&FORM=IQFRBA",
                "name": "GTAV Title Update 1.38 Patch Notes Released For PS4, PC ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.1LIY7TWNSzBHg9EEoh0L4AHaEK&pid=Api",
                "datePublished": "2021-03-18T10:03:00.0000000Z",
                "contentUrl": "https://gearnuke.com/wp-content/uploads/2016/10/GTA-V-big-1024x576.jpg",
                "hostPageUrl": "https://gearnuke.com/gtav-title-update-1-38-patch-notes/",
                "contentSize": "118284 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://gearnuke.com/gtav-title-update-1-38-patch-notes/",
                "width": 1024,
                "height": 576,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=DA9B6597CC2872A45305BD38B25763C6023AA639&FORM=IQFRBA",
                "name": "GTAV PC: New Release Date, First Screens and System Specs ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.u034Rjpsv_YKnW4xiwmJ-AHaID&pid=Api",
                "datePublished": "2021-03-07T19:42:00.0000000Z",
                "contentUrl": "https://gamingcentral.in/wp-content/uploads/2015/01/collage.jpg",
                "hostPageUrl": "http://gamingcentral.in/gtav-pc-new-release-date-first-screens-and-system-specs/",
                "contentSize": "1792721 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "http://gamingcentral.in/gtav-pc-new-release-date-first-screens-and-system-specs/",
                "width": 1104,
                "height": 1200,
                "thumbnail": {
                    "width": 474,
                    "height": 515
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=FF02D45AED584EB5199DD160B6DE984AF586ABD7&FORM=IQFRBA",
                "name": "Image - StandardX360-GTAV.png | GTA Wiki | FANDOM powered ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.lYsQlwbXd0FXBimmevjs0gHaKc&pid=Api",
                "datePublished": "2001-01-01T00:00:00.0000000Z",
                "contentUrl": "https://vignette.wikia.nocookie.net/gtawiki/images/9/99/StandardX360-GTAV.png/revision/latest?cb=20130602115236",
                "hostPageUrl": "http://gta.wikia.com/wiki/File:StandardX360-GTAV.png",
                "contentSize": "2644366 B",
                "encodingFormat": "png",
                "hostPageDisplayUrl": "http://gta.wikia.com/wiki/File:StandardX360-GTAV.png",
                "width": 1064,
                "height": 1500,
                "thumbnail": {
                    "width": 474,
                    "height": 668
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=FE0940EF288B0A9A12FB47249CDC402252FEA6EE&FORM=IQFRBA",
                "name": "gtav_eng.pdf | DocDroid",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.7v7pDuSMs-B30xWJUcLycgHaHa&pid=Api",
                "datePublished": "2021-02-21T02:33:00.0000000Z",
                "contentUrl": "https://www.docdroid.net/thumbnail/wuz1/1500,1500/gtav-eng-pdf.jpg",
                "hostPageUrl": "https://www.docdroid.net/wuz1/gtav-eng-pdf",
                "contentSize": "691792 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.docdroid.net/wuz1/gtav-eng-pdf",
                "width": 1500,
                "height": 1500,
                "thumbnail": {
                    "width": 474,
                    "height": 474
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=9041900DCA39A0B99AD9AA4125FEC518848C1087&FORM=IQFRBA",
                "name": "「一人称視点モード」でFPSゲームに！？PS4、XBOXONE、PC版GTAVにて初披露！",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.LP6Kv6a6qTeWMEDdMA2NQQHaEK&pid=Api",
                "datePublished": "2021-07-08T16:55:00.0000000Z",
                "contentUrl": "https://retrogames-newgames.com/wp-content/uploads/2014/11/GTAV.jpg",
                "hostPageUrl": "https://retrogames-newgames.com/gtav-2/",
                "contentSize": "666436 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://retrogames-newgames.com/gtav-2/",
                "width": 1920,
                "height": 1080,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 1,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=A6C94CAA495FD214294F52EEB14405AAAEBF5515&FORM=IQFRBA",
                "name": "Corsair For GTAV - GTA5-Mods.com",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.KL-amGu8b9eXAvJ3P-UF6AHaEK&pid=Api",
                "datePublished": "2019-07-29T17:26:00.0000000Z",
                "contentUrl": "https://img.gta5-mods.com/q95/images/corsair-gtav/3ccdff-CorsairGTAV.jpg",
                "hostPageUrl": "https://www.gta5-mods.com/scripts/corsair-gtav",
                "contentSize": "152241 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.gta5-mods.com/scripts/corsair-gtav",
                "width": 960,
                "height": 540,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=0EC87FD661D3B9CB82B632A3ED4B432FC72681E9&FORM=IQFRBA",
                "name": "GTAV GAMEPLAYS Y MAS - YouTube",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.5biGX3ne8buHBBGM8uTNRAHaHa&pid=Api",
                "datePublished": "2020-05-07T21:46:00.0000000Z",
                "contentUrl": "https://yt3.ggpht.com/a/AATXAJxWhPhJF-lrNki0v0wtoqfgEvBDvF2X17XTwg=s900-c-k-c0xffffffff-no-rj-mo",
                "hostPageUrl": "https://www.youtube.com/channel/UCq8Mpl1PHe-7giFNbleeLGg",
                "contentSize": "165574 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.youtube.com/channel/UCq8Mpl1PHe-7giFNbleeLGg",
                "width": 900,
                "height": 900,
                "thumbnail": {
                    "width": 474,
                    "height": 474
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=E5BE8BD246598939D7A627CB763E961518A69EB8&FORM=IQFRBA",
                "name": "Gtav Wallpapers - Top Free Gtav Backgrounds",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.pnhXcKlP5jyUFg_j0DS3dgHaEK&pid=Api",
                "datePublished": "2021-07-08T16:55:00.0000000Z",
                "contentUrl": "https://ffwallpaper.com/card/gtav/gtav-8.jpg",
                "hostPageUrl": "https://ffwallpaper.com/gtav.html",
                "contentSize": "788716 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://ffwallpaper.com/gtav.html",
                "width": 1200,
                "height": 675,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=710F2A6A4CF3ECF88462D8D9E5B75C6F2287F659&FORM=IQFRBA",
                "name": "Playing GTA Today - YouTube",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.3nJWOUoFJaG_P1hbAL63XAHaEK&pid=Api",
                "datePublished": "2021-04-24T04:33:00.0000000Z",
                "contentUrl": "https://i.ytimg.com/vi/R8iBwSpjkTg/maxresdefault.jpg",
                "hostPageUrl": "https://www.youtube.com/watch?v=R8iBwSpjkTg",
                "contentSize": "142961 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=R8iBwSpjkTg",
                "width": 1280,
                "height": 720,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=521F6E78FA5FFD22785D89A957DEF0A921079B92&FORM=IQFRBA",
                "name": "Evolve RP - Serveur GTAV RP - FiveM - YouTube",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.cHQHoKpaSuQfJK1nOAHrWwHaEK&pid=Api",
                "datePublished": "2021-07-21T08:47:00.0000000Z",
                "contentUrl": "https://i.ytimg.com/vi/3BkxSLnMVQI/maxresdefault.jpg",
                "hostPageUrl": "https://www.youtube.com/watch?v=3BkxSLnMVQI",
                "contentSize": "171426 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=3BkxSLnMVQI",
                "width": 1280,
                "height": 720,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=44E99732F5A83E403B5901A36794F1942A25F83D&FORM=IQFRBA",
                "name": "GTAV ONLINE CAPTURE wallpaper by ELLADARAS_GR - c5 - Free ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.KcjhnCASPDoR288caYcuuAHaGl&pid=Api",
                "datePublished": "2021-05-24T09:41:00.0000000Z",
                "contentUrl": "https://fsa.zobj.net/crop.php?r=p6q7MUXX81rNNlyUe31bBqWxqh047HKOCJUVkIzsoeFy0zX1FzD77uk7hdA2TBmf2bwNKU-64etFtEA65_aYUCVHyOGDLr3j_V8lQpFl_m8Vn2Cz7TReDTXijev53iQ1cPuXGRLscsNh7qfd",
                "hostPageUrl": "https://www.zedge.net/wallpaper/9c5317fe-6890-3b94-a817-8288b70870c5",
                "contentSize": "193929 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.zedge.net/wallpaper/9c5317fe-6890-3b94-a817-8288b70870c5",
                "width": 1440,
                "height": 1280,
                "thumbnail": {
                    "width": 474,
                    "height": 421
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=41ED0F4665FDA0F3027CF57647D51FC1DB216B6E&FORM=IQFRBA",
                "name": "Gtav Wallpapers - Top Free Gtav Backgrounds - WallpaperAccess",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.PQ4P3M_U94sqxFJpDmR7iwHaEK&pid=Api",
                "datePublished": "2019-10-14T18:55:00.0000000Z",
                "contentUrl": "https://wallpaperaccess.com/full/1105746.jpg",
                "hostPageUrl": "https://wallpaperaccess.com/gtav",
                "contentSize": "439624 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://wallpaperaccess.com/gtav",
                "width": 1920,
                "height": 1080,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=46C1C740BB502A2452BF6FF6B08ABF920F6074B3&FORM=IQFRBA",
                "name": "GTAV CARS -HOTWHEEL SHIVSHBMBHU GAMING - YouTube",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.-M4z2HIb5LsPU1jliolCjQHaEK&pid=Api",
                "datePublished": "2021-08-03T07:27:00.0000000Z",
                "contentUrl": "https://i.ytimg.com/vi/dmQ3p4zurN8/maxresdefault.jpg",
                "hostPageUrl": "https://www.youtube.com/watch?v=dmQ3p4zurN8",
                "contentSize": "142544 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=dmQ3p4zurN8",
                "width": 1280,
                "height": 720,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=1B59676792B4031902BD9891113C99E89CCFEED6&FORM=IQFRBA",
                "name": "GTAV gets nudged back on the PC yet again | Brutal Gamer",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.-gUHEi-5jwTOlBpwd9-kEAHaEK&pid=Api",
                "datePublished": "2015-02-25T12:00:00.0000000Z",
                "contentUrl": "https://brutalgamer.com/wp-content/uploads/2015/01/GTAV-PC-Trevor.jpg",
                "hostPageUrl": "https://brutalgamer.com/2015/02/25/gtav-gets-nudged-back-on-the-pc-yet-again/",
                "contentSize": "2489496 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://brutalgamer.com/2015/02/25/gtav-gets-nudged-back-on-the-pc-yet-again/",
                "width": 1920,
                "height": 1080,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                },
                "insightsMetadata": {
                    "shoppingSourcesCount": 0,
                    "recipeSourcesCount": 0
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=40AD8D79960610E220E1BC2908CE617EE435BFDA&FORM=IQFRBA",
                "name": "GTAV Mod allows Low End PC's to play the Game. Even the ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.z0izyIBKMHscnosEQ1W6BwHaEK&pid=Api",
                "datePublished": "2019-08-31T20:23:00.0000000Z",
                "contentUrl": "https://external-preview.redd.it/ytUPglCaW8Ij-34N3rNpm1oStwfBFHMZZzm12Rn-LSE.jpg?auto=webp&s=682ac8b58588bf345ef2af0e27673cf0b39e8436",
                "hostPageUrl": "https://www.reddit.com/r/pcmasterrace/comments/37gpti/gtav_mod_allows_low_end_pcs_to_play_the_game_even/?limit=500",
                "contentSize": "262802 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.reddit.com/r/pcmasterrace/comments/37gpti/gtav_mod_allows_low_end_pcs_to_play_the_game_even/?limit=500",
                "width": 1600,
                "height": 900,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=5C44B0F81CAF685A37052F80E324CF7F27821728&FORM=IQFRBA",
                "name": "GTAV Rally.",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.ANt20bnqs5PwPnUlUOJLyQHaEs&pid=Api",
                "datePublished": "2021-04-24T02:39:00.0000000Z",
                "contentUrl": "https://static.carthrottle.com/workspace/uploads/posts/2015/07/2015-07-12_00004-55a24c44a1cc8.jpg",
                "hostPageUrl": "https://www.carthrottle.com/post/eqpCWR/",
                "contentSize": "676862 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.carthrottle.com/post/eqpCWR/",
                "width": 2118,
                "height": 1343,
                "thumbnail": {
                    "width": 474,
                    "height": 300
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=BB4A87E60623842246126DDE6AF081B4B84AD6F0&FORM=IQFRBA",
                "name": "‫أفضل لقطات gtav المجنونة 😱👊‬‎ - YouTube",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.GPIms6aEucmCDXEiTuFoWAHaEK&pid=Api",
                "datePublished": "2020-07-23T14:53:00.0000000Z",
                "contentUrl": "https://i.ytimg.com/vi/1xPGohlWXUY/maxresdefault.jpg",
                "hostPageUrl": "https://www.youtube.com/watch?v=1xPGohlWXUY",
                "contentSize": "59549 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=1xPGohlWXUY",
                "width": 1280,
                "height": 720,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=4F2983246A8888CDCF9D81CF3AE06F065FC8737D&FORM=IQFRBA",
                "name": "Vulcar Nebula (stock Nebula Turbo) V1.0 - gtaV car ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.643P_6Z4ClrupQ_n_kQ1ZwHaEF&pid=Api",
                "datePublished": "2020-07-13T19:44:00.0000000Z",
                "contentUrl": "https://i1.wp.com/9gta5mods.com/wp-content/uploads/2019/12/Vulcar-Nebula-stock-Nebula-Turbo-V1.0-gtaV-car-4.jpg?w=1875&ssl=1",
                "hostPageUrl": "https://9gta5mods.com/vulcar-nebula-stock-nebula-turbo-v1-0-gtav-car/",
                "contentSize": "785665 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://9gta5mods.com/vulcar-nebula-stock-nebula-turbo-v1-0-gtav-car/",
                "width": 1875,
                "height": 1035,
                "thumbnail": {
                    "width": 474,
                    "height": 261
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=8928B8AEC01DE95CA5A29F733A79DCE3D96E7DB9&FORM=IQFRBA",
                "name": "gtav online gta v epic - YouTube",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.v7HTNktFOXY6uNpYEwpanAHaEK&pid=Api",
                "datePublished": "2020-07-01T19:29:00.0000000Z",
                "contentUrl": "https://i.ytimg.com/vi/ZZCfGxWkAIw/maxresdefault.jpg",
                "hostPageUrl": "https://www.youtube.com/watch?v=ZZCfGxWkAIw",
                "contentSize": "147135 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=ZZCfGxWkAIw",
                "width": 1280,
                "height": 720,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                }
            },
            {
                "webSearchUrl": "https://www.bing.com/images/search?q=gtav&id=BB5AF3B50455F2B43D243AA25DE645D2615D8224&FORM=IQFRBA",
                "name": "GTAV!!! Online!!! - YouTube",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.3SkP9vShMrGvx0LMTnCxxwHaEK&pid=Api",
                "datePublished": "2021-09-13T12:08:00.0000000Z",
                "contentUrl": "https://i.ytimg.com/vi/eukUOMkrkis/maxresdefault.jpg",
                "hostPageUrl": "https://www.youtube.com/watch?v=eukUOMkrkis",
                "contentSize": "136117 B",
                "encodingFormat": "jpeg",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=eukUOMkrkis",
                "width": 1280,
                "height": 720,
                "thumbnail": {
                    "width": 474,
                    "height": 266
                }
            }
        ]
    },
    "news": {
        "id": "https://api.bing.microsoft.com/api/v7/#News",
        "readLink": "https://api.bing.microsoft.com/api/v7/news/search?q=GTAV",
        "value": [
            {
                "contractualRules": [
                    {
                        "_type": "ContractualRules/TextAttribution",
                        "text": "The Verge on MSN.com"
                    }
                ],
                "name": "Here’s what you can expect from GTAV on PS5 and Xbox Series X",
                "url": "https://www.msn.com/en-us/entertainment/gaming/here-e2-80-99s-what-you-can-expect-from-gtav-on-ps5-and-xbox-series-x/ar-AAUBJSZ",
                "image": {
                    "contentUrl": "https://cdn.vox-cdn.com/thumbor/iNSaPvkI5SMTyI8bPXz4QOk5E5g=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23287880/Grand_Theft_Auto_V___3_4_2022___Image_2.jpg",
                    "thumbnail": {
                        "contentUrl": "https://www.bing.com/th?id=OVFT.KAmGi1LD2mN_Y6PShZcgFy&pid=News",
                        "width": 700,
                        "height": 366
                    }
                },
                "description": "The PS5 and Xbox Series X / S versions of Grand Theft Auto V will launch on Tuesday, March 15th, as will a separate version of GTA Online that — for the first time — won’t require the base game to play.",
                "about": [
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/57d60610-c99e-4850-5668-e849f7eaab97",
                        "name": "Grand Theft Auto V"
                    },
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/595e44be-f445-d997-7d70-92b9f35592e2",
                        "name": "Xbox"
                    }
                ],
                "mentions": [
                    {
                        "name": "Grand Theft Auto V"
                    },
                    {
                        "name": "Xbox"
                    },
                    {
                        "name": "The Verge"
                    }
                ],
                "provider": [
                    {
                        "_type": "Organization",
                        "name": "The Verge on MSN.com",
                        "image": {
                            "thumbnail": {
                                "contentUrl": "https://www.bing.com/th?id=ODF.Eo5m7BPNFOPugCZcNswMBg&pid=news"
                            }
                        }
                    }
                ],
                "datePublished": "2022-03-04T14:59:54.0000000Z",
                "category": "ScienceAndTechnology"
            },
            {
                "contractualRules": [
                    {
                        "_type": "ContractualRules/TextAttribution",
                        "text": "Impulse Gamer"
                    }
                ],
                "name": "Pre-Load GTAV and GTA Online on PlayStation 5 and Xbox Series X|S",
                "url": "https://www.impulsegamer.com/pre-load-gtav-and-gta-online-on-playstation-5-and-xbox-series-xs/",
                "image": {
                    "contentUrl": "https://www.impulsegamer.com/articles/wp-content/uploads/2022/03/gtvaps5.jpg",
                    "thumbnail": {
                        "contentUrl": "https://www.bing.com/th?id=OVFT.QQ7x-W2zX2U24LaJwvzzji&pid=News",
                        "width": 700,
                        "height": 393
                    }
                },
                "description": "Pre-loading for Grand Theft Auto V and Grand Theft Auto Online is now available for those who’ve pre-ordered digitally through either the PlayStation 5",
                "about": [
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/595e44be-f445-d997-7d70-92b9f35592e2",
                        "name": "Xbox"
                    },
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/a48e2750-0e41-f081-0bd7-f3c1c45acfdc",
                        "name": "PlayStation"
                    },
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/9a2e429a-1616-ea4a-c9b0-98f166223f9e",
                        "name": "Impulse"
                    }
                ],
                "provider": [
                    {
                        "_type": "Organization",
                        "name": "Impulse Gamer",
                        "image": {
                            "thumbnail": {
                                "contentUrl": "https://www.bing.com/th?id=ODF.qat6p2-Pn4KBdUfWqhmZ1w&pid=news"
                            }
                        }
                    }
                ],
                "datePublished": "2022-03-09T08:43:00.0000000Z",
                "category": "ScienceAndTechnology"
            },
            {
                "contractualRules": [
                    {
                        "_type": "ContractualRules/TextAttribution",
                        "text": "DNA India on MSN.com"
                    }
                ],
                "name": "GTA 5 new-gen version releasing on this date: Check details, India price for PS5, Xbox Series X|S",
                "url": "https://www.msn.com/en-in/finance/news/gta-5-new-gen-version-releasing-on-this-date-check-details-india-price-for-ps5-xbox-series-xs/ar-AAUVrNy",
                "image": {
                    "contentUrl": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/03/11/1038697-gta.jpg",
                    "thumbnail": {
                        "contentUrl": "https://www.bing.com/th?id=OVFT.iKpQf5C-d0hdCS6GTN6Xby&pid=News",
                        "width": 640,
                        "height": 360
                    }
                },
                "description": "Check details, India price for PS5, Xbox Series X|S - GTA 5 PS5 version (both the Story Mode and GTA Online) is priced at Rs 2,799.",
                "about": [
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/85fa63d3-9596-adb9-b4eb-502273d84f56",
                        "name": "India"
                    },
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/595e44be-f445-d997-7d70-92b9f35592e2",
                        "name": "Xbox"
                    },
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/57d60610-c99e-4850-5668-e849f7eaab97",
                        "name": "Grand Theft Auto V"
                    }
                ],
                "mentions": [
                    {
                        "name": "India"
                    },
                    {
                        "name": "Xbox"
                    },
                    {
                        "name": "Grand Theft Auto V"
                    }
                ],
                "provider": [
                    {
                        "_type": "Organization",
                        "name": "DNA India on MSN.com",
                        "image": {
                            "thumbnail": {
                                "contentUrl": "https://www.bing.com/th?id=ODF.l3PijP0rqEq7PZGCGxOfkQ&pid=news"
                            }
                        }
                    }
                ],
                "datePublished": "2022-03-11T10:12:07.0000000Z",
                "category": "ScienceAndTechnology"
            },
            {
                "contractualRules": [
                    {
                        "_type": "ContractualRules/TextAttribution",
                        "text": "Capsule Computers"
                    }
                ],
                "name": "GTAV and GTA Online Pre-Loading Available Now, Plus New Details on GTA Online Career Builder, Migration Bonuses, and More",
                "url": "https://www.capsulecomputers.com.au/2022/03/gtav-and-gta-online-pre-loading-available-now-plus-new-details-on-gta-online-career-builder-migration-bonuses-and-more/",
                "description": "Pre-Load GTAV and GTA Online on PlayStation 5 and Xbox Series X\\|S – Plus Details on the New GTA Online Career Builder. Pre-loading for Grand Theft Auto V and Grand Theft Auto On",
                "about": [
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/7d9d9264-71b9-fa77-b83a-50b0a994ac60",
                        "name": "Front Mission: Online"
                    }
                ],
                "provider": [
                    {
                        "_type": "Organization",
                        "name": "Capsule Computers"
                    }
                ],
                "datePublished": "2022-03-09T13:51:00.0000000Z",
                "category": "ScienceAndTechnology"
            },
            {
                "contractualRules": [
                    {
                        "_type": "ContractualRules/TextAttribution",
                        "text": "Geeky Gadgets"
                    }
                ],
                "name": "PlayStation 5 GTAV and GTA Online games launch March 15th",
                "url": "https://www.geeky-gadgets.com/playstation-5-gtav-07-03-2022/",
                "description": "Rockstar Games has announced that their GTAV and GTA Online games will be launching on the PlayStation 5 console and available to play later this month",
                "about": [
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/57d60610-c99e-4850-5668-e849f7eaab97",
                        "name": "Grand Theft Auto V"
                    },
                    {
                        "readLink": "https://api.bing.microsoft.com/api/v7/entities/2b485a35-f5af-47ad-5cee-6c53599255fe",
                        "name": "PlayStation"
                    }
                ],
                "provider": [
                    {
                        "_type": "Organization",
                        "name": "Geeky Gadgets",
                        "image": {
                            "thumbnail": {
                                "contentUrl": "https://www.bing.com/th?id=ODF.vbr-aH29hDU8jn0wmHr6Ow&pid=news"
                            }
                        }
                    }
                ],
                "datePublished": "2022-03-07T10:05:00.0000000Z",
                "category": "ScienceAndTechnology"
            }
        ]
    },
    "videos": {
        "id": "https://api.bing.microsoft.com/api/v7/#Videos",
        "readLink": "https://api.bing.microsoft.com/api/v7/videos/search?q=gtav",
        "webSearchUrl": "https://www.bing.com/videos/search?q=gtav",
        "isFamilyFriendly": true,
        "value": [
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=5D3E19A1F4F69E6485EE5D3E19A1F4F69E6485EE",
                "name": "Grand Theft Auto V and Grand Theft Auto Online - PlayStation Showcase 2021 Trailer | PS5",
                "description": "Experience the world of Grand Theft Auto V in brand new ways when GTAV and GTA Online come to PlayStation 5 in March 2022 - with additional bonuses now available for PlayStation Plus members. Rated Mature: Blood and Gore, Intense Violence, Mature Humor, Nudity, Strong Language, Strong Sexual Content, Use of Drugs and Alcohol",
                "thumbnailUrl": "https://tse4.mm.bing.net/th?id=OVP.SdlBuAbKiExzi2GcPF200QEsCH&pid=Api",
                "datePublished": "2021-09-09T20:20:52.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=xQT-O1nMSBU",
                "hostPageUrl": "https://www.youtube.com/watch?v=xQT-O1nMSBU",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=xQT-O1nMSBU",
                "width": 1280,
                "height": 720,
                "duration": "PT1M18S",
                "motionThumbnailUrl": "https://tse4.mm.bing.net/th?id=OM1.7oVknvb0oRk-XQ_1639920371&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/xQT-O1nMSBU?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 3434635,
                "thumbnail": {
                    "width": 160,
                    "height": 72
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=57A47CF2182EFD7490AF57A47CF2182EFD7490AF",
                "name": "TOP 100 FUNNIEST GTA 5 FAILS! (Best GTA 5 Funny Moments)",
                "description": "GTA 5 Funny Moments & Fails Gameplay! Grand Theft Auto V Thug life moments Best clips from the last 10 episodes! Submit a GTA 5 clip! https://bit.ly/3ml6PuO BIG EPISODES: Top 100 FUNNIEST GTA 5 FAILS! (last 10 episodes) https://youtu.be/520r2UtG5JU Top 500 BEST GTA 5 Fails of all time! (MARATHON): https://youtu.be/aZooC7szES8 Top 100 GTA 5 Wins ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OVP.EPRQ5bmktwC753fn2DYnEAEsCo&pid=Api",
                "datePublished": "2021-11-06T13:00:03.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=3f864CkiiSQ",
                "hostPageUrl": "https://www.youtube.com/watch?v=3f864CkiiSQ",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=3f864CkiiSQ",
                "width": 1280,
                "height": 720,
                "duration": "PT32M57S",
                "motionThumbnailUrl": "https://tse1.mm.bing.net/th?id=OM1.r5B0_S4Y8nykVw_1638759858&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/3f864CkiiSQ?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 286666,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=61CBE01FCAA365E9ADFE61CBE01FCAA365E9ADFE",
                "name": "GTA V Custom games that made us LOL.",
                "description": "Cars VS Rockets with Narrator Gabby and Mully Socials: Twitter: https://twitter.com/sauceddie Instagram: https://www.instagram.com/sauceddie TikTok: https://www.tiktok.com/@eddievr Merch: https://teespring.com/stores/eddievr-merch-shop Discord: https://discord.gg/DFWu7mF My friends: Mully: https://www.youtube.com/channel ...",
                "thumbnailUrl": "https://tse4.mm.bing.net/th?id=OVP.3PJcfgJjoruWwyjLj6d7vgEsCo&pid=Api",
                "datePublished": "2021-09-18T16:52:59.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=ubcnlRh1mjw",
                "hostPageUrl": "https://www.youtube.com/watch?v=ubcnlRh1mjw",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=ubcnlRh1mjw",
                "width": 1280,
                "height": 720,
                "duration": "PT21M16S",
                "motionThumbnailUrl": "https://tse4.mm.bing.net/th?id=OM2._q3pZaPKH-DLYQ_1645139280&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/ubcnlRh1mjw?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 752427,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=CBDE9C82933CD565109DCBDE9C82933CD565109D",
                "name": "GTA V Funniest death run with The Boys.",
                "description": "We laughed so hard at this. Socials: Twitter: https://twitter.com/sauceddie Instagram: https://www.instagram.com/sauceddie TikTok: https://www.tiktok.com/@eddievr Merch: https://teespring.com/stores/eddievr-merch-shop Discord: https://discord.gg/DFWu7mF My friends: Mully: https://www.youtube.com/channel/UClS6zI81d6YaDy7yLjrCzEw Juicy: https ...",
                "thumbnailUrl": "https://tse4.mm.bing.net/th?id=OVP.CceG9FehBAAodKN9q0SiGwEsDh&pid=Api",
                "datePublished": "2021-08-21T22:44:46.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=m5mdgj1RQD8",
                "hostPageUrl": "https://www.youtube.com/watch?v=m5mdgj1RQD8",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=m5mdgj1RQD8",
                "width": 1280,
                "height": 720,
                "duration": "PT19M13S",
                "motionThumbnailUrl": "https://tse4.mm.bing.net/th?id=OM1.nRBl1TyTgpzeyw_1635455221&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/m5mdgj1RQD8?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 762981,
                "thumbnail": {
                    "width": 160,
                    "height": 120
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=6C378DFD5E8B8330CB126C378DFD5E8B8330CB12",
                "name": "GTA 5 Single Player DLC Now Available After 7 Years - Facts and Glitches You Don't Know #51",
                "description": "Rockstar created exclusive DLC content for Franklin, Michael, and Trevor. This content was gated away from the overwhelming majority of players...until recently. This once exclusive content is now availabe for all to enjoy. In this video I show all this content and how to acquire it including The Wildlife Photography Challenge, Monkey Mosaics ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OVP.KPibbaXOdGf_rGUvQ4wWhwEsCo&pid=Api",
                "datePublished": "2021-11-01T12:31:50.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=Qz6v4u64LBg",
                "hostPageUrl": "https://www.youtube.com/watch?v=Qz6v4u64LBg",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=Qz6v4u64LBg",
                "width": 1280,
                "height": 720,
                "duration": "PT1H25M32S",
                "motionThumbnailUrl": "https://tse1.mm.bing.net/th?id=OM2.Esswg4te_Y03bA_1645510740&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/Qz6v4u64LBg?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 1645849,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=70AFCCDD5E92CF5ED6AF70AFCCDD5E92CF5ED6AF",
                "name": "Non Stop Laughter in GTA V Custom games.",
                "description": "Funny Moments in GTA V custom games. Socials: Twitter: https://twitter.com/sauceddie Instagram: https://www.instagram.com/sauceddie TikTok: https://www.tiktok.com/@eddievr Merch: https://teespring.com/stores/eddievr-merch-shop Discord: https://discord.gg/DFWu7mF My friends: Mully: https://www.youtube.com/channel/UClS6zI81d6YaDy7yLjrCzEw Juicy ...",
                "thumbnailUrl": "https://tse1.mm.bing.net/th?id=OVP.z6BlCH8E-G7-QKpiCkTr0wEsCo&pid=Api",
                "datePublished": "2021-08-22T21:10:59.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=Xp2i-EkvCYY",
                "hostPageUrl": "https://www.youtube.com/watch?v=Xp2i-EkvCYY",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=Xp2i-EkvCYY",
                "width": 1280,
                "height": 720,
                "duration": "PT28M45S",
                "motionThumbnailUrl": "https://tse1.mm.bing.net/th?id=OM.r9Zez5Je3cyvcA_1645451985&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/Xp2i-EkvCYY?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 1985292,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=FBCF918100A2BBA5C2CCFBCF918100A2BBA5C2CC",
                "name": "How to Easily Downgrade GTA V 2372 From 2545 (Critical Error Fixed) #LSPDFR #GTAV",
                "description": "How To Easily Revert GTAV back to 2372 from 2545 | #LSPDFR #GTAV THANK YOU ALL FOR 34,000 SUBSCRIBERS GTAV Revert Link : https://www.mediafire.com/file/lwo3x4avztncgee/GTA5Revert.rar/file Join this channel to get access to awesome perks: https://www.youtube.com/channel/UCyjwa7cgrRVdgk6i_hERl2g/join Disclaimer : This Is not Real Life Law ...",
                "thumbnailUrl": "https://tse4.mm.bing.net/th?id=OVP.CIfFZejvz1wKeYRkulU1PQHgFo&pid=Api",
                "datePublished": "2021-12-16T01:41:53.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=G1ynFtYQbVw",
                "hostPageUrl": "https://www.youtube.com/watch?v=G1ynFtYQbVw",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=G1ynFtYQbVw",
                "width": 1280,
                "height": 720,
                "duration": "PT8M59S",
                "motionThumbnailUrl": "https://tse4.mm.bing.net/th?id=OM2.zMKlu6IAgZHP-w&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/G1ynFtYQbVw?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 22327,
                "thumbnail": {
                    "width": 160,
                    "height": 120
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=3306EB485B23E60D1B6D3306EB485B23E60D1B6D",
                "name": "GTA V funniest custom race with the boys.",
                "description": "they can't catch a mexican! Socials: Twitter: https://twitter.com/sauceddie Instagram: https://www.instagram.com/sauceddie TikTok: https://www.tiktok.com/@eddievr Merch: https://teespring.com/stores/eddievr-merch-shop Discord: https://discord.gg/DFWu7mF My friends: Mully: https://www.youtube.com/channel/UClS6zI81d6YaDy7yLjrCzEw Juicy: https ...",
                "thumbnailUrl": "https://tse2.mm.bing.net/th?id=OVP.fa88juKlHcL724sTtVXr_QEsCo&pid=Api",
                "datePublished": "2021-12-11T23:22:46.0000000",
                "publisher": [
                    {
                        "name": "YouTube"
                    }
                ],
                "isAccessibleForFree": true,
                "contentUrl": "https://www.youtube.com/watch?v=_oSbC1BoSrg",
                "hostPageUrl": "https://www.youtube.com/watch?v=_oSbC1BoSrg",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.youtube.com/watch?v=_oSbC1BoSrg",
                "width": 1280,
                "height": 720,
                "duration": "PT18M38S",
                "motionThumbnailUrl": "https://tse2.mm.bing.net/th?id=OM1.bRsN5iNbSOsGMw_1640551919&pid=Api",
                "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/_oSbC1BoSrg?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 457668,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=F135F39AC63E4F6C07DEF135F39AC63E4F6C07DE",
                "name": "Assassination Investor - GTA 5 Wiki Guide",
                "description": "Throughout the GTA 5 story, Lester will offer Franklin missions in which he'll have to assassinate a target. These targets have a huge role to play in the",
                "thumbnailUrl": "https://tse2.mm.bing.net/th?id=OVP.iWOXsVaFswbNNtWj_PzqwAAKAG&pid=Api",
                "datePublished": "2021-10-05T17:56:21.0000000",
                "publisher": [
                    {
                        "name": "IGN"
                    }
                ],
                "contentUrl": "https://www.ign.com/wikis/gta-5/Assassination_Investor",
                "hostPageUrl": "https://www.ign.com/wikis/gta-5/Assassination_Investor",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https://www.ign.com/wikis/gta-5/Assassination_Investor",
                "width": 10,
                "height": 6,
                "duration": "PT15M59S",
                "allowHttpsEmbed": true,
                "thumbnail": {
                    "width": 10,
                    "height": 6
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https://www.bing.com/videos/search?q=gtav&view=detail&mid=31BA80BBA5E643D8A25E31BA80BBA5E643D8A25E",
                "name": "Grand Theft Auto V",
                "description": "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
                "thumbnailUrl": "https://tse3.mm.bing.net/th?id=OVF.Rc1E%2fDSoMx3icobR6p7MPQ&pid=Api",
                "datePublished": "2015-04-14T07:00:00.0000000",
                "publisher": [
                    {
                        "name": "steampowered.com"
                    }
                ],
                "contentUrl": "https://store.steampowered.com/app/271590/grand_theft_auto_v/",
                "hostPageUrl": "https://store.steampowered.com/app/271590/grand_theft_auto_v/",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https://store.steampowered.com/app/271590/grand_theft_auto_v/",
                "width": 184,
                "height": 103,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "isSuperfresh": true
            }
        ],
        "scenario": "List"
    },
    "rankingResponse": {
        "mainline": {
            "items": [
                {
                    "answerType": "WebPages",
                    "resultIndex": 0,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.0"
                    }
                },
                {
                    "answerType": "Images",
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#Images"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 1,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.1"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 2,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.2"
                    }
                },
                {
                    "answerType": "Videos",
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#Videos"
                    }
                },
                {
                    "answerType": "News",
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#News"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 3,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.3"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 4,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.4"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 5,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.5"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 6,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.6"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 7,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.7"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 8,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.8"
                    }
                }
            ]
        },
        "sidebar": {
            "items": [
                {
                    "answerType": "Images"
                },
                {
                    "answerType": "Entities",
                    "resultIndex": 0,
                    "value": {
                        "id": "https://api.bing.microsoft.com/api/v7/#Entities.0"
                    }
                },
                {
                    "answerType": "WebPages"
                }
            ]
        }
    }
}
```
</details>

#### `http://localhost:3000/suggest?q={query}`
This endpoint is a GET call that returns a json for the query provided. This endpoint is an implementation of Bing's Auto suggest based on the query.

*Sample Request*:
`http://localhost:3000/suggest?q=sail`

<details>
  <summary>Sample Response</summary>

```json
{
  "_type": "Suggestions",
  "queryContext": {
    "originalQuery": "sail"
  },
  "suggestionGroups": [
    {
      "name": "Web",
      "searchSuggestions": [
        {
          "url": "https://www.bing.com/search?q=sailor+moon&FORM=USBAPI",
          "displayText": "sailor moon",
          "query": "sailor moon",
          "searchKind": "WebSearch"
        },
        {
          "url": "https://www.bing.com/search?q=sailpoint&FORM=USBAPI",
          "displayText": "sailpoint",
          "query": "sailpoint",
          "searchKind": "WebSearch"
        },
        {
          "url": "https://www.bing.com/search?q=sailrite&FORM=USBAPI",
          "displayText": "sailrite",
          "query": "sailrite",
          "searchKind": "WebSearch"
        },
        {
          "url": "https://www.bing.com/search?q=sailboats+for+sale&FORM=USBAPI",
          "displayText": "sailboats for sale",
          "query": "sailboats for sale",
          "searchKind": "WebSearch"
        },
        {
          "url": "https://www.bing.com/search?q=sailor&FORM=USBAPI",
          "displayText": "sailor",
          "query": "sailor",
          "searchKind": "WebSearch"
        },
        {
          "url": "https://www.bing.com/search?q=sailor+brinkley+cook&FORM=USBAPI",
          "displayText": "sailor brinkley cook",
          "query": "sailor brinkley cook",
          "searchKind": "WebSearch"
        },
        {
          "url": "https://www.bing.com/search?q=sailfish&FORM=USBAPI",
          "displayText": "sailfish",
          "query": "sailfish",
          "searchKind": "WebSearch"
        },
        {
          "url": "https://www.bing.com/search?q=sailing+doodles&FORM=USBAPI",
          "displayText": "sailing doodles",
          "query": "sailing doodles",
          "searchKind": "WebSearch"
        }
      ]
    }
  ]
}
```
</details>