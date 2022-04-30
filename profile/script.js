const info = document.getElementById("info");
const address = document.getElementById("address");
const addresstext = document.getElementById("addresstext");
const loader = document.getElementById("loader");

const mainContainer = document.getElementById("maincontainer");
const containerCreamies = document.getElementById("nftcontainerCreamies");
var imagesCreamies = document.getElementsByClassName("nftimageCreamies");
var linkCreamies = document.getElementsByClassName("nftlinkCreamies");
var itemsCreamies = document.getElementsByClassName("nftitemsCreamies");
var namesCreamies = document.getElementsByClassName("nftnameCreamies");

const containerOthers = document.getElementById("nftcontainerOthers");
var imagesOthers = document.getElementsByClassName("nftimageOthers");
var linkOthers = document.getElementsByClassName("nftlinkOthers");
var itemsOthers = document.getElementsByClassName("nftitemsOthers");
var namesOthers = document.getElementsByClassName("nftnameOthers");

const nothingCreamies = document.getElementById("nothingCreamies");
const nothingOthers = document.getElementById("nothingOthers");

var indexCreamies = new Array();
var indexOthers = new Array();
var account;


async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  account = accounts[0];

  window.soon.getNftsByEthAddress(account).then((obj) => {
    //console.log(obj);
    address.textContent = account;
    loader.style.display = "none";
    addresstext.style.visibility = "visible";
    address.style.visibility = "visible";
    info.style.display = "none";

    if (obj.length > 0) {

      for (var i = 0; i < obj.length; i++) {

      //Check if Creamies or not
        if (obj[i].space == "0xa8e2122d528809861a925d90e5edff5c685825df") {
          indexCreamies.push(i);
        } else {
          indexOthers.push(i);
        }
      }

      //Duplicate
      for (var i = 0; i < indexCreamies.length-1; i++) {
        var newItem = itemsCreamies[0].cloneNode(true);
        containerCreamies.appendChild(newItem);
      }

      for (var i = 0; i < indexOthers.length-1; i++) {
        var newItem = itemsOthers[0].cloneNode(true);
        containerOthers.appendChild(newItem);
      }


      //Apply Images for Creamies
      for (var i = 0; i < indexCreamies.length; i++) {
          nothingCreamies.style.display = "none";
          imagesCreamies[i].src = obj[indexCreamies[i]].media;
          namesCreamies[i].textContent = obj[indexCreamies[i]].name;
          linkCreamies[i].href = "https://soonaverse.com/nft/" + obj[indexCreamies[i]].uid;
          itemsCreamies[i].style.visibility = "visible";
      }

      //Apply Images for Others
      for (var i = 0; i < indexOthers.length; i++) {
          nothingOthers.style.display = "none";
          imagesOthers[i].src = obj[indexOthers[i]].media;
          namesOthers[i].textContent = obj[indexOthers[i]].name;
          linkOthers[i].href = "https://soonaverse.com/nft/" + obj[indexOthers[i]].uid;
          itemsOthers[i].style.visibility = "visible";
      }

      //Make visible
      mainContainer.style.visibility = "visible";

    } else {
      mainContainer.style.visibility = "visible";
    }
  });
}


//On Load
window.addEventListener('DOMContentLoaded', () => {
  //-----------------------------MENU---------------------------------
  document.getElementById("menu-bar").onclick = function () {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  //----------------------------MENU END-------------------------------

  if (typeof window.ethereum !== 'undefined') {
    getAccount();
  } else {
    loader.style.display = "none";
    info.textContent = 'MetaMask not installed!';
  }
});