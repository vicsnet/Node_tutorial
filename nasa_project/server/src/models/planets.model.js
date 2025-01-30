// const planets =[]

// module.exports = planets;

const {parse} = require('csv-parse');

const path = require('path');
const fs = require('fs');


const results = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] <1.6;
}

/** 
 *const promise = new promise((resolve, reject) =>{
        resolve(42)
    })
  promise.then((result) =>{
    })

    const result = awiat promise;

    console.log(result)
 * */ 

    function loadPlanetsData(){
        return new Promise((resolve, reject)=>{

            fs.createReadStream(path.join (__dirname, '..', '..', 'data','kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns:true,
            }))
                .on('data', (data) =>{
                    if(isHabitablePlanet(data)) {
            
                        results.push(data);
                    }
                })
                .on('error', (err)=>{
                    console.log(err)
                    reject(err)
                })
                .on('end', ()=>{
                    // console.log(results.map((planet)=>{
                    //     return planet['kepler_name']
                    // }));
                    console.log(`${results.length} habitable planet was found`)
                    console.log('done')
                    resolve()
                })
        })

    }


    module.exports={
        loadPlanetsData,
        planets : results,
    }