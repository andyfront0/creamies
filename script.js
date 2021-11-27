//On Load
window.addEventListener('DOMContentLoaded', () => {

    window.userWalletAddress = null;
    const connectButton = document.getElementById('connectButton');
    const connectedText = document.getElementById('connectedText');
    const addressText = document.getElementById('addressText');


    //Check if MetaMask Wallet is installed
    function checkMetaMask() {
        if (!window.ethereum) {
            connectButton.innerText = "Install MetaMask!";
            connectButton.style.fontSize = "min(3vw, 15px)";
            connectButton.disabled = true;
        } else {
            connectButton.addEventListener('click', connectMetaMask);
        }
    }

    //Connect to MetaMask
    async function connectMetaMask() {
        //Fetch accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((e) => {
                console.log("User rejected");
                return;
            })

        //If no accounts (this needs a seperate return, bc of async call)
        if (!accounts) { return; }

        //If accounts found
        window.userWalletAddress = accounts[0];
        connectedText.innerText = "Connected!";
        addressText.innerText = window.userWalletAddress;
        connectButton.innerText = 'Disconnect';

        connectButton.removeEventListener('click', connectMetaMask)
        setTimeout(() => {
            connectButton.addEventListener('click', disconnectMetaMask)
        }, 200)
    }

    function disconnectMetaMask() {
        window.userWalletAddress = null
        connectedText.innerText = "";
        addressText.innerText = '';
        connectButton.innerText = 'Connect';

        connectButton.removeEventListener('click', disconnectMetaMask)
        setTimeout(() => {
            connectButton.addEventListener('click', connectMetaMask)
        }, 200)
    }

    //Do this first
    checkMetaMask();

    //If MetaMask account changes
    window.ethereum.on("accountsChanged", accounts => {
        if (accounts.length > 0)
            console.log(`Account connected: ${accounts[0]}`);
        else {
            console.log("Account disconnected");
            disconnectMetaMask();
        }
    });


});