//importing JSON data
import Location from './location';
const segment = ["TS", "SIS", "WSV", "SL2", "BDT", "ALS", "SPM", "IDS", "RCG"];






// Functions 

function genAdditional() {
    const option = document.querySelector('.fmts').value;
    const showRef = document.querySelector('#Referenceid');
    const showTranid = document.querySelector('#tranid');
    if (option == "FMT" || option == "NONOFSFMT" || option == "INVENTORY") {
        showRef.style.display = "block";
        showTranid.style.display = "block"
    } else {
        showRef.style.display = "none";
        showTranid.style.display = "none";
    }
};
// This is to generate area for sending Location
function genSenArea() {
    const areagen = document.querySelector('#senArea');
    const opt = document.createElement('option');
    const areas = Location.map(loc => {
        opt.textContent = loc.Area;
        opt.value = opt.textContent;
        areagen.appendChild(opt);
    });
};
//This is to generate area for receiving side 
function genRecArea() {
    const areagen = document.querySelector("#recArea");
    const opt = document.createElement('option');
    const areas = Location.map(loc => {
        opt.textContent = loc.Area;
        opt.value = opt.textContent;
        areagen.appendChild(opt);
    })
};
//This is to generate the GeoMarket for sending side
function senGeo() {
    const areagen = document.querySelector('#sendGeo');
    const opt = document.createElement('option');
    const geomarket = Location.map(loc => {
        const result = loc.Geomarket;
        const geo = result.map(geomarket => {
            opt.textContent = geomarket.Geomarket;
            opt.value = opt.textContent;
            areagen.appendChild(opt);
        })
    });
};
//This is to generate the Geomarket for the receiving side
function recGeo() {
    const areagen = document.querySelector('recGeo');
    const opt = document.createElement('option');
    const geomarket = Location.map(loc => {
        const result = loc.Geomarket;
        const geo = result.map(geomarket => {
            opt.textContent = geomarket.Geomarket;
            opt.value = opt.textContent;
            areagen.appendChild(opt);
        })
    });
};
//Segment Generating function
function genSeg() {
    const opt = document.createElement('option');
    const target = document.querySelector('#segment');
    const optgen = segment.map(seg => {
        opt.textContent = seg;
        opt.value = opt.textContent;
        target.appendChild(opt);
    });
}
//this is to verify
function senverify() {
    const senCom = document.querySelector('#sendCom').value;
    // const ver = 
};

function recverify() {
    const recCom = document.querySelector('#receivingCo').value;
    // map filter needs to run 
}