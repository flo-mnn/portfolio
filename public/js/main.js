// // window.onload = function(){
    // //     console.log(assetsBox);
    // //  };
    class item {
        constructor(client,logo,title,category,date,cover,assets,description) {
            this.client = client;
            this.logo = logo;
            this.title = title;
            this.category = category;
            this.date = date;
            // this.year = year;
            this.cover = cover;
            this.assets = assets;
            this.description = description;
    };
};

// chronological order

let item1 = new item('BMW','bmw', "SEA - BMW Série 2 Active Tourer", "SEA", 'February 2022', 'bmw_cover.png', ['bmw_sea_1.png','bmw_sea_2.png','bmw_sea_3.png'],["Task",`As BMW launches their new model: the BMW Serie 2 Active Tourer, they wish to promote the hybrid version and its features on search engines. For more flexibilty and impact, the selected format was a "responsive search ad". I wrote a number of proposals, all to be easily combined between them, taking into account the "pin" function on search ads. Hereby, you can see the result live as Google picks and mix in the various text lines I wrote.`,"- realised within the ServicePlan Belgium agency"]);

let item2 = new item('ALDI','aldi','Radio spots - Tactical Advertising','Radio', 'February - May 2022', 'aldi_radio_cover.png', ['aldi_radio_1.png','aldi_radio_2.png','aldi_radio_3.png'], ["Tactical Advertising",`Each week, the famous discount retailer ALDI broadcasts radio spots in Belgium and in Luxembourg. Among these are what are called "tacticals" which aim to announce an upcoming or ongoing discount.`,"Execution", `All these radio spots are made of a jingle, a nice catch phrase as I liked too call it, a voiceover for the discount itself and a baseline. 15 seconds. I was asked to come up with a French version for them. I especially liked this new exercice as I started with the ServicePlan agency. During the 3 months I worked on this project, I kept improving and made my "catchline" more and more catchy - well duh - and just rolling off the tongue!`,"- realised within the ServicePlan Belgium agency, in collaboration with SonHouse Production"]);

let item3 = new item("La Redoute",'laredoute',"TV Commercial - Welcoming Spring","Video Ad","February 2022",'laredoute_spring_cover.png',['laredoute_spring_motion.gif'],["Task",`Well, you know how "Spring Cleaning" is a real thing, right? Definitely not an occasion the famous online French retailer La Redoute would miss to advertise their furniture and home collection for this new season. With the team at ServicePlan Belgium agency, we got to brainstorm on Supers copys to match a 6 to 15 seconds video motion that would be broadcast on TV as well as on the internet. One of the main themes were then of course : winter is over, it's time for spring now.`,"Execution", "This headline was presented to the client along others. The client went for a more generic - and sassy! - one that the team proposed. [Curious to know which one, huh? You can always reach me]", '- idea developed within ServicePlan Belgium agency' ]);

let item4 = new item ("Weight Watchers",'weightwatchers', "Weight Watchers' Social Feed","Social Media", "March-May 2022", "ww_some_cover.png",["ww_post_item_1.png","ww_post_item_2.png","ww_post_item_3.png","ww_post_item_4.png","ww_post_item_5.png","ww_post_item_6.png",], ["Context",`Weight Watchers has been playing in the diet industry for a long time now. But they now have a whole new identity, way healthier! That's also why they prefer to be called by their initials now "WW", because their program is now more about having a healthy relationship with food, exercise and having healthy habits in general. They have the advantage of being world renowned and their whole new program is now available online as well as offline. No excuse for their members, they have a whole community they can rely on`,"Execution",`Since March I have been entrusted with the transcreation into French of all their organic social media posts, written by our inhouse NL copywriter at ServicePlan Belgium agency for Facebook and Instagram. It's been a delight to write for such a lively brand and their healthy community. You can find all the posts I translated for them on their instagram page @ww_belgique (from March 2022 until today, up to June 2022)`,`- this project was realised within ServicePlan Belgium agency`]);

let item5 = new item ('ServicePlan Belgium','serviceplanbelgium','Willie Witloof to the Creative Belgium Awards',"Transcreation","February 2022","aldi_willie_en_cover.png",['aldi_willie_en_supermarket_1.png',
// 'aldi_willie_en_supermarket.mp4',
 'aldi_willie_en_dinner_1.png',
// 'aldi_willie_en_dinner.mp4'
],["Task",`As ServicePlan Belgium was submitting their cases boards to the Creative Belgium Awards, I was asked to help them with the English translation process. One I particularly enjoyed was the transcreation of the "Willie Witloof" case - or "Gaston le Chicon" in French. A great campaign realised by ServicePlan for ALDI, so that they could too have their "End of the Year Mascot". The TV commercial they realised were lighthearted, funny and in rhymes! This was a real challenge for the translator that I am but such a nice material to work with.`,"- realised within and for ServicePlan Belgium agency"]);

let item6 = new item ("Capri-Sun",'caprisun',"Capri-Sun's debut in Belgium","Social Media","March-June 2022", "caprisun_cover.gif",['caprisun_post_1.png','caprisun_post_2.png','caprisun_post_3.png','caprisun_post_4.png'],["Task",`After the UK, Germany or just as close, France, Capri-Sun is making their debut on social media in Belgium as well. To help them conquer the meta... world, with Instagram and Facebook, they asked ServicePlan Belgium for help. The funniest drink is online!`,"Execution", `Though the client did have some input on one post or another, based on their graphic creation or even other countries posts, the playground was mine! Capri-Sun is such a light, young and fun brand. It's a pleasure to write their social media content in French for Belgium. You can find the post I wrote for them on their instagram @caprisun_belgium (from March 2022 until today, up until June)`,"- realised within ServicePlan Belgium agency"])


allItems = [item1, item2, item3,item4,item5,item6];



// sections 
let assetsBox = document.getElementById('assets-preview');
let previewRow = assetsBox.querySelector('.row');
let assetsDetail = document.getElementById("item-details");
let hero = document.getElementById('hero');
let about = document.getElementById('about');

let allSections = [hero, assetsBox, assetsDetail,about];



// generate preview items 
for (let i = 0; i < allItems.length; i++) {
    const el = allItems[i];

    let divtocopy = assetsBox.querySelector('.item-preview-template');
    let newItem = divtocopy.cloneNode(true);
    newItem.classList.remove("d-none");
    newItem.classList.remove("item-preview-template");
    newItem.classList.add('item-preview-element');
    newItem.id = `${el.title}`;
    let babyBugBox = newItem.querySelector('.item-box');
    babyBugBox.id = `${el.title}`;
    let img = newItem.querySelector("img");
    img.src = `public/img/campaigns/${el.cover}`;
    let title = newItem.querySelector(".campaign-name");
    title.textContent = `${el.title}`
    let category = newItem.querySelector(".category-span");
    category.textContent = `${el.client} - ${el.category}`;
    previewRow.appendChild(newItem);

}

let allPreviewItems = document.querySelectorAll('.item-preview-element');
let assetsPreviewBox = document.getElementById('assets-preview');
let previewItems = assetsPreviewBox.querySelectorAll('.item-box');

// display right item on click (part1)
let itemToDisplay = null;

// ici seulement recuperation de quel object, reste dans screensize + function displayItem
for (let i = 0; i < previewItems.length; i++) {
    const el = previewItems[i];
    el.addEventListener("click",function(e){
        let itemId = this.id;
        for (let i = 0; i < allItems.length; i++) {
            const element = allItems[i];
            if (element.title == itemId) {
                itemToDisplay = element;
            };
        };
        // console.log(itemToDisplay);
    });
}
// for (let i = 0; i < allPreviewItems.length; i++) {
//     const el = allPreviewItems[i];
//     el.addEventListener("click",function(e){
//         let itemId = this.id;
//         for (let i = 0; i < allItems.length; i++) {
//             const element = allItems[i];
//             if (element.title == itemId) {
//                 itemToDisplay = element;
//             };
//         };
//     });
// }

// assets page variables for carousel slides + text
let carouselSlide = document.querySelector('.carousel-item-template');
let slideBox = assetsDetail.querySelector('#carousel-assets').querySelector('.carousel-inner');
let indicatorItem = document.querySelector('.indicator-template');
let carouselOl = assetsDetail.querySelector('#carousel-assets').querySelector('.carousel-indicators');
let itemDetailDescription = assetsDetail.querySelector('.inner-text');

let displayItem = () => {
    // trying to solve bug by emptying item detail side before displaying again as well
    carouselOl.textContent="";
    slideBox.textContent="";
    itemDetailDescription.textContent="";

    // 
    for (let i = 0; i < allSections.length; i++) {
        const el = allSections[i];
        el.classList.add('d-none');
    };
    // changing infos
    let img = assetsDetail.querySelector('#client-logo');
    img.src = `public/img/clients_logo/${itemToDisplay.logo}.png`;
    let title = assetsDetail.querySelector('#item-detail-title');
    title.textContent = `${itemToDisplay.title}`;
    let client = assetsDetail.querySelector('#item-detail-client');
    client.textContent = `${itemToDisplay.client}`;
    let category = assetsDetail.querySelector('#item-detail-category');
    category.textContent = `${itemToDisplay.category}`;
    let date = assetsDetail.querySelector('#item-detail-date');
    date.textContent = `${itemToDisplay.date}`;
    
    // adding slides to carousel
    let slides = itemToDisplay.assets;
    for (let i = 0; i < slides.length; i++) {
        const el = slides[i];
        // add slide
        let newSlide = carouselSlide.cloneNode(true);
        newSlide.classList.remove('d-none');
        newSlide.classList.replace('carousel-item-template','carousel-item');
        if (i==0) {
            newSlide.classList.add('active');
        };
        let img = newSlide.querySelector('img');
        img.src = `public/img/campaigns/${el}`;
        slideBox.appendChild(newSlide);
        // adding li for indicators
        let newLi = indicatorItem.cloneNode(true);
        newLi.classList.remove('indicator-template');
        newLi.classList.remove('d-none');
        newLi.setAttribute("data-slide-to",i);
        if (i==0) {
            newLi.classList.add("active");
        };
        carouselOl.appendChild(newLi);
    };
    // text display
    let textPs = itemToDisplay.description;
    let newText;
    for (let i = 0; i < textPs.length; i++) {
        const el = textPs[i];
        if (i==textPs.length-1) {
            newText = document.createElement('span');
            newText.classList.add('text-light');
        } else {
            if (i%2 == 0) {
                newText = document.createElement('h4');
            } else {
                newText = document.createElement('p');
            };
        };
        newText.textContent = `${el}`;
        itemDetailDescription.appendChild(newText);
    };
    // actually displaying
    assetsDetail.classList.remove('d-none');
    window.scrollTo(0,0);
  
};

let backToPortfolio = (e) => {
    e.stopPropagation()
    for (let i = 0; i < allSections.length; i++) {
        const el = allSections[i];
        el.classList.remove('d-none');
    };
    assetsDetail.classList.add('d-none');
    carouselOl.innerHTML=null;
    slideBox.innerHTML=null;
    itemDetailDescription.innerHTML=null;
    window.location = `#${itemToDisplay.title}`;
};

let backportfolioBtns = document.querySelectorAll('.backportfolio');
for (let i = 0; i < backportfolioBtns.length; i++) {
    const el = backportfolioBtns[i];
    el.addEventListener('click',backToPortfolio);
};



// HOVER AND GENERAL STYLE EFFECTS AND SCREEN SIZE MANAGEMENT 

// check size screens
let smartphone = window.matchMedia("(max-width: 767px)");
let tablet = window.matchMedia("(max-width: 991px)");
let desktop = window.matchMedia("(min-width: 992px)");

// size screens

let body = document.querySelector('body');


let screenSize = () => {
    if (desktop.matches) {
        // console.log('desktop matches');
        // mouseenter/mouseleave hover effect
        for (let i = 0; i < previewItems.length; i++) {
            const el = previewItems[i];
            el.addEventListener("mouseenter",function(e){
                el.classList.add('hovered');
            });
            el.addEventListener("mouseleave",function(e){
                el.classList.remove('hovered');
            });
            // el.addEventListener('click',displayItem);
        };

        //fixing bug desktop vs small screen for display right element (part2 - desktop, see below for mobile devices)
        for (let i = 0; i < allPreviewItems.length; i++) {
            const el = allPreviewItems[i];
            el.addEventListener("click",function(e){
                let itemId = this.id;
                for (let i = 0; i < allItems.length; i++) {
                    const element = allItems[i];
                    if (element.title == itemId) {
                        itemToDisplay = element;
                    };
                };
                displayItem();
            });
        } 

    } else if (tablet.matches) {
        // tablet and mobile?
        // console.log('smart and tab matches');
        // fake hover effect on touch screens (small sizes)
        for (let i = 0; i < previewItems.length; i++) {
            const el = previewItems[i];
            el.addEventListener("click",function(e){
                if(!el.classList.contains('hovered')){
                    // e.stopPropagation();
                    // remove hovered from others
                    for (let a = 0; a < previewItems.length; a++) {
                        const element = previewItems[a];
                        element.classList.remove('hovered');
                    };
                    // add hovered to the one needed
                    el.classList.add('hovered');
                } else {
                    // actual click as anchor/link
                    el.classList.remove('hovered');
                    displayItem();
                };
            });
        };


      if (smartphone.matches) {
        // smartphone
      } else { //tablet
        
      };
    };
  };
  
  
window.addEventListener('resize',function() {
    screenSize();
}) // Attach listener function on state changes (why this comment ? Check from "web dev portfolio template")

// !!!!!!!!!!!!!! ADD ON WINDOWN LOAD
window.onload = function(){
    screenSize();
};



