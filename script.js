let contentGridElement = document.getElementById('contentGrid');
let jsonDatabase = [
  {
    "title" : "Spring Casual",
    "picture_url" : "IMG_5184.JPG",
    "description" : "A light, chic outfit perfect for a sunny day out.",
    "season" : "spring",
    "tags" : ["casual", "daytime"],
    "outfitParts" : [
      {
        "name" : "nylon bag",
        "image" : "nylonBag.png",
        "link" : "https://us.princesspolly.com/products/peta-jain-paloma-nylon-bag?currency=USD&variant=32147236028500&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&utm_source=cpc&utm_medium=google&utm_term=&adid=&matchtype=&addisttype=xpla&tw_source=google&tw_adid=&tw_campaign=18025565757&gclid=CjwKCAjwov6hBhBsEiwAvrvN6KB1m65xEtT1NbV321PlIlca0sXU9YlYPV2Wf9wwUzXauv2nyq5PyRoCpa4QAvD_BwE"
      },
      {
        "name" : "varsity jacket",
        "image" : "IMG_7708-removebg-preview.png",
        "link" : "https://www.google.com/"
      },
      {
        "name" : "black leggings",
        "image" : "2cc60e448f77724659f8b0f38a11db1e-removebg-preview.png",
        "link" : "https://www.google.com/"
      }
    ]
  },
  {
    "title" : "Winter Formal",
    "picture_url" : "15BE1244-06C0-424C-A53F-A2748176A9A2.JPG",
    "description" : "A chic and elegant outfit for a formal winter event.",
    "season" : "winter",
    "tags" : ["formal", "evening"],
    "outfitParts" : [
      {
        "name" : "dress",
        "image" : "339851077_1878726192499783_1298253377778786648_n-removebg-preview.png",
        "link" : "https://item.taobao.com/item.htm?ut_sk=1.XWXXVgEw%2BHMDAH2C1eTbZsa/_21380790_1681948469454.Copy.1&id=681448661680&sourceType=item&price=79&origin_price=179&suid=688A967C-AC33-438B-8CA5-0C8908DDA608&shareUniqueId=21027151420&un=a90dc1e101e8f18884396dadb5b63153&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&sp_abtk=gray_1_code_simpleios2&tbSocialPopKey=shareItem&sp_tk=eVJZYWRPMGRKTVc%3D&cpp=1&shareurl=true&short_name=h.UHSUxNe&bxsign=scd9aEYLxv2ok4z4NtVW9WFSyv1LvMNojymHMaSffBenrbcZUtQRIODlam0ir9XpbfJ7q8VOAeg--HmLk9NTbti4gBWM-6MPXlWpD0_h69xg4vdAuyXC5pcOn6bpHF2LW3u8FooqYdTxvm8fcyWxT71tA&tk=yRYadO0dJMW&app=chrome"
      },
      {
        "name" : "heels",
        "image" : "EF76C4E2EA16CAA93908AD2AFBEAF210_thumbnail_900x-removebg-preview.png",
        "link" : "https://us.shein.com/topshoesUS-DREAM-PAIRS-Women-s-High-Heels-Destiny-Closed-Toe-Strappy-Heels-Sexy-Rhinestone-Ankle-Strap-Pumps-Wedding-Bridal-Party-Dress-Shoes-p-12228488-cat-1750.html?mallCode=1"
      }
    ]
  },
  {
    "title" : "Muesum Date",
    "picture_url" : "IMG_6601.JPG",
    "description" : "A fun and cute girl outfit for day at the muesum.",
    "season" : "fall",
    "tags" : ["muesum", "daytime"],
    "outfitParts" : [
      {
        "name" : "tank top",
        "image" : "https://www.victoriassecret.com/p/760x1013/tif/09/8f/098feda4f40d404f8bb00addf417a7a1/1119973395D1_OM_S.jpg"
      },
      {
        "name" : "skirt",
        "image" : "ezgif-1-007240d986.jpeg"
      },
    ]
  },

  {
    "title" : "Casual Amuseument Park",
    "picture_url" : "IMG_3978.JPG",
    "description" : "A preppy and comfortable outfit for a day at the park.",
    "season" : "summer",
    "tags" : ["casual", "daytime", "preppy"],
    "outfitParts" : [
      {
        "name" : "sweater",
        "image" : "IMG_7776.jpg"
      },
      {
        "name" : "skirt",
        "image" : "ezgif-1-007240d986.jpeg"
      },
      {
        "name" : "thigh highs",
        "image" : "thighHigh.jpeg"
      }
    ]
  },

  {
    "title" : "School day",
    "picture_url" : "317386303_798148097944828_1078845521890965441_n.jpg",
    "description" : "a causal hoodie day for a day at school",
    "season" : "fall",
    "tags" : ["casual", "daytime"],
    "outfitParts" : [
      {
        "name" : "hoodie",
        "image" : "https://media-photos.depop.com/b1/20781686/1453950058_80027bcdc097438b8a25041b603d9203/P0.jpg"
      },
      {
        "name" : "sneaker",
        "image" : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4371ac31-97cd-4057-bd6e-41440e39f3b9/dunk-low-big-kids-shoes-Ss5wx2.png"
      },
    ]
  }
];


/* Get URL Params */
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let urlSection = urlParams.get('tag');


for (var i = 0; i < jsonDatabase.length; i++) {

  if ( jsonDatabase[i]['tags'].includes(urlSection) || (urlSection == "") || (urlSection == null) ) {
    createElementProper(jsonDatabase[i]);
  }

}

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  /// Create & add OUTFIT TITLE to the item
  let newContentTitle = document.createElement("H3");
  newContentTitle.classList.add('contentTitle');
  newContentTitle.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentTitle);

  /// Create & add OUTFIT TAGS to the item
  let newContentTags = document.createElement("UL");
  newContentTags.classList.add('contentTags');
  newContentElement.appendChild(newContentTags);

  /// Create "polaroid" div
  let newPolaroidContainer = document.createElement("DIV");
  newPolaroidContainer.classList.add("polaroid");
  newContentElement.appendChild(newPolaroidContainer);

  /// Create & add OUTFIT IMAGE to the polaroid
  let newContentImage = document.createElement("IMG");
  newContentImage.classList.add("contentImage");
  newContentImage.src = incomingJSON['picture_url'];
  newPolaroidContainer.appendChild(newContentImage);

  /// Create & add OUTFIT DESCRIPTION to the polaroid
  let newContentDescription = document.createElement("P");
  newContentDescription.classList.add('contentDescription');
  newContentDescription.innerText = incomingJSON['description'];
  newPolaroidContainer.appendChild(newContentDescription);



  /// Create & add all the OUTFIT TAG ITEMS to the OUTFIT TAGS list
  for (var i = 0; i < incomingJSON['tags'].length; i++) {
    var currentTagString = incomingJSON['tags'][i];
    var newTagItem = document.createElement("LI");

    let newTagLinkElement = document.createElement("A");
    newTagLinkElement.href = "lookbook.html?tag=" + currentTagString; 
    newTagLinkElement.innerText = "#" + currentTagString;
    newTagItem.appendChild(newTagLinkElement);

    newContentTags.appendChild(newTagItem);
  }

  let newSubItemGrid = document.createElement("DIV");
  newSubItemGrid.classList.add("subItemGrid");
  newContentElement.appendChild(newSubItemGrid);

  /// Creating elements for each outfit item
  for (var i = 0; i < incomingJSON['outfitParts'].length; i++) {
    let newSubItemDiv = document.createElement("DIV");
    newSubItemDiv.classList.add("subItemContainer");

    let newSubItemName = document.createElement("H5");
    newSubItemName.classList.add("subItemName");
    newSubItemName.innerText = incomingJSON['outfitParts'][i]['name'];
    newSubItemDiv.appendChild(newSubItemName);

    /// Create IMG for the outfitPart
    let newSubItemImg = document.createElement("IMG");
    newSubItemImg.src = incomingJSON['outfitParts'][i]['image'];


    /// Create a clickable link ONLY if there is a 'link' for the outfitPart
    if ((incomingJSON['outfitParts'][i]['link'] != undefined) || (incomingJSON['outfitParts'][i]['link'] != "") || (incomingJSON['outfitParts'][i]['link'] != null)){
      let newSubItemLink = document.createElement("A");
      newSubItemLink.href = incomingJSON['outfitParts'][i]['link'];
      newSubItemLink.target = "_blank";
      newSubItemLink.appendChild(newSubItemImg);
      newSubItemDiv.appendChild(newSubItemLink);
    }
    else {
      newSubItemDiv.appendChild(newSubItemImg);
    }

    /// Add the outfit part ("newSubItemDiv") to the collection of outfitParts ("newSubItemGrid")
    newSubItemGrid.appendChild(newSubItemDiv);
  }

  /// Add the content item div to the content grid
  contentGridElement.appendChild(newContentElement);
}
