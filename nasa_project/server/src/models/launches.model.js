const launches = new Map();

let latestFlightNumber = 100;
const launch ={
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer Is1',
    launchDate: new Date('December27, 2030'),
    target: 'Keplerr-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber ++;
    launches.set(latestFlightNumber, Object.assign(launch, {

    
        sucess: true,
        upcoming: true,
        customers: [ 'Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber,

    })
)
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId)
    aborted.upcoming = false;
    aborted.sucess = false;
    return aborted;
   
}

module.exports ={
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById
};