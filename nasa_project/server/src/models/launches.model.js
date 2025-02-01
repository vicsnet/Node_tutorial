const launches = new Map();

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

module.exports ={
    launches,
}