import config from "./config";

function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}

const getInventory = (args) => {
    console.log('getting inventory');
    sleepFor(1000);
    console.log(config);
    console.log('inventory downloaded');
    return 10;
}

export default getInventory;