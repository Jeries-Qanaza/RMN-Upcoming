import dataPrograms from "../dataPrograms.js";

const wednesday = (time) => {
    let wednesdayArr = ['1', '32', '40', '63', '51', '58', '53', '6', '58', '79', '19', '13', '56', '58', '2', '15', '1', '53', '14', '43', '18', '60', '13', '61', '35', '69', '58', '74', '51', '58', '79', '1', '37', '78', '56', '58', '19', '30', '58', '6', '14', '58', '64', '58', '56', '69', '2', '53', '1', '12', '61', '27', '35', '13', '26', '14', '56', '30', '19', '72', '58', '61', '53', '24'];
    let currShow = 0;

    if (time >= 0 && time < 0.15) { currShow = 0; }
    else if (time >= 0.15 && time < 1) { currShow = 1; }
    else if (time >= 1 && time < 1.30) { currShow = 2; }
    else if (time >= 1.30 && time < 2) { currShow = 3; }
    else if (time >= 2 && time < 2.30) { currShow = 4; }
    else if (time >= 2.30 && time < 2.45) { currShow = 5; }
    else if (time >= 2.45 && time < 3) { currShow = 6; }
    else if (time >= 3 && time < 3.15) { currShow = 7; }
    else if (time >= 3.15 && time < 3.30) { currShow = 8; }
    else if (time >= 3.30 && time < 3.45) { currShow = 9; }
    else if (time >= 3.45 && time < 4) { currShow = 9; }
    else if (time >= 4 && time < 4.30) { currShow = 10; }
    else if (time >= 4.30 && time < 4.45) { currShow = 11; }
    else if (time >= 4.45 && time < 5.30) { currShow = 12; }
    else if (time >= 5.30 && time < 5.45) { currShow = 13; }
    else if (time >= 5.45 && time < 6) { currShow = 14; }
    else if (time >= 6 && time < 6.15) { currShow = 15; }
    else if (time >= 6.15 && time < 6.30) { currShow = 16; }
    else if (time >= 6.30 && time < 6.45) { currShow = 17; }
    else if (time >= 6.45 && time < 7) { currShow = 18; }
    else if (time >= 7 && time < 7.45) { currShow = 19; }
    else if (time >= 7.45 && time < 8) { currShow = 20; }
    else if (time >= 8 && time < 8.30) { currShow = 21; }
    else if (time >= 8.30 && time < 8.45) { currShow = 22; }
    else if (time >= 8.45 && time < 9) { currShow = 23; }
    else if (time >= 9 && time < 9.30) { currShow = 24; }
    else if (time >= 9.30 && time < 10) { currShow = 25; }
    else if (time >= 10 && time < 11) { currShow = 26; }
    else if (time >= 11 && time < 11.30) { currShow = 27; }
    else if (time >= 11.30 && time < 11.45) { currShow = 28; }
    else if (time >= 11.45 && time < 12) { currShow = 28; }
    else if (time >= 12 && time < 12.15) { currShow = 29; }
    else if (time >= 12.15 && time < 13) { currShow = 30; }
    else if (time >= 13 && time < 13.15) { currShow = 31; }
    else if (time >= 13.15 && time < 13.30) { currShow = 32; }
    else if (time >= 13.30 && time < 14) { currShow = 33; }
    else if (time >= 14 && time < 14.15) { currShow = 34; }
    else if (time >= 14.15 && time < 14.45) { currShow = 35; }
    else if (time >= 14.45 && time < 15) { currShow = 36; }
    else if (time >= 15 && time < 15.15) { currShow = 37; }
    else if (time >= 15.15 && time < 15.30) { currShow = 38; }
    else if (time >= 15.30 && time < 16) { currShow = 39; }
    else if (time >= 16 && time < 16.15) { currShow = 40; }
    else if (time >= 16.15 && time < 16.45) { currShow = 41; }
    else if (time >= 16.45 && time < 17) { currShow = 42; }
    else if (time >= 17 && time < 17.30) { currShow = 43; }
    else if (time >= 17.30 && time < 17.45) { currShow = 44; }
    else if (time >= 17.45 && time < 18) { currShow = 45; }
    else if (time >= 18 && time < 18.15) { currShow = 46; }
    else if (time >= 18.15 && time < 19) { currShow = 47; }
    else if (time >= 19 && time < 19.15) { currShow = 48; }
    else if (time >= 19.15 && time < 19.45) { currShow = 49; }
    else if (time >= 19.45 && time < 20) { currShow = 50; }
    else if (time >= 20 && time < 20.30) { currShow = 51; }
    else if (time >= 20.30 && time < 21) { currShow = 52; }
    else if (time >= 21 && time < 21.15) { currShow = 53; }
    else if (time >= 21.15 && time < 21.30) { currShow = 54; }
    else if (time >= 21.30 && time < 22) { currShow = 55; }
    else if (time >= 22 && time < 22.15) { currShow = 56; }
    else if (time >= 22.15 && time < 22.30) { currShow = 57; }
    else if (time >= 22.30 && time < 23) { currShow = 58; }
    else if (time >= 23 && time < 23.15) { currShow = 59; }
    else if (time >= 23.15 && time < 23.30) { currShow = 60; }
    else if (time >= 23.30 && time < 23.45) { currShow = 61; }
    else if (time >= 23.45 && time < 24) { currShow = 62; }
    

    for (let i = currShow+1; i < wednesdayArr.length; i++) {
        const newElem = document.createElement("div")
        newElem.className = "show";
        document.getElementById("container").appendChild(newElem) 

        //show name
        const showName = document.createElement("h1")
        showName.className = "showNa"
        showName.innerHTML = dataPrograms.find(x => x.id == wednesdayArr[i]).progName

        //show image
        const showImage = document.createElement("img")
        showImage.className = "showIm"
        showImage.src = dataPrograms.find(x => x.id == wednesdayArr[i]).progImg

        newElem.appendChild(showImage)
        newElem.appendChild(showName)
    }
};

export default wednesday;
