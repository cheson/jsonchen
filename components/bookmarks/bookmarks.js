jsonchen.controller('BookmarksController', ['$scope', '$timeout',
    function ($scope, $timeout) {
        $scope.bookmarks = {
            "https://stackoverflow.com/questions/4202161/google-account-logout-and-redirect?newreg=9d0ba67d33724493ac564675d254d8cd": "openid - google account logout and redirect - Stack Overflow",
            "http://www.nytimes.com/2015/03/01/opinion/sunday/how-we-learned-to-kill.html?src=me&assetType=opinion&assetType=opinion&_r=0&gwh=EE2FD62FAC78EAC6F5F4244A41064A4F&gwt=pay&assetType=opinion": "How We Learned to Kill - NYTimes.com",
            "http://chronicle.com/article/What-Are-You-Going-to-Do-With/124651/": "What Are You Going to Do With That? - The Chronicle Review - The Chronicle of Higher Education",
            "https://www.youtube.com/watch?annotation_id=annotation_2327317767&feature=iv&src_vid=py5byOOHZM8&v=C_zFhWdM4ic": "How Blurs & Filters Work - Computerphile - YouTube",
            "http://www.studyspanish.com/lessons/verb-flashcards.htm": "Verb Flashcards",
            "http://git-scm.com/": "GitSCM",
            "http://mic.com/articles/102220/vote-with-your-wallet-companies-to-avoid-if-you-support-equality-in-america?utm_source=huffingtonpost.com&utm_medium=referral&utm_campaign=pubexchange_facebook": "14 Companies to Avoid If You Support Equality in America - Mic",
            "https://vimeo.com/56298775#sthash.vRBu3izG.j9KVgJ82.dpuf": "Moonwalk on Vimeo",
            "https://www.youtube.com/watch?v=n1GUQVo1Lps": "GYM WILDLIFE - YouTube",
            "https://www.youtube.com/watch?v=lIbcBZubsUY": "SEE THE WORLD 2: ALASKA - YouTube",
            "https://askleo.com/why_do_i_get_odd_characters_instead_of_quotes_in_my_documents/": "Why do I get odd characters instead of quotes in my documents? - Ask Leo!",
            "http://www.frenchtutorial.com/en/learn-french/present/cover": "Cover - The French Tutorial",
            "https://infogr.am/": "infogram",
            "http://css-tricks.com/almanac/": "CSS Almanac | CSS-Tricks",
            "http://lukeandkatgotoalaska.blogspot.com/2015_05_01_archive.html": "Luke, Kat and Thomas Go Alaskan : May 2015",
            "http://qntm.org/files/re/re.html": "Regular Expressions",
            "https://www.hackerrank.com/onboarding/1": "Programming Problems and Competitions :: HackerRank",
            "http://www.inc.com/christine-lagorio/buzzfeed-secret-growth-weapon.html?cid=sf01001": "The Data Genius Behind BuzzFeed's Success | Inc.com",
            "http://www.write-out-loud.com/public-speaking-games.html": "Public Speaking Games: Speech Activities for Confidence and Skills",
            "http://www.si.com/nba/2014/11/13/ryan-anderson-gia-allemand": "Ryan Anderson - Gia Allemand | SI.com",
            "https://www.youtube.com/watch?v=Bq1iXU1WoTk": "minimum max - YouTube",
            "https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures?language=en": "Fei-Fei Li: How we're teaching computers to understand pictures | TED Talk | TED.com",
            "http://www.nytimes.com/2015/02/15/magazine/how-one-stupid-tweet-ruined-justine-saccos-life.html?_r=0": "How One Stupid Tweet Blew Up Justine Sacco's Life - NYTimes.com",
            "http://www.nytimes.com/2015/01/11/fashion/no-37-big-wedding-or-small.html": "No. 37: Big Wedding or Small? - NYTimes.com",
            "http://www.mergeconflict.fm/": "Merge Conflict",
            "https://www.facebook.com/rodrigocomrua/videos/818560008272726/": "Rodrigo Pires - dance",
            "http://www.latimes.com/opinion/op-ed/la-oe-guerrero-immigration-family-separation-20141116-story.html": "'Orange is the New Black' actress: My parents were deported - LA Times",
            "https://www.sitepoint.com/deploy-rest-api-in-30-mins-mlab-heroku/?utm_source=sitepoint&utm_medium=relatedsidebar&utm_term=javascript": "Deploy Your Own REST API in 30 Mins Using mLab and Heroku",
            "https://www.facebook.com/businessinsider/videos/10153737987304071/": "failure",
            "https://www.facebook.com/buzzfeedtasty/videos/1690010074584968/": "Tasty - Cocoa mixes",
            "http://www.dailydot.com/lol/stupid-phone-number-entry-field-challenge/": "The race to find the dumbest way to enter your phone number on a website",
            "http://theghiblistudio.tumblr.com/post/49246903971/if-youre-ever-bored-heres-a-list-of-studio": "Ghibli Tears - If you're ever bored, here's a list of Studio Ghibli films you can watch for free.",
            "http://www.newyorker.com/magazine/2012/07/23/the-cheaters-guide-to-love?utm_source=tny&utm_campaign=generalsocial&utm_medium=facebook&mbid=social_facebook": "The Cheater's Guide to Love",
            "http://www.geeksforgeeks.org/tag/backtracking/": "GeeksforGeeks",
            "http://gawker.com/justine-sacco-is-good-at-her-job-and-how-i-came-to-pea-1653022326": "Justine Sacco Is Good at Her Job, and How I Came To Peace With Her",
            "http://www.iwillteachyoutoberich.com/blog/": "The 'I Will Teach You To Be Rich' Blog",
            "https://www.facebook.com/video.php?v=10152975186402211": "how i feel in language classes",
            "https://embed.theguardian.com/embed/video/commentisfree/video/2015/jan/21/naked-pictures-this-is-what-i-did-revenge-porn-emma-holten-video": "Someone stole naked pictures of me. This is what I did about it - video",
            "https://projecteuler.net/": "About - Project Euler",
            "http://web.stanford.edu/dept/icenter/orc/nat_sec_ug.html": "Boren Undergraduate Scholarship",
            "http://www.nytimes.com/2014/09/04/world/americas/mexico-strides-for-endangered-wolves.html": "Mexico: Strides for Endangered Wolves - NYTimes.com",
            "https://bitbucket.org/": "Bitbucket",
            "http://ianlunn.github.io/Hover/#effects": "Hover.css - A collection of CSS3 powered hover effects",
            "http://www.nytimes.com/2016/07/15/opinion/with-obama-the-personal-is-presidential.html?smprod=nytcore-iphone&smid=nytcore-iphone-share&_r=0": "With Obama, the Personal Is Presidential - The New York Times",
            "http://engineering.mit.edu/ask/why-can%E2%80%99t-we-put-metal-objects-microwave": "Why can't we put metal objects in a microwave? | MIT School of Engineering",
            "http://www.princeton.edu/~gjbell/SummerArabic": "Summer Arabic Study",
            "http://www.openvim.com/": "Interactive Vim tutorial",
            "https://www.youtube.com/watch?v=MFzDaBzBlL0": "The Backwards Brain Bicycle - Smarter Every Day 133 - YouTube",
            "http://www.patheos.com/blogs/lovejoyfeminism/2014/10/yes-i-bring-my-poor-children-trick-or-treating-in-your-rich-neighborhood.html": "Yes I Take My Poor Children Trick-or-Treating in Your Rich Neighborhood",
            "http://thecafesucrefarine.com/2013/08/best-ever-homemade-flour-tortillas/": "Best Ever Homemade Flour Tortillas",
            "http://www.fws.gov/southwest/es/mexicanwolf/": "The Mexican Gray Wolf Recovery Program Home",
            "http://www.tutorialspoint.com/java/java_collections.htm": "Java - Collections",
            "http://www.npr.org/blogs/alltechconsidered/2014/07/03/328137640/surrounded-by-digital-distractions-we-cant-even-stop-to-think": "Surrounded By Digital Distractions, We Can't Even Stop To Think : All Tech Considered : NPR",
            "https://quip.com/ZbXoAEKlVPXW": "Assignment 3: tsh - the tiny shell - Quip",
            "https://developers.google.com/google-apps/spreadsheets/": "Google Sheets API version 3.0 - Google Apps Platform - Google Developers",
            "http://www.vox.com/2015/3/6/8156221/best-essays-death-dying": "5 moving, beautiful essays about death and dying - Vox",
            "https://www.cocoacontrols.com/": "Custom Controls for iOS and OS X - Cocoa Controls",
            "https://www.youtube.com/watch?v=8DSZBAjZ4OY": "Epic Music Mix | An Adventure Vol. 01 (1-hour Epic Fantasy Action) - EpicMusicVn - YouTube",
            "http://learnvimscriptthehardway.stevelosh.com/chapters/07.html": "Editing Your Vimrc / Learn Vimscript the Hard Way",
            "http://osxdaily.com/2010/09/06/change-your-mac-hostname-via-terminal/": "changing hostname",
            "http://alignedleft.com/tutorials/d3": "D3 - Scott Murray - alignedleft",
            "https://cloud.google.com/vision/reference/rest/v1/images/annotate#locationinfo": "google cloud vision api",
            "http://www.buzzfeed.com/sarahmathews/how-to-get-your-green-card-in-america#.hiKdbOQRrB": "How To Get Your Green Card In America",
            "http://en.wikipedia.org/wiki/Mexican_wolf": "Mexican wolf - Wikipedia, the free encyclopedia",
            "https://www.facebook.com/ozzymanreviews/videos/973231332712734/": "Ozzy Man Reviews: Indecisive Lioness Hunter - Ozzy Man Reviews",
            "https://www.facebook.com/NBCNews/videos/1241017225918305/": "when are they snapping photos",
            "http://ufldl.stanford.edu/tutorial/supervised/LinearRegression/": "UFLDL Tutorial",
            "http://tabletmag.com/jewish-life-and-religion/187316/meet-the-mormons": "Why Jews Should See the New Mormon Documentary - Tablet Magazine",
            "http://proof.nationalgeographic.com/2014/04/25/fritz-hoffmanns-mojo-bag/": "this life",
            "http://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/matrix-spaces-rank-1-small-world-graphs/": "Matrix Spaces; Rank 1; Small World Graphs | Unit I: Ax = b and the Four Subspaces | Linear Algebra | Mathematics | MIT OpenCourseWare",
            "https://www.youtube.com/results?search_query=attraction+shadow+theatre+group": "attraction shadow theatre group - YouTube",
            "http://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/": "Linear Algebra | Mathematics | MIT OpenCourseWare",
            "http://www.ee.surrey.ac.uk/Teaching/Unix/unix3.html": "UNIX Tutorial",
            "https://github.com/ipython/ipython/wiki/A-gallery-of-interesting-IPython-Notebooks": "A gallery of interesting IPython Notebooks - ipython/ipython Wiki",
            "http://www.regexplanet.com/": "RegexPlanet - Online Regular Expression (Regex) Testing and Cookbook for: Go, Haskell, Java, JavaScript, .Net, Perl, PHP, Python, Ruby, Tcl & XRegExp",
            "http://london-monaco.cc/": "London Monaco",
            "https://www.youtube.com/watch?v=GeyDf4ooPdo": "Anti-Gravity Wheel? - YouTube",
            "http://vimeo.com/118946875": "Sergei Polunin, \"Take Me to Church\" by Hozier, Directed by David LaChapelle on Vimeo",
            "http://www.cplusplus.com/forum/articles/10627/": "Headers and Includes: Why and How - C++ Forum",
            "http://culturalvistas.org/programs-for-students-and-professionals/professional-fellowships/congress-bundestag-youth-exchange-for-young-professionals": "Congress-Bundestag Youth Exchange for Young Professionals",
            "http://hgs.co.jp/en/garden-art/xylophone-of-forest.html": "Hokkaido Garden Show 2015 - Xylophone of forest",
            "http://everydayfeminism.com/2015/02/on-internalized-racism/": "On Internalized Racism: 4 Lessons I Learned as an Undercover Asian - Everyday Feminism",
            "http://stackoverflow.com/questions/265960/best-way-to-strip-punctuation-from-a-string-in-python": "stripping punctuation & efficiency",
            "http://www.bbc.com/future/story/20120920-are-we-running-out-of-fish": "BBC - Future - How the world's oceans could be running out of fish",
            "https://www.youtube.com/watch?v=WrahQpIWD08": "Louis C.K. \"If God Came Back\" - YouTube",
            "http://brooksandrew.github.io/simpleblog/articles/new-york-times-api-to-mongodb/": "New York Times Article Search API to MongoDB - andrew brooks",
            "https://www.facebook.com/sorrxenderson/videos/984394744932276/": "HELLO Cover - Picco Sorrx Enderson",
            "https://www.youtube.com/watch?v=OBuhE9eg0Z4": "Easy French 14 - Schools in France - YouTube",
            "http://blog.echen.me/2011/08/22/introduction-to-latent-dirichlet-allocation/": "Introduction to Latent Dirichlet Allocation",
            "https://www.youtube.com/watch?v=uihBwtPIBxM": "Finding the Edges (Sobel Operator) - Computerphile - YouTube",
            "http://graphics.latimes.com/product-of-mexico-camps/": "Product of Mexico: Hardship on Mexico's farms, a bounty for U.S. tables - Los Angeles Times",
            "https://codeplanet.io/how-to-make-a-single-page-website/": "How to Make a Single Page Website",
            "https://signalvnoise.com/posts/3124-give-it-five-minutes": "Give it five minutes - Signal v. Noise",
            "http://petapixel.com/2013/10/25/spectacular-time-lapse-born-13000-miles-10000-photos/": "Spectacular Time-Lapse Born Out of 13,000 Miles and 10,000 Photos",
            "http://fooledbyrandomness.com/minority.pdf": "fooledbyrandomness.com/minority.pdf",
            "https://www.youtube.com/watch?v=IeMlsZpW8IQ&feature=youtu.be": "Speed Dating Strangers on Dexter Lawn - Cal Poly ASI Elections 2015 - YouTube",
            "https://www.youtube.com/watch?v=mNiqpBNE9ik&feature=youtu.be": "Jon Stewart Takes Over Colbert's Late Show Desk - YouTube",
            "https://www.youtube.com/watch?v=KM4Xe6Dlp0Y": "Cameron Russell: Looks aren't everything. Believe me, I'm a model. - YouTube",
            "http://www.gregreda.com/2013/03/03/web-scraping-101-with-python/": "Web Scraping 101 with Python",
            "http://www.buzzfeed.com/jenniferschaffer/i-am-i-am-i-am": "51 Of The Most Beautiful Sentences In Literature",
            "http://smallpdf.com/jpg-to-pdf": "JPG to PDF - Convert your Images to PDFs online for free!",
            "https://www.youtube.com/watch?v=YCyEr4jRHRY": "synchro dance",
            "http://gnuu.org/2009/09/18/writing-your-own-toy-compiler/": "Writing Your Own Toy Compiler Using Flex, Bison and LLVM (gnuu.org)",
            "https://www.dataquest.io/blog/python-data-visualization-libraries/": "Python data visualization: Comparing 7 tools",
            "http://cocoapods.org/": "CocoaPods.org - The Dependency Manager for iOS & Mac projects.",
            "http://www.vox.com/2014/5/15/5720596/how-wall-street-recruits-so-many-insecure-ivy-league-grads": "How Wall Street recruits so many insecure Ivy League grads - Vox",
            "http://www.yesandyes.org/2015/12/ways-to-catch-up-with-friends.html": "15 ways to catch up with friends that aren't grabbing coffee or a cocktail - Yes and Yes",
            "http://verekia.com/less-css/dont-read-less-css-tutorial-highly-addictive/": "DON'T READ this Less CSS Tutorial (Highly Addictive) | Jonathan Verrecchia",
            "http://www.workaway.info/792368466871-en.html": "host egypt",
            "http://www.pyimagesearch.com/2015/10/12/scraping-images-with-python-and-scrapy/": "Scraping images with Python and Scrapy - PyImageSearch",
            "http://www.nytimes.com/2016/05/01/opinion/sunday/stop-saying-i-feel-like.html": "Stop Saying 'I Feel Like' - The New York Times",
            "https://www3.ntu.edu.sg/home/ehchua/programming/java/JSPByExample.html": "Getting Starting with JSP with Examples",
            "http://petapixel.com/2014/08/24/burning-man-time-lapse-end-burning-man-time-lapses/": "The Burning Man Time-Lapse to End All Burning Man Time-Lapses",
            "https://www.kaggle.com/c/word2vec-nlp-tutorial/details/part-2-word-vectors": "word2vec tutorial",
            "http://www.nytimes.com/2015/01/11/fashion/modern-love-to-fall-in-love-with-anyone-do-this.html?smid=fb-nytimes&smtyp=cur&bicmp=AD&bicmlukp=WT.mc_id&bicmst=1409232722000&bicmet=1419773522000&_r=0": "To Fall in Love With Anyone, Do This - NYTimes.com",
            "https://www.khanacademy.org/partner-content/pixar/start/introduction/a/users-guide": "Learner's guide | Introduction | Khan Academy",
            "http://allrecipes.com/recipe/banana-banana-bread/detail.aspx": "Banana Banana Bread Recipe - Allrecipes.com",
            "http://www.becomingminimalist.com/surviving-love/": "What 48 Hours Alone in the Wilderness Taught Me About Unconditional Love",
            "http://www.quora.com/Investing/Im-18-years-old-and-want-to-learn-how-to-invest-my-money-How-do-I-get-started": "(50) Investing: I'm 18 years old and want to learn how to invest my money. How do I get started? - Quora",
            "http://studio5.ksl.com/?nid=71&sid=12444913": "Studio 5 - Wasatch Front Hikes with \"hidden secrets\".",
            "http://www.nytimes.com/2016/05/29/opinion/sunday/why-you-will-marry-the-wrong-person.html?smid=fb-nytimes&smtyp=cur&_r=1": "Why You Will Marry the Wrong Person - The New York Times",
            "https://www.youtube.com/watch?v=Njvulx5N_qE": "The Hiragana Song \u2605 \u3072\u3089\u304c\u306a\u306e\u3046\u305f - YouTube",
            "http://www.washingtonpost.com/news/local/wp/2015/02/06/black-and-latina-women-scientists-sometimes-mistaken-for-janitors/": "Black and Latina women scientists sometimes mistaken for janitors - The Washington Post",
            "http://stanford.edu/class/archive/cs/cs106b/cs106b.1142/indent.shtml": "auto indenter",
            "http://quizlet.com/50590/1000-top-used-spanish-words-flash-cards/": "1000 Top Used Spanish Words flashcards | Quizlet",
            "http://web.stanford.edu/class/archive/cs/cs161/cs161.1138/": "CS161: Design and Analysis of Algorithms",
            "https://www.youtube.com/watch?v=Q3oItpVa9fs#t=129": "CYMATICS: Science Vs. Music - Nigel Stanford - YouTube",
            "https://cs108ftw.slack.com/messages/general/": "general | CS108! Slack",
            "https://guns-vs-homicide.github.io/": "Firearms vs. Intentional Homicide",
            "https://aaronparecki.com/2012/07/29/2/oauth2-simplified": "OAuth2 by Aaron Parecki ",
            "http://www.huffingtonpost.com/2013/11/14/jason-silva-shots-of-awe-existential-bummer_n_4269849.html": "Filmmaker Jason Silva Is Inspiring Us To Live Life To The Fullest (VIDEO)",
            "http://scottkensell.com/course-review-cs193p-iphone-development.html": "Course review - CS193P iPhone Application Development",
            "https://www.quora.com/Does-Google-Translate-use-English-as-an-intermediary-step-language": "(1) Does Google Translate use English as an intermediary step language? - Quora",
            "https://www.youtube.com/watch?v=Frfq-ok8w_4": "An Overreaction: Words On #BlackLivesMatter And MLK - YouTube",
            "http://www.npr.org/podcasts/510312/codeswitch": "code switch blm letter",
            "http://www.instructables.com/id/Motion-Triggered-DSLR-Remote-System/": "Motion Triggered DSLR Remote System",
            "http://www.whitehouse.gov/about/internships/FAQs": "Internship Timeline and FAQs | The White House",
            "https://medium.com/the-archipelago/the-saddest-homecoming-queen-in-ohio-94df265b662c": "The Saddest Homecoming Queen in Ohio - The Archipelago - Medium",
            "http://www.theatlantic.com/business/archive/2014/11/a-new-business-strategy-treating-employees-well/383192/?utm_source=huffingtonpost.com&utm_medium=referral&utm_campaign=pubexchange": "A New Business Strategy: Treating Employees Well - The Atlantic",
            "http://www.nytimes.com/2014/12/21/style/the-10-best-modern-love-columns-ever.html?rref=collection%2Fcolumn%2Fmodern-love": "The 10 Best Modern Love Columns Ever - NYTimes.com",
            "https://www.youtube.com/watch?v=dRl8EIhrQjQ": "Can We Auto-Correct Humanity? - YouTube",
            "http://www.aataweb.org/summer_programs": "American Association of Teachers of Arabic - Summer Arabic Language Programs",
            "http://blog.visual.ly/data-sources/": "30 Places to Find Open Data on the Web | Visually Blog",
            "https://web.stanford.edu/dept/islamic_studies/cgi-bin/web/for-students/student-grant/grant-description/": "The Abbasi Program in Islamic Studies at Stanford University | Applying for a Grant",
            "http://www.stanforddaily.com/2014/05/22/on-ikes-protest-and-privilege/?fb_action_ids=681105851924907&fb_action_types=og.likes": "On Ike's, protest and privilege | Stanford Daily",
            "http://datasciencemasters.org/": "The Open Source Data Science Masters",
            "https://www.youtube.com/watch?v=3IdkrkX5DgI": "My Daddy lies because of me - YouTube",
            "http://www.gnu.org/software/bison/manual/html_node/index.html#SEC_Contents": "Bison 3.0.4: Top",
            "http://8tracks.com/explore/modern_dance": "25 Free Modern Dance music playlists | 8tracks internet radio",
            "http://flex.sourceforge.net/manual/Simple-Examples.html#Simple-Examples": "Simple Examples - Lexical Analysis With Flex, for Flex 2.5.37",
            "http://www.washingtonpost.com/posteverything/wp/2014/07/08/this-is-what-happened-when-i-drove-my-mercedes-to-pick-up-food-stamps/": "This is what happened when I drove my Mercedes to pick up food stamps - The Washington Post",
            "https://www.youtube.com/watch?v=Tt0jYb79Eu8": "Essential Guitar Lounge Vol 1_Amazing Acoustics Chill Out - YouTube",
            "http://www.andrewsouthpaw.com/2015/02/08/environment-variables/": "Environment variables.",
            "http://www.stanforddaily.com/2016/05/01/an-open-letter-to-president-hennessy-on-openxchange-event/": "An open letter to President Hennessy on the OpenXChange event | Stanford Daily",
            "http://stanmed.stanford.edu/2015spring/before-i-go.html": "Before I go | Stanford Medicine",
            "http://olddoctoro.blogspot.com/?m=1": "Old doc Toro",
            "https://mvideox.stanford.edu/Graduate#/": "Stanford Center for Professional Development",
            "https://www.youtube.com/watch?v=GL0rbxB9Lqg": "GoPro: Danny MacAskill - Cascadia - YouTube",
            "http://comediansincarsgettingcoffee.com/amy-schumer-im-wondering-what-its-like-to-date-me": "Amy Schumer I'm Wondering What It's Like To Date Me - Comedians In Cars Getting Coffee by Jerry Seinfeld",
            "http://www.stat.ucla.edu/~rosario/classes/081/100a-2a/100aHW2Soln.pdf": "www.stat.ucla.edu/~rosario/classes/081/100a-2a/100aHW2Soln.pdf",
            "http://web.stanford.edu/class/cs110/lectures/errata-c-plus-plus-refresher.html#(1)": "(1)",
            "https://oag.ca.gov/fingerprints/locations/ups-store-6105": "LiveScan UPS",
            "https://www.facebook.com/uniladmag/videos/2284453421577704/": "UNILAD - This Kid Is Passionate About The Environment",
            "https://conjuguemos.com/list.php?type=verbs&division=verbs&language=spanish": "Conjuguemos",
            "http://www.businessinsider.com/hotel-22-the-dark-side-of-silicon-valley-2014-11?IR=T": "HOTEL 22: The Dark Side Of Silicon Valley - Business Insider",
            "http://www.theatlantic.com/international/archive/2012/03/the-white-savior-industrial-complex/254843/2/": "The White-Savior Industrial Complex - The Atlantic",
            "https://docs.djangoproject.com/en/1.7/": "Django documentation | Django documentation | Django",
            "http://localhost:8888/tree": "jupyter notebook",
            "https://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/": "Don't Be Scared Of Functional Programming - Smashing Magazine",
            "http://matadornetwork.com/bnt/30-amazing-resources-reading-learning-spanish/": "30+ amazing resources for reading (and learning!) Spanish"
        };

        $scope.$watch('bookmarks', function() {
            $scope.bmLinks = Object.keys($scope.bookmarks);
            $scope.bookmarksOne = [];
            $scope.bookmarksTwo = [];
            $scope.showBookmark = [];
            for (let i = 0; i < $scope.bmLinks.length; i++) { 
                let bm = $scope.bmLinks[i];
                let des = $scope.bookmarks[bm];
                (i % 2 === 0) ? $scope.bookmarksOne.push(bm) : $scope.bookmarksTwo.push(bm); 
                $scope.showBookmark[bm] = true;
            };
        });

        $scope.sortByDescription = function() {
            var sortable = [];
            for (var bm in $scope.bookmarks)
                sortable.push([bm, $scope.bookmarks[bm]])
            sortable.sort(function(a,b) {
                return a[1].localeCompare(b[1]);
            })
            console.log("sortable", sortable);
            $scope.bookmarks = {};
            sortable.forEach((pair) => {
                console.log("pair", pair);
                $scope.bookmarks[pair[0]] = pair[1];
            })
            console.log($scope.bookmarks);
        };

// var maxSpeed = {
//     car:300, bike:60, motorbike:200, airplane:1000,
//     helicopter:400, rocket:8*60*60
// }
// var sortable = [];
// for (var vehicle in maxSpeed)
//       sortable.push([vehicle, maxSpeed[vehicle]])
// sortable.sort(
//     function(a, b) {
//         return a[1] - b[1]
//     }
// )

        function getDomain(url) {
            let match = url.match(/:\/\/(.[^/]+)/)[1];
            console.log(match);
            return match;
        };

        $scope.loading = false;
        //warn before use that another tab will be opened
        $scope.selectRandomLink = function() {
            $scope.loading = true;
            console.log($scope.bmLinks.length);
            let index = Math.floor(Math.random() * $scope.bmLinks.length);
            console.log("index: ", index);
            console.log("link: ", $scope.bmLinks[index]);
            $timeout(function () { //in order for button click to look smooth
                $scope.loading = false;
                window.open($scope.bmLinks[index]);
            }, 1000);
        };

        $scope.test = function() {
            $("a[href^='http']").each(function() {
                console.log("here!");
                $(this).css({
                    background: "url(http://favicon.yandex.net/favicon/" + getDomain(this.href) +
                    ") left center no-repeat",
                    "padding-left": "20px"
                });
            });
        }

    }]);

jsonchen.directive("testDirective", function() {
        return {
            restrict : "EA",
            template : "<h1>Made by a directive!</h1>"
        };
    });
