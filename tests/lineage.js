var unirest = require('unirest'),
    OtaHost = 'https://download.lineageos.org'; // Place here you OTA Server Url

// Provide a list of current LineageOS available updates
var getLineageList = function(){
    unirest
    .get(OtaHost + '/api/v1/sailfish/nightly/77433d9635') // optional: add /<incremental_hash> to get delta updates instead
    .headers({
        'Cache-control' : 'no-cache',
        'Content-type' : 'application/json',
        'User-Agent' : 'com.cyanogenmod.updater/3.0'
    })
    .end(function(response){
        console.log( response.body );
    });
}

getLineageList();
