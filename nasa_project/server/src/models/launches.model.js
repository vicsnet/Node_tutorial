const launches = new Map();

let latestFlightNumber = 100;
const launch ={
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer Is1',
    launchDate: new Date('December27, 2030'),
    destination: 'Keplerr-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);
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

module.exports ={
    launches,
    getAllLaunches,
    addNewLaunch
};