document.addEventListener("DOMContentLoaded",function() {
    var request = new XMLHttpRequest(),
        channelsRequest = new XMLHttpRequest(),
        auth,
        info = JSON.stringify({"device":{"type":"DT_SmartTV","mac":"34:FC:EF:D9:C4:B2"}});
    request.open('POST','http://tv-server.trinity-tv.net/server/TvServerService/Auth.json',true);
    channelsRequest.open('POST','http://tv-server.trinity-tv.net/server/TvServerService/GetChannels.json',true);
    request.addEventListener('readystatechange', function() {
        if ((request.readyState==4) && (request.status==200)) {
            auth = JSON.parse(request.responseText).auth_token;
            console.log(auth);
                token = JSON.stringify({auth,"need_icons":true,"need_epg":true,"need_offsets":true,"need_categories":true,"epg_start_offset":10,"epg_stop_offset":25});

            channelsRequest.setRequestHeader('Content-Type', 'application/json');
            channelsRequest.send(token)
        }
    });
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(info);


});