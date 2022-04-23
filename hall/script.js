const rest = document.getElementById("rest");
const list = document.getElementById("list");
const loaderText = document.getElementById("loaderText");
const loader = document.getElementById("loader");
const container = document.getElementById("rankingcontainer");
const ranking = document.getElementsByClassName("ranking");
const ranking_01 = document.getElementsByClassName("ranking_01");
const ranking_02 = document.getElementsByClassName("ranking_02");
const ranking_03 = document.getElementsByClassName("ranking_03");

window.soon.getRankingByCollections(['0x1c9460ebf38ceff31362b708bf4d079ab516246d', '0x2c4ba46d0c76184f368a789141d8affe86f1d818']).then((obj) => {

  var names = new Array();
  var addresses = new Array();
  var nfts = new Array();

  for (var i = 0; i < obj.length; i++) {

    //Skip 0 count
    if (obj[i].count == 0) continue;

    if (obj[i].member == null) {
      names.push(obj[i].uid);
    } else {
      names.push(obj[i].member);
    }

    addresses.push(obj[i].uid);
    nfts.push(obj[i].count);

  }
 
    //Duplicate Elements
    for (var i = 0; i < addresses.length - 4; i++) {
      var newItem = rest.cloneNode(true);
      list.appendChild(newItem);
    }

    //Update List
    for (var i = 0; i < addresses.length; i++) {
      var username = names[i];
      var rank = i + 1;
      if (rank == 1) { rank = rank + "🥇"; }
      if (rank == 2) { rank = rank + "🥈"; }
      if (rank == 3) { rank = rank + "🥉"; }
      ranking_01[i].textContent = rank;
      ranking_02[i].innerHTML = "<a target='_blank' href='https://soonaverse.com/member/" + addresses[i] + "/nfts'>" + names[i] + "</a>";
      ranking_03[i].textContent = nfts[i];
    }

    //Show
    loaderText.style.display = "none";
    loader.style.display = "none";
    container.style.visibility = "visible";
});

//On Load
window.addEventListener('DOMContentLoaded', () => {
  //-----------------------------MENU---------------------------------
  document.getElementById("menu-bar").onclick = function () {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  //----------------------------MENU END-------------------------------
});