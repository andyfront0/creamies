const info = document.getElementById("info");
const address = document.getElementById("address");
const addresstext = document.getElementById("addresstext");
const container = document.getElementById("nftcontainer");
var images = document.getElementsByClassName("nftimage");
var link = document.getElementsByClassName("nftlink");
var items = document.getElementsByClassName("nftitems");
var names = document.getElementsByClassName("nftname");
var account;


async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  account = accounts[0];

  window.soon.getNftsByEthAddress(account).then((obj) => {
    console.log(obj);
    address.textContent = account;
    addresstext.style.visibility = "visible";
    address.style.visibility = "visible";

    if (obj.length > 0) {

      info.style.display = "none";

      //Duplicate Elements
      for (var i = 0; i < obj.length - 1; i++) {
        var newItem = items[0].cloneNode(true);
        container.appendChild(newItem);
      }

      //Apply Images
      for (var i = 0; i < obj.length; i++) {
        images[i].src = obj[i].media;
        names[i].textContent = obj[i].name;
        link[i].href = "https://soonaverse.com/nft/" + obj[i].uid;
        images[i].setAttribute("index", i);
        items[i].style.visibility = "visible";
        names[i].style.visibility = "visible";
      }
    } else {
      info.textContent = "No NFTs found."
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
    info.textContent = 'MetaMask not installed!';
  }
});