// save your sheet ID and name of the tab as variables for use
let sheetID = "1sUpqScWWkr-wQPw13_toR_UWAes7IZ2pT-MOtY5Bulc";
let tabName = 'Sheet1';
let index = 0;

// define variables
let myStroke;
let shape1 = '<svg width="515" height="657" viewBox="0 0 515 657" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M257.12 452.48C272.866 452.48 285.63 442.774 285.63 430.8C285.63 418.826 272.866 409.12 257.12 409.12C241.374 409.12 228.61 418.826 228.61 430.8C228.61 442.774 241.374 452.48 257.12 452.48Z" stroke=' + myStroke + ' stroke-width="7" stroke-miterlimit="10"/><path d="M152.47 417.42C174.959 417.42 193.19 398.37 193.19 374.87C193.19 351.37 174.959 332.32 152.47 332.32C129.981 332.32 111.75 351.37 111.75 374.87C111.75 398.37 129.981 417.42 152.47 417.42Z" fill=' + myStroke + '/><path d="M159.8 425.92C187.994 425.92 210.85 403.064 210.85 374.87C210.85 346.676 187.994 323.82 159.8 323.82C131.606 323.82 108.75 346.676 108.75 374.87C108.75 403.064 131.606 425.92 159.8 425.92Z" stroke=' + myStroke + ' stroke-width="8" stroke-miterlimit="10"/><path d="M343.71 417.95C366.199 417.95 384.43 398.9 384.43 375.4C384.43 351.9 366.199 332.85 343.71 332.85C321.221 332.85 302.99 351.9 302.99 375.4C302.99 398.9 321.221 417.95 343.71 417.95Z" fill=' + myStroke + '/><path d="M351.03 426.45C379.224 426.45 402.08 403.594 402.08 375.4C402.08 347.206 379.224 324.35 351.03 324.35C322.836 324.35 299.98 347.206 299.98 375.4C299.98 403.594 322.836 426.45 351.03 426.45Z" stroke=' + myStroke + ' stroke-width="8" stroke-miterlimit="10"/><path d="M221.85 473.2C225.12 489.85 239.52 502.04 256.16 502.48C273.49 502.94 288.96 490.55 292.38 473.2" stroke=' + myStroke + ' stroke-width="7" stroke-miterlimit="10"/><path d="M306.2 180.61C316.95 208.81 349.21 222.18 376.76 209.84C420.8 190.11 465.9 235.22 446.18 279.26C433.84 306.81 447.2 339.06 475.41 349.82C520.5 367.01 520.5 430.8 475.41 447.99C447.21 458.74 433.84 491 446.18 518.55C465.91 562.59 420.8 607.69 376.76 587.97C349.21 575.63 316.96 588.99 306.2 617.2C289.01 662.29 225.22 662.29 208.03 617.2C197.28 589 165.02 575.63 137.47 587.97C93.43 607.7 48.33 562.59 68.05 518.55C80.39 491 67.03 458.75 38.82 447.99C-6.27 430.8 -6.27 367.01 38.82 349.82C67.02 339.07 80.39 306.81 68.05 279.26C48.32 235.22 93.43 190.12 137.47 209.84C165.02 222.18 197.27 208.82 208.03 180.61C225.22 135.52 289.01 135.52 306.2 180.61Z" stroke=' + myStroke + ' stroke-width="10" stroke-miterlimit="10"/><path d="M257.1 144.52C261.39 130.46 262.22 116.57 260.29 103.83C256.48 78.59 241.85 57.92 221.91 49.64M221.91 49.64C200.91 40.92 168.42 43.63 151.49 66.28C137.83 84.55 141.28 106.45 142.21 111.53C176.28 115.37 192.79 107.36 201.47 98.09C215.92 82.66 221.91 49.64 221.91 49.64ZM221.91 49.64C227.99 26.14 246.96 8.67999 269.63 5.50999C297.3 1.63999 316.7 20.99 318.76 23.12C316.75 28.05 308.16 47.43 286.67 57.2C254.2 71.95 223.32 50.65 221.91 49.65" stroke=' + myStroke + ' stroke-width="10" stroke-miterlimit="10"/></svg>'


let sheetMaskNameElement = document.getElementById('sheetmaskname');

//shape = skin type
let dryShape = document.getElementById('dry');
let oilyShape = document.getElementById('oily');
let sensitiveShape = document.getElementById('sensitive');
let combinationShape = document.getElementById('combination');
let normalShape = document.getElementById('normal');

let myShapes = [dryShape, oilyShape, sensitiveShape, combinationShape, normalShape];


let strokeshape = document.querySelectorAll('.strokeshape');
let fillshape = document.querySelectorAll('.fillshape');


// icon = main benefit
let myIcon;
let hydrationIcon = document.getElementById('hydration');
let moisturizingIcon = document.getElementById ('moisturizing');
let brighteningIcon = document.getElementById('brightening');
let poreCareIcon = document.getElementById('porecare')

let myBenefits = [hydrationIcon, moisturizingIcon, brighteningIcon, poreCareIcon]

let fillicon = document.querySelectorAll('.fillicon');

// right cheek = secondary benefit 1
let myRightCheek;
let firmingIcon = document.getElementById('firming');
let coolingIcon = document.getElementById('cooling');
let protectionIcon = document.getElementById('protection');
let balanceIcon = document.getElementById('balance');
let tighteningIcon = document.getElementById('tightening');
let hydratingIcon = document.getElementById('hydrating');

let myRightCheeks = [firmingIcon, coolingIcon, protectionIcon, balanceIcon, tighteningIcon, hydratingIcon]

let strokeicon = document.querySelectorAll('.strokeicon');

//left cheek = secondary benefit 2
let myLeftCheek;
let firmingIconTwo = document.getElementById('firming2');
let coolingIconTwo = document.getElementById('cooling2');
let protectionIconTwo = document.getElementById('protection2');
let balanceIconTwo = document.getElementById('balance2');
let tighteningIconTwo = document.getElementById('tightening2');
let hydratingIconTwo = document.getElementById('hydrating2');

let myLeftCheeks = [firmingIconTwo, coolingIconTwo, protectionIconTwo, balanceIconTwo, tighteningIconTwo, hydratingIconTwo]

let strokeicontwo = document.querySelectorAll('.strokeicon2');

//hangul
let myKrnName;
let sheaButter = document.getElementById('krnsheabutter');
let avocado = document.getElementById('krnavocado');
let aloe = document.getElementById('krnaloe');
let olive = document.getElementById('krnolive');
let chamomile = document.getElementById('krnchamomile');
let orange = document.getElementById('krnorange');
let tomato = document.getElementById('krntomato');
let bamboo = document.getElementById('krnbamboo');
let greenTea = document.getElementById('krngreentea');
let cucumber = document.getElementById('krncucumber');
let teaTree = document.getElementById('krnteatree');
let acaiBerry = document.getElementById('krnacaiberry');
let royalJelly = document.getElementById('krnroyaljelly');
let rose = document.getElementById('krnrose');
let grapefruit = document.getElementById('krngrapefruit');
let brandName = document.getElementById('krnbrandname');

let myKrnNames = [brandName, sheaButter, avocado, aloe, olive, chamomile, orange, tomato, bamboo, greenTea, cucumber, teaTree, acaiBerry, royalJelly, rose, grapefruit]

let krnStroke = document.querySelectorAll ('.strokekrn');

//key
let key = document.getElementById ('key');

let mySkinPic;
let keyDryPic = document.getElementById('dryskinpic');
let keySensitivePic = document.getElementById('sensitiveskinpic');
let keyOilyPic = document.getElementById('oilyskinpic');
let keyCombinationPic = document.getElementById('combinationskinpic');
let keyNormalPic = document.getElementById('normalskinpic');

let mySkinPics = [keyDryPic, keySensitivePic, keyOilyPic, keyCombinationPic, keyNormalPic]
let keySkinStroke = document.querySelectorAll('.keyskinstroke');

let mySkinText;
let keyDryText = document.getElementById('dryskintext');
let keySensitiveText = document.getElementById('sensitiveskintext');
let keyOilyText = document.getElementById('oilyskintext');
let keyCombinationText= document.getElementById('combinationskintext');
let keyNormalText = document.getElementById('normalskintext');

let mySkinTexts = [keyDryText, keySensitiveText, keyOilyText, keyCombinationText, keyNormalText]
let skinText = document.querySelectorAll('.skintext');

let myBenefitOnePic;
let keyHydrationPic = document.getElementById('keymbhydration');
let keyMoisturizingPic = document.getElementById('keymbmoisturizing');
let keyBrighteningPic = document.getElementById('keymbbrightening');
let keyPoreCarePic = document.getElementById('keymbporecare');

let myBenefitOnePics = [keyMoisturizingPic, keyHydrationPic, keyBrighteningPic, keyPoreCarePic]
let keyBenefitOneStroke = document.querySelectorAll('.keymbstroke');

let myBenefitOneText;
let keyHydrationText = document.getElementById('keymbhydrationtext');
let keyMoisturizingText = document.getElementById('keymbmoisturizingtext');
let keyBrighteningText = document.getElementById('keymbbrighteningtext');
let keyPoreCareText = document.getElementById('keymbporecaretext');

let myMbTexts = [keyHydrationText, keyMoisturizingText, keyBrighteningText, keyPoreCareText]
let keyMbText = document.querySelectorAll('.mbtext');

let myBenefitTwoPic;
let keyFirmingPic = document.getElementById('keysbfirmingpic');
let keyCoolingPic = document.getElementById('keysbcoolingpic');
let keyProtectionPic = document.getElementById('keysbprotectionpic');
let keyTighteningPic = document.getElementById('keysbtighteningpic');
let keyBalancePic = document.getElementById('keysbbalancepic');
let keyHydratingPic = document.getElementById('keysbhydratingpic');

let mySbPics = [keyFirmingPic, keyCoolingPic, keyProtectionPic, keyTighteningPic, keyBalancePic, keyHydratingPic]
let keySbStroke = document.querySelectorAll('.keysbstroke');

let myBenefitTwoText;
let keyFirmingText = document.getElementById('keysbfirmingtext');
let keyCoolingText = document.getElementById('keysbcoolingtext');
let keyProtectionText = document.getElementById('keysbprotectiontext');
let keyTighteningText = document.getElementById('keysbtighteningtext');
let keyBalanceText = document.getElementById('keysbbalancetext');
let keyHydratingText = document.getElementById('keysbhydratingtext');

let mySbTexts = [keyFirmingText, keyCoolingText, keyProtectionText, keyTighteningText, keyBalanceText, keyHydratingText]
let keySbText = document.querySelectorAll('.sbtext');




let container = document.getElementById("container");


// format them into Ben's uri
let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`

console.log(opensheet_url);

let slider = document.getElementById("myRange");

let data = null;

fetch(opensheet_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        data = jsonData;

        let parentButtons = document.getElementsByClassName("parent-buttons")[0];

         for(let i=0; i<data.length; i++){
        let button = document.createElement("button");
        button.innerHTML = data[i]["SHEET MASK"];
        button.onclick =  function() {
            console.log(i);
            getData(opensheet_url, i);
          }
        parentButtons.appendChild(button);

        for(let i=0; i<data.length; i++){
            if(i>14){
                 myKrnName = brandName;
            }
        }
    }

       

//     let parentSkinTypeButtons = document.querySelector(".parent-skintype-buttons");
//     let skinTypes = ["dry", "normal", "combination", "oily", "sensitive"];

//     for (let i = 0; i < skinTypes.length; ++i) {
//         let button = document.createElement("button");
//         button.innerHTML = skinTypes[i];
//         button.onclick = () => {
//         setSkinType(skinTypes[i]);
//     };
//     parentSkinTypeButtons.appendChild(button);
// }
// let parentSkinTypeButtons = document.querySelector(".parent-skintype-buttons");

// for (let i = 0; i < data.length; i++) {
//     let button = document.createElement("button");
//     button.innerHTML = data[i]["TARGET SKIN TYPE"];
//     button.onclick = () => {
//         setSkinType(data[i]["TARGET SKIN TYPE"]);
//     };
//     parentSkinTypeButtons.appendChild(button);
// }

// let parentButtons = document.querySelector(".parent-buttons");
// let skinTypes = data.slice(0, 5).map(item => item["TARGET SKIN TYPE"]);

// for (let i = 0; i < skinTypes.length; i++) {
//     let button = document.createElement("button");
//     button.innerHTML = skinTypes[i];
//     button.onclick = ((index) => {
//         return () => {
//             setSkinType(skinTypes[index]);
//         };
//     })(i);
//     parentButtons.appendChild(button);
// }

        
    

//     let parentSkinTypeButtons = document.getElementsByClassName("parent-skintype-buttons")[0];
//     let skinTypes =["dry", "normal", "combination", "oily", "sensitive"];

//     for(let i = 0; i <  skinTypes.length;++i){
//     let button2 = document.createElement("button");
//     button2.innerHTML = skinTypes[i];
//     button2.onclick=()=>{
//         let skintype = skinTypes[i];
//         if (skintype == "oily") {
//             for (let shape of myShapes) {
//                 shape.style.display = "none";
//             }
//             oilyShape.style.display = "block";
//         } else if (skintype == "dry") {
//             for (let shape of myShapes) {
//                 shape.style.display = "none";
//             }
//             dryShape.style.display = "block";
//         } else if (skintype == "sensitive") {
//             for (let shape of myShapes) {
//                 shape.style.display = "none";
//             }
//             sensitiveShape.style.display = "block";
//         } else if (skintype == "combination") {
//             for (let shape of myShapes) {
//                 shape.style.display = "none";
//             }
//             combinationShape.style.display = "block";
//         } else if (skintype == "normal") {
//             for (let shape of myShapes) {
//                 shape.style.display = "none";
//             }
//             normalShape.style.display = "block";
//         } else {
//             for (let shape of myShapes) {
//                 shape.style.display = "none";
//             }
//         }
//     };
//     parentSkinTypeButtons.appendChild(button2);
//   }


//   let parentMainBenefitButtons = document.getElementsByClassName("parent-mainbenefit-buttons")[0];
//     let mainBenefits =["hydration", "moisturizing", "brightening", "porecare"];

//     for(let i = 0; i <  mainBenefits.length;++i){
//     let button2 = document.createElement("button");
//     button2.innerHTML = mainBenefits[i];
//     button2.onclick=()=>{
//         let mainBenefit = mainBenefits[i];
//         for(let icon of fillicon){
//             icon.style.fill = myIcon;
//         }
//         if (mainBenefit == "hydration"){
//             for (let icon of myBenefits){
//                 icon.style.display = "none";
//             }
//             hydrationIcon.style.display = "block";
//         } else if (mainBenefit == "moisturizing"){
//             for (let icon of myBenefits){
//                 icon.style.display = "none";
//             }
//             moisturizingIcon.style.display = "block";
//         } else if (mainBenefit == "brightening"){
//             for (let icon of myBenefits){
//                 icon.style.display = "none";
//             }
//             brighteningIcon.style.display = "block";
//         } else if (mainBenefit == "porecare"){
//             for (let icon of myBenefits){
//                 icon.style.display = "none";
//             }
//             poreCareIcon.style.display = "block";
//         } else {
//             for (let icon of myBenefits){
//                 icon.style.display = "none";
//             }
//         }
       
//     };
//     parentMainBenefitButtons.appendChild(button2);
//   }



//   document.getElementById("name").onchange = (e) => {
//     console.log(e.target.value);
//     sheetMaskNameElement.innerHTML = e.target.value;
//   }




    getData(opensheet_url, index);


        })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });



//SLIDER
slider.oninput = function() {
  index = this.value;
  console.log(index);
  getData(opensheet_url, index);
}


async function getData(myData, myIndex) {

    // const response = await fetch(myData);
    // const data = await response.json();

    slider.max = data.length -1;
    let datapoint = data[myIndex];
    console.log(datapoint["INGREDIENT TYPE"]);
    let ingredient = datapoint["INGREDIENT TYPE"];
    let skintype = datapoint["TARGET SKIN TYPE"];
    let mainBenefit = datapoint ["MAIN BENEFIT"];
    console.log(datapoint["MAIN BENEFIT"]);
    let secondaryBenefitOne = datapoint ["SECONDARY BENEFIT"];
    console.log(datapoint["SECONDARY BENEFIT"]);
    let secondaryBenefitTwo = datapoint ["SECONDARY BENEFIT"];

    let sheetMaskName = datapoint["SHEET MASK"];
    console.log(datapoint["SHEET MASK"]);
    document.getElementById('sheetmaskname').innerText = sheetMaskName;

    let koreanName = datapoint["HANGUL"];
    console.log(datapoint["HANGUL"]);

    let skinTypeKey = datapoint ["KEY SKIN TYPE"]
    console.log(skinTypeKey);

    let goodFor = datapoint ["KEY SKIN TYPE"]
    console.log(goodFor);

    let benefitOneKey= datapoint ["KEY BENEFIT 1"]
    console.log(benefitOneKey);

    let benefitOneKeyText = datapoint ["KEY BENEFIT 1"]
    console.log(benefitOneKeyText);

    let benefitTwoKey = datapoint ["KEY BENEFIT 2"]
    console.log(benefitTwoKey);

    let benefitTwoKeyText = datapoint ["KEY BENEFIT 2"]
    console.log(benefitTwoKeyText);


  


   


//COLOR OF SHEET MASK NAME ACCORDING TO INGREDIENT TYPE

if (ingredient == 'bees'){
} else if (ingredient == 'nut'){
    sheetMaskNameElement.style.color = '#561d1d';
} else if (ingredient == 'tree'){
    sheetMaskNameElement.style.color = '#605b37';
} else if (ingredient == 'fruit'){
    sheetMaskNameElement.style.color = '#f68c45';
} else if (ingredient == 'flower'){
    sheetMaskNameElement.style.color = '#c67373';
} else {
    sheetMaskNameElement.style.color = '#1E572C';
}


//COLOR OF SHAPE ACCORDING TO INGREDIENT TYPE
    if (ingredient == 'bees'){
        myStroke = '#D99828';
        sheetMaskNameElement.style.color = '#D99828';
        myIcon = '#D99828';

    } else if (ingredient == 'nut'){
        myStroke = '#561d1d';
    } else if (ingredient == 'tree'){
        myStroke = '#605b37';
    } else if (ingredient == 'fruit'){
        myStroke = '#f68c45';
    } else if (ingredient == 'flower'){
        myStroke = '#c67373';
    } else {
        myStroke = '#1E572C'
    }


//COLOR OF MAIN BENEFIT ACCORDING TO INGREDIENT TYPE
if (ingredient == 'bees'){
    myIcon = '#D99828';
} else if (ingredient == 'nut'){
    myIcon = '#561d1d';
} else if (ingredient == 'tree'){
    myIcon = '#605b37';
} else if (ingredient == 'fruit'){
    myIcon= '#f68c45';
} else if (ingredient == 'flower'){
    myIcon = '#c67373';
} else {
    myIcon = '#1E572C';
}

//COLOR OF SECONDARY BENEFIT RIGHT CHEEK ACCORDING TO INGREDIENT TYPE
if (ingredient == 'bees'){
    myRightCheek = '#D99828';
} else if (ingredient == 'nut'){
    myRightCheek = '#561d1d';
} else if (ingredient == 'tree'){
    myRightCheek = '#605b37';
} else if (ingredient == 'fruit'){
    myRightCheek ='#f68c45';
} else if (ingredient == 'flower'){
    myRightCheek = '#c67373';
} else {
    myRightCheek = '#1E572C';
}

//COLOR OF SECONDARY BENEFIT LEFT CHEEK ACCORDING TO INGREDIENT TYPE
if (ingredient == 'bees'){
    myLeftCheek = '#D99828';
} else if (ingredient == 'nut'){
    myLeftCheek = '#561d1d';
} else if (ingredient == 'tree'){
    myLeftCheek = '#605b37';
} else if (ingredient == 'fruit'){
    myLeftCheek ='#f68c45';
} else if (ingredient == 'flower'){
    myLeftCheek = '#c67373';
} else {
    myLeftCheek = '#1E572C';
}

//COLOR OF HANGUL TEXT ACCORDING TO INGREDIENT TYPE

if (ingredient == 'bees'){
    myKrnName = '#D99828';
} else if (ingredient == 'nut'){
    myKrnName = '#561d1d';
} else if (ingredient == 'tree'){
    myKrnName = '#605b37';
} else if (ingredient == 'fruit'){
    myKrnName ='#f68c45';
} else if (ingredient == 'flower'){
    myKrnName = '#c67373';
} else {
    myKrnName = '#1E572C';
}

//COLOR OF KEY: SKIN TYPE 
//icon
if (ingredient == 'bees'){
    mySkinPic = '#D99828';
} else if (ingredient == 'nut'){
    mySkinPic = '#561d1d';
} else if (ingredient == 'tree'){
    mySkinPic = '#605b37';
} else if (ingredient == 'fruit'){
    mySkinPic ='#f68c45';
} else if (ingredient == 'flower'){
    mySkinPic = '#c67373';
} else {
    mySkinPic = '#1E572C';
}
//text
if (ingredient == 'bees'){
    mySkinText = '#D99828';
} else if (ingredient == 'nut'){
    mySkinText = '#561d1d';
} else if (ingredient == 'tree'){
    mySkinText = '#605b37';
} else if (ingredient == 'fruit'){
    mySkinText ='#f68c45';
} else if (ingredient == 'flower'){
    mySkinText = '#c67373';
} else {
    mySkinText = '#1E572C';
}
mySkinTexts.forEach(textElement => {
    textElement.style.color = mySkinText;
});

//COLOR OF KEY: BENEFIT ONE 
//icon
if (ingredient == 'bees'){
    myBenefitOnePic = '#D99828';
} else if (ingredient == 'nut'){
    myBenefitOnePic = '#561d1d';
} else if (ingredient == 'tree'){
    myBenefitOnePic = '#605b37';
} else if (ingredient == 'fruit'){
    myBenefitOnePic ='#f68c45';
} else if (ingredient == 'flower'){
    myBenefitOnePic = '#c67373';
} else {
    myBenefitOnePic = '#1E572C';
}
//text
if (ingredient == 'bees'){
    myBenefitOneText = '#D99828';
} else if (ingredient == 'nut'){
    myBenefitOneText = '#561d1d';
} else if (ingredient == 'tree'){
    myBenefitOneText = '#605b37';
} else if (ingredient == 'fruit'){
    myBenefitOneText ='#f68c45';
} else if (ingredient == 'flower'){
    myBenefitOneText = '#c67373';
} else {
    myBenefitOneText = '#1E572C';
}
myMbTexts.forEach(textElement => {
    textElement.style.color = myBenefitOneText;
});

//COLOR OF KEY: BENEFIT TWO 
//icon
if (ingredient == 'bees'){
    myBenefitTwoPic = '#D99828';
} else if (ingredient == 'nut'){
    myBenefitTwoPic = '#561d1d';
} else if (ingredient == 'tree'){
    myBenefitTwoPic = '#605b37';
} else if (ingredient == 'fruit'){
    myBenefitTwoPic ='#f68c45';
} else if (ingredient == 'flower'){
    myBenefitTwoPic = '#c67373';
} else {
    myBenefitTwoPic = '#1E572C';
}
//text
if (ingredient == 'bees'){
    myBenefitTwoText = '#D99828';
} else if (ingredient == 'nut'){
    myBenefitTwoText = '#561d1d';
} else if (ingredient == 'tree'){
    myBenefitTwoText = '#605b37';
} else if (ingredient == 'fruit'){
    myBenefitTwoText ='#f68c45';
} else if (ingredient == 'flower'){
    myBenefitTwoText = '#c67373';
} else {
    myBenefitTwoText = '#1E572C';
}
mySbTexts.forEach(textElement => {
    textElement.style.color = myBenefitTwoText;
});

//KEY: BENEFIT 2
//icon
for (let line of keySbStroke){
    line.style.stroke = myBenefitTwoPic;
}
if (benefitTwoKey == "FIRMING"){
    for (let line of mySbPics){
        line.style.display = "none";
    }
    keyFirmingPic.style.display = "block";
} else if (benefitTwoKey == "COOLING"){
    for (let line of mySbPics){
        line.style.display = "none";
    }
    keyCoolingPic.style.display = "block";
} else if (benefitTwoKey == "PROTECTION"){
    for (let line of mySbPics){
        line.style.display = "none";
    }
    keyProtectionPic.style.display = "block"; 
} else if (benefitTwoKey == "TIGHTENING"){
    for (let line of mySbPics){
        line.style.display = "none";
    }
    keyTighteningPic.style.display = "block";
} else if (benefitTwoKey == "BALANCE"){
    for (let line of mySbPics){
        line.style.display = "none";
    }
    keyBalancePic.style.display = "block";
} else if (benefitTwoKey == "HYDRATING"){
    for (let line of mySbPics){
        line.style.display = "none";
    }
    keyHydratingPic.style.display = "block";
} else { 
    for (let line of mySbPics){
        line.style.display = "none";
    }
}
//text
for (let text of keySbText){
    text.style.stroke = myBenefitTwoText;
}
if (benefitTwoKeyText == "FIRMING"){
    for (let text of mySbTexts){
        text.style.display = "none";
    }
    keyFirmingText.style.display = "block";
} else if (benefitTwoKeyText == "COOLING"){
    for (let text of mySbTexts){
        text.style.display = "none";
    }
    keyCoolingText.style.display = "block";
} else if (benefitTwoKeyText == "PROTECTION"){
    for (let text of mySbTexts){
        text.style.display = "none";
    }
    keyProtectionText.style.display = "block";
} else if (benefitTwoKeyText == "TIGHTENING"){
    for (let text of mySbTexts){
        text.style.display = "none";
    }
    keyTighteningText.style.display = "block";
} else if (benefitTwoKeyText == "BALANCE"){
    for (let text of mySbTexts){
        text.style.display = "none";
    }
    keyBalanceText.style.display = "block";
} else if (benefitTwoKeyText == "HYDRATING"){
    for (let text of mySbTexts){
        text.style.display = "none";
    }
    keyHydratingText.style.display = "block";
} else { 
    for (let text of mySbTexts){
        text.style.display = "none";
    }
}

//KEY: BENEFIT 1
//icon
for (let line of keyBenefitOneStroke){
    line.style.stroke = myBenefitOnePic;
}
if (benefitOneKey == "HYDRATING"){
    for (let line of myBenefitOnePics){
        line.style.display = "none";
    }
    keyHydrationPic.style.display = "block";
} else if (benefitOneKey == "MOISTURIZING"){
    for (let line of myBenefitOnePics){
        line.style.display = "none";
    }
    keyMoisturizingPic.style.display = "block";
} else if (benefitOneKey == "BRIGHTENING"){
    for (let line of myBenefitOnePics){
        line.style.display = "none";
    }
    keyBrighteningPic.style.display = "block";
} else if (benefitOneKey == "PORE CARE"){
    for (let line of myBenefitOnePics){
        line.style.display = "none";
    }
    keyPoreCarePic.style.display = "block";
} else { 
    for (let line of myBenefitOnePics){
        line.style.display = "none";
    }
}
//text
for (let text of myMbTexts){
    text.style.display = myBenefitOneText;
}
if (benefitOneKeyText == "HYDRATING"){
    for(let text of myMbTexts){
        text.style.display = "none";
    }
    keyHydrationText.style.display = "block";
} else if (benefitOneKeyText == "MOISTURIZING"){
    for(let text of myMbTexts){
        text.style.display = "none";
    }
    keyMoisturizingText.style.display = "block";
} else if (benefitOneKeyText == "BRIGHTENING"){
    for(let text of myMbTexts){
        text.style.display = "none";
    }
    keyBrighteningText.style.display = "block";
} else if (benefitOneKeyText == "PORE CARE"){
    for(let text of myMbTexts){
        text.style.display = "none";
    }
    keyPoreCareText.style.display = "block";
} else { 
    for (let text of myMbTexts){
        text.style.display = "none";
    }
}

//KEY: SKIN TYPE
//icon
for (let line of keySkinStroke){
    line.style.stroke = mySkinPic;
}
if (skinTypeKey == "DRY SKIN"){
    for(let line of mySkinPics){
        line.style.display = "none";
    }
    keyDryPic.style.display = "block";
} else if (skinTypeKey == "OILY SKIN"){
    for(let line of mySkinPics){
        line.style.display = "none";
    }
    keyOilyPic.style.display = "block";
} else if (skinTypeKey == "COMBINATION SKIN"){
    for(let line of mySkinPics){
        line.style.display = "none";
    }
    keyCombinationPic.style.display = "block";
} else if (skinTypeKey == "SENSITIVE SKIN"){
    for(let line of mySkinPics){
        line.style.display = "none";
    }
    keySensitivePic.style.display = "block";
} else if (skinTypeKey == "NORMAL SKIN"){
    for(let line of mySkinPics){
        line.style.display = "none";
    }
    keyNormalPic.style.display = "block";
} else { 
    for (let line of mySkinPics){
        line.style.display = "none";
    }
}

//text
for (let text of mySkinTexts){
    text.style.display = mySkinText;
}
if (skinTypeKey == "DRY SKIN"){
    for(let text of mySkinTexts){
        text.style.display = "none";
    }
    keyDryText.style.display = "block";
} else if (skinTypeKey == "OILY SKIN"){
    for(let text of mySkinTexts){
        text.style.display = "none";
    }
    keyOilyText.style.display = "block";
} else if (skinTypeKey == "COMBINATION SKIN"){
    for(let text of mySkinTexts){
        text.style.display = "none";
    }
    keyCombinationText.style.display = "block";
} else if (skinTypeKey == "SENSITIVE SKIN"){
    for(let text of mySkinTexts){
        text.style.display = "none";
    }
    keySensitiveText.style.display = "block";
} else if (skinTypeKey == "NORMAL SKIN"){
    for(let text of mySkinTexts){
        text.style.display = "none";
    }
    keyNormalText.style.display = "block";
} else { 
    for (let text of mySkinTexts){
        text.style.display = "none";
    }
}




//HANGUL
for (let line of krnStroke){
    line.style.stroke = myKrnName;
}
if (koreanName === "krnsheabutter"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    sheaButter.style.display = "block";
} else if (koreanName === "krnavocado"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    avocado.style.display = "block";
} else if (koreanName === "krnaloe"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    aloe.style.display = "block";
} else if (koreanName === "krnolive"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    olive.style.display = "block";
} else if (koreanName === "krnchamomile"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    chamomile.style.display = "block";
} else if (koreanName === "krnorange"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    orange.style.display = "block";
} else if (koreanName === "krntomato"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    tomato.style.display = "block";
} else if (koreanName === "krnbamboo"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    bamboo.style.display = "block";
} else if (koreanName === "krngreentea"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    greenTea.style.display = "block";
} else if (koreanName === "krncucumber"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    cucumber.style.display = "block";
} else if (koreanName === "krnteatree"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    teaTree.style.display = "block";
} else if (koreanName === "krnacaiberry"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    acaiBerry.style.display = "block";
} else if (koreanName === "krnroyaljelly"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    royalJelly.style.display = "block";
} else if (koreanName === "krnrose"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    rose.style.display = "block";
} else if (koreanName === "krngrapefruit"){
    for(let line of myKrnNames){
        line.style.display = "none";
    }
    grapefruit.style.display = "block";
} else {
    for (let line of myKrnNames){
        line.style.display = "none";
    }
    brandName.style.display = "block";
}




//SECONDARY BENEFIT LEFT CHEEK
for (let line of strokeicontwo){
    line.style.stroke = myLeftCheek;
}
if (secondaryBenefitTwo == "firming"){
    for(let line of myLeftCheeks){
        line.style.display = "none";
    }
    firmingIconTwo.style.display = "block";
} else if (secondaryBenefitTwo== "cooling"){
    for(let line of myLeftCheeks){
        line.style.display = "none";
    }
    coolingIconTwo.style.display = "block";
} else if (secondaryBenefitTwo == "protection"){
    for (let line of myLeftCheeks){
        line.style.display = "none";
    }
    protectionIconTwo.style.display = "block";
} else if (secondaryBenefitTwo == "tightening"){
    for (let line of myLeftCheeks){
        line.style.display = "none";
    }
    tighteningIconTwo.style.display = "block";
} else if (secondaryBenefitTwo = "balance"){
    for (let line of myLeftCheeks){
        line.style.display = "none";
    }
    balanceIconTwo.style.display = "block";
} else if (secondaryBenefitTwo = "hydrating"){
    for (let line of myLeftCheeks){
        line.style.display = "none";
    }
    hydratingIconTwo.style.display = "block";
} else {
    for (let line of myLeftCheeks){
        line.style.display = "none";
    }
} 


//SECONDARY BENEFIT RIGHT CHEEK
for (let line of strokeicon){
    line.style.stroke = myRightCheek;
}
if (secondaryBenefitOne == "firming"){
    for(let line of myRightCheeks){
        line.style.display = "none";
    }
    firmingIcon.style.display = "block";
} else if (secondaryBenefitOne == "cooling"){
    for(let line of myRightCheeks){
        line.style.display = "none";
    }
    coolingIcon.style.display = "block";
} else if (secondaryBenefitOne == "protection"){
    for (let line of myRightCheeks){
        line.style.display = "none";
    }
    protectionIcon.style.display = "block";
} else if (secondaryBenefitOne == "tightening"){
    for (let line of myRightCheeks){
        line.style.display = "none";
    }
    tighteningIcon.style.display = "block";
} else if (secondaryBenefitOne = "balance"){
    for (let line of myRightCheeks){
        line.style.display = "none";
    }
    balanceIcon.style.display = "block";
} else if (secondaryBenefitOne = "hydrating"){
    for (let line of myRightCheeks){
        line.style.display = "none";
    }
    hydratingIcon.style.display = "block";
} else {
    for (let line of myRightCheeks){
        line.style.display = "none";
    }
} 



//MAIN BENEFIT
for(let icon of fillicon){
    icon.style.fill = myIcon;
}
if (mainBenefit == "hydration"){
    for (let icon of myBenefits){
        icon.style.display = "none";
    }
    hydrationIcon.style.display = "block";
} else if (mainBenefit == "moisturizing"){
    for (let icon of myBenefits){
        icon.style.display = "none";
    }
    moisturizingIcon.style.display = "block";
} else if (mainBenefit == "brightening"){
    for (let icon of myBenefits){
        icon.style.display = "none";
    }
    brighteningIcon.style.display = "block";
} else if (mainBenefit == "porecare"){
    for (let icon of myBenefits){
        icon.style.display = "none";
    }
    poreCareIcon.style.display = "block";
} else {
    for (let icon of myBenefits){
        icon.style.display = "none";
    }
}


//SHAPE ACCORDING TO SKIN TYPE
for (let shape of fillshape){
    shape.style.fill = myStroke;
}

for (let shape of strokeshape){
    shape.style.stroke = myStroke;
}

if (skintype == "oily"){
    for (let shape of myShapes){
        shape.style.display = "none";
    }
    oilyShape.style.display = "block";
} else if (skintype == "dry") {
    for (let shape of myShapes){
        shape.style.display = "none";
    }
    dryShape.style.display = "block";
} else if (skintype == "sensitive"){
    for (let shape of myShapes){
        shape.style.display = "none";
    }
    sensitiveShape.style.display = "block";
} else if (skintype == "combination"){
    for (let shape of myShapes){
        shape.style.display = "none";
    }
    combinationShape.style.display = "block";
} else if (skintype == "normal"){
    for (let shape of myShapes){
        shape.style.display = "none";
    }
    normalShape.style.display = "block";
} else {
    for (let shape of myShapes){
        shape.style.display = "none";
    }

}




//CUSTOM GENERATOR








function setSkinType(skintype) {
    if (skintype == "oily") {
        for (let shape of myShapes) {
            shape.style.display = "none";
        }
        oilyShape.style.display = "block";
    } else if (skintype == "dry") {
        for (let shape of myShapes) {
            shape.style.display = "none";
        }
        dryShape.style.display = "block";
    } else if (skintype == "sensitive") {
        for (let shape of myShapes) {
            shape.style.display = "none";
        }
        sensitiveShape.style.display = "block";
    } else if (skintype == "combination") {
        for (let shape of myShapes) {
            shape.style.display = "none";
        }
        combinationShape.style.display = "block";
    } else if (skintype == "normal") {
        for (let shape of myShapes) {
            shape.style.display = "none";
        }
        normalShape.style.display = "block";
    } else {
        for (let shape of myShapes) {
            shape.style.display = "none";
        }
    }
}








// function setSkinType(skintype) {
//     if (skintype == "oily") {
    //   //change the svg
    // } else if (type == "orange") {
    // } else if (type == "banana") {
    // } else if (type == "watermelon") {
    // } else if (type == "mango") {
    // } else if (type == "kiwi") {
    // } else {
//     oilyShape.style.display = "block";
// } else if (skintype == "dry") {
    
//     dryShape.style.display = "block";
// } else if (skintype == "sensitive"){
    
//     sensitiveShape.style.display = "block";
// } else if (skintype == "combination"){
    
//     combinationShape.style.display = "block";
// } else if (skintype == "normal"){
   
//     normalShape.style.display = "block";
// } else {
    
//        return;
//     }
//   }
  












// container.innerHTML = shape1;


    


    // dataParent.appendChild(newElement);



}






// fetch(opensheet_uri)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
        
//         for(let i=0; i<data.length; i++){
//             console.log(data[i]);
//             console.log(data[i]["SHEET MASK"]);
//             console.log(document.querySelector(`.div${i+1}`));
//             document.querySelector(`.div${i+1}`).innerHTML=
//             `<div class="flavor">${data[i]["SHEET MASK"]}</div>
//             <div class="skintype"> <img src="newimages/${data[i]["TARGET SKIN TYPE"]}.svg"></div>
//             <div class="benefit1"> <img src="newimages/${data[i]["MAIN BENEFIT"]}.svg"></div>
//             <div class="benefit2a"> <img src="newimages/${data[i]["SECONDARY BENEFIT"]}.svg"></div>
//             <div class="benefit2b"> <img src="newimages/${data[i]["SECONDARY BENEFIT"]}.svg"></div>
//             <div class="hangul"> <img src="newimages/${data[i]["HANGUL"]}.svg"></div>
//             <div class="keybenefit2">${data[i]["KEY BENEFIT 2"]}</div>
//             <div class="keybenefit2icon"> <img src="newimages/${data[i]["SECONDARY BENEFIT"]}.svg"></div>
//             <div class="keybenefit1">${data[i]["KEY BENEFIT 1"]}</div>
//             <div class="keybenefit1icon"> <img src="newimages/${data[i]["MAIN BENEFIT"]}.svg"></div>
//             <div class="keyskintype">${data[i]["KEY SKIN TYPE"]}</div>
//             <div class="keyskinicon"><img src="newimages/${data[i]["KEY SKIN TYPE"]}.svg"></div>






            
            
            
//             `;
//         }


                
//         //         const selectedMask = "shea butter"; 
//         // const selectedSheetMask = data.find(mask => mask["SHEET MASK"] === selectedMask);
//         // if (selectedSheetMask) {
//         //     const labelContainer = document.querySelector(".label-container");
//         //     if (selectedSheetMask["SHEET MASK"] === "shea butter") {
//         //         labelContainer.style.backgroundColor = "#561d1d";
//         //     } else {
//         //         labelContainer.style.backgroundColor = "transparent";
//         //     }
//         // }
    


//     })
//     .catch(function (err) {
//         console.log("Something went wrong!", err);
//     });



