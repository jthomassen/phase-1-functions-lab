const headQuarter = 42

function distanceFromHqInBlocks(currentLocation) {
    return Math.abs(headQuarter - currentLocation);
}

function distanceFromHqInFeet(currentLocation) {
    return Math.abs((headQuarter - currentLocation)*264);
}

function distanceTravelledInFeet(currentLocation, dropOff) {
    return Math.abs((dropOff - currentLocation)*264);
}

function calculatesFarePrice(currentLocation, dropOff) {
    const price = distanceTravelledInFeet(currentLocation, dropOff);
    if (price <= 400) {
        return 0;
    } else if (price > 400 && price <= 2000) {
        return (price-400)*0.02;
    } else if (price > 2000 && price <= 2500) {
        return 25;
    } else if (price > 2500) {
        return 'cannot travel that far';
    }

}