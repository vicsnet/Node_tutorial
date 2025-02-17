
const { getAllLaunches, addNewLaunch , existsLaunchWithId, abortLaunchById} = require("../../models/launches.model");


function   httpGetAllLaunches (req, res) {



    // return res.status(200).json(Array.from(launches.values()));

    return res.status(200).json(getAllLaunches());

}

function httpAddNewLaunch(req, res){
    const launch = req.body;

if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
    return res.status(400).json({
        error: 'Missing Required launch property'
    });
}

    launch.launchDate = new Date(launch.launchDate);
  if( launch.launchDate.toString() === 'Invalid Date'){
    return res.status(400).json({
        error: 'Invalid launch date',
    })
  }

    addNewLaunch(launch);

    res.status(201).json(launch);
}

function httpAbortLaunch(req, res){
    const launchId = Number(req.params.id);
    if(existsLaunchWithId(launchId)){
          // if launch does exist
          const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);

    }else {

        return res.status(404).json({
            error: 'Launch not found',
        })
    }


  
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}