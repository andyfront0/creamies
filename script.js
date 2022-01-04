//On Load
window.addEventListener('DOMContentLoaded', () => {

    //----------------SCROLL BUTTON BEHAVIOUR-----------------
    var scrollButton = document.getElementById("scroll-down");
    var scrollStop = document.getElementById("scrollstop");

    scrollButton.onclick = function () {
        window.scrollTo({ top: scrollStop.offsetTop - 30, left: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', function (e) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop || 0;
        scrollButton.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + scrollStop.offsetTop / 250));
    });
    //----------------SCROLL BUTTON BEHAVIOUR END-----------------

});






/*
window.userWalletAddress = null;
const connectButton = document.getElementById('connectButton');
const connectedText = document.getElementById('connectedText');
const addressText = document.getElementById('addressText');
const sendButton = document.getElementById('sendButton');
let accounts = [];


//Check if MetaMask Wallet is installed
function checkMetaMask() {
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
        connectButton.addEventListener('click', connectMetaMask);
        sendButton.addEventListener('click', sendTransaction);

    } else {
        connectButton.innerText = "Install MetaMask!";
        connectButton.style.fontSize = "min(3vw, 15px)";
        connectButton.disabled = true;
    }
}

//Connect to MetaMask
async function connectMetaMask() {
    //Fetch accounts
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((e) => {
            console.log("User rejected");
            return;
        })

    //If no accounts (this needs a seperate return, bc of async call)
    if (!accounts) { return; }

    //If accounts found
    window.userWalletAddress = accounts[0];
    console.log(ethereum.networkVersion);
    addressText.innerText = window.userWalletAddress;
    sendButton.style.visibility = "visible";
    connectedText.style.visibility = "visible";
    addressText.style.visibility = "visible";
    connectButton.innerText = 'Disconnect';

    connectButton.removeEventListener('click', connectMetaMask)
    setTimeout(() => {
        connectButton.addEventListener('click', disconnectMetaMask)
    }, 200)
}


function sendTransaction() {
    //Sending IOTA to an address
    console.log("sending Transaction");
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: accounts[0],
                        to: '0',
                        value: '0',
                        gasPrice: '0',
                        gas: '0x5208',
                    },
                ],
            })

            //Success
            .then((txHash) => {
                console.log(txHash)
                console.log("Transaction successful");
            })

            //Failed
            .catch((error) => {
                console.error;
                console.log("Transaction failed");
            });
}



function disconnectMetaMask() {
    window.userWalletAddress = null
    addressText.innerText = '';
    connectButton.innerText = 'Connect';
    sendButton.style.visibility = "hidden";
    connectedText.style.visibility = "hidden";
    addressText.style.visibility = "hidden";


    connectButton.removeEventListener('click', disconnectMetaMask)
    setTimeout(() => {
        connectButton.addEventListener('click', connectMetaMask)
    }, 200)
}

//Do this first
checkMetaMask();

//If MetaMask account changes
window.ethereum.on("accountsChanged", accounts => {
    if (accounts.length > 0) {
        console.log(`Account connected: ${accounts[0]}`);
    } else {
        console.log("Account disconnected");
        disconnectMetaMask();
    }
});
*/

