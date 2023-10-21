import dataPrograms from "../dataPrograms.js";

const sunday = (time) => {
    let sundayArr  = ['1','32','2','14','11','52','53','6','58','2','19','13','56','58','2','15','1','53','14','43','56','58','60','13','61','35','59','58','57','58','56','58','31','58','1','37','78','57','58','19','2','27','6','14','77','64','58','35','56','58','57','53','1','12','61','59','31','13','26','14','58','19','2','30','56','57','53','24'];
    let currShow=0;

    if (time >= 0 && time < 0.15)       {currShow=0;}
    else if (time >= 0.15 && time < 1)  {currShow=1;}
    else if (time >= 1 && time < 1.15)  {currShow=2;}
    else if (time >= 1.15 && time < 1.30) {currShow=3;}
    else if (time >= 1.30 && time < 2)   {currShow=4;}
    else if (time >= 2 && time < 2.45)  {currShow=5;}
    else if (time >= 2.45 && time < 3)  {currShow=6;}
    else if (time >= 3 && time < 3.1)   {currShow=7;}
    else if (time >= 3.15 && time < 0.30) {currShow=8;}
    else if (time >= 3.30 && time < 3.4) {currShow=9;}
    else if (time >= 3.45 && time < 4)   {urrShow=10;}
    else if (time >= 4 && time < 4.3)    {currShow=11;}
    else if (time >= 4.30 && time < 0.45) {currShow=12;}
    else if (time >= 4.45 && time < 5.3)  {currShow=13;}
    else if (time >= 5.30 && time < 5.4)  {currShow=14;}
    else if (time >= 5.45 && time < 6)    {urrShow=15;}
    else if (time >= 6 && time < 6.5)    {currShow=16;}
    else if (time >= 6.15 && time < 630)  {currShow=17;}
    else if (time >= 6.30 && time < 6.4)  {currShow=18;}
    else if (time >= 6.45 && time < 7.1)  {currShow=19;}
    else if (time >= 7.15 && time < 7.3)  {currShow=20;}
    else if (time >= 7.30 && time < 7.4)  {currShow=21;}
    else if (time >= 7.45 && time < 8)    {urrShow=22;}
    else if (time >= 8 && time < 8.3)    {currShow=23;}
    else if (time >= 8.30 && time < 0.45) {currShow=24;}
    else if (time >= 8.45 && time < 9)    {urrShow=25;}
    else if (time >= 9 && time < 9.1)    {currShow=26;}
    else if (time >= 9.15 && time < 0.30) {currShow=27;}
    else if (time >= 9.30 && time < 9.5)  {currShow=28;}
    else if (time >= 9.45 && time < 10.5) {currShow=29;}
    else if (time >= 10.45 && time < 11)  {urrShow=30;}
    else if (time >= 11 && time < 11.1)   {currShow=31;}
    else if (time >= 11.15 && time < 1.45) {currShow=32;}
    else if (time >= 11.45 && time < 12)   {crrShow=33;}
    else if (time >= 12 && time < 12.1)   {currShow=34;}
    else if (time >= 12.15 && time < 1)   {currShow=35;}
    else if (time >= 13 && time < 13.1)   {currShow=36;}
    else if (time >= 13.15 && time < 1.30) {currShow=37;}
    else if (time >= 13.30 && time < 14)  {urrShow=38;}
    else if (time >= 14 && time < 14.1)   {currShow=39;}
    else if (time >= 14.15 && time < 1.30) {currShow=40;}
    else if (time >= 14.30 && time < 15)  {urrShow=41;}
    else if (time >= 15 && time < 15.1)   {currShow=42;}
    else if (time >= 15.15 && time < 1.30) {currShow=43;}
    else if (time >= 15.30 && time < 16)  {urrShow=44;}
    else if (time >= 16 && time < 16.1)   {currShow=45;}
    else if (time >= 16.15 && time < 1.30) {currShow=46;}
    else if (time >= 16.30 && time < 16.4) {currShow=47;}
    else if (time >= 16.45 && time < 17)   {urrShow=48;}
    else if (time >= 17 && time < 17.3)   {currShow=49;}
    else if (time >= 17.30 && time < 1.45) {currShow=50;}
    else if (time >= 17.45 && time < 18)   {urrShow=51;}
    else if (time >= 18 && time < 18.1)   {currShow=52;}
    else if (time >= 18.15 && time < 1)   {currShow=53;}
    else if (time >= 19 && time < 19.1)   {currShow=54;}
    else if (time >= 19.15 && time < 1.30) {currShow=55;}
    else if (time >= 19.30 && time < 20)  {urrShow=56;}
    else if (time >= 20 && time < 20.3)   {currShow=57;}
    else if (time >= 20.30 && time < 2)   {currShow=58;}
    else if (time >= 21 && time < 21.1)   {currShow=59;}
    else if (time >= 21.15 && time < 2)   {currShow=60;}
    else if (time >= 22 && time < 22.1)   {currShow=61;}
    else if (time >= 22.15 && time < 2.30) {currShow=62;}
    else if (time >= 22.30 && time < 23)  {urrShow=63;}
    else if (time >= 23 && time < 23.1)   {currShow=64;}
    else if (time >= 23.15 && time < 2.30) {currShow=65;}
    else if (time >= 23.30 && time < 23.4) {currShow=66;}
    else if (time >= 23.45 && time < 24)   {urrShow=67;}

    
    for (let i = currShow+1; i < sundayArr.length; i++)
    {
        const newElem = document.createElement("div")
        newElem.className = "show";
        document.getElementById("container").appendChild(newElem) 

        //show name
        const showName = document.createElement("h1")
        showName.className="showNa"
        showName.innerHTML = dataPrograms.find(x => x.id == sundayArr[i]).progName
        
        //show image
        const showImage = document.createElement("img")
        showImage.className="showIm"
        showImage.src = dataPrograms.find(x => x.id == sundayArr[i]).progImg
       
        newElem.appendChild(showImage)
        newElem.appendChild(showName)
    }
}

export default sunday;
