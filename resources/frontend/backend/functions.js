var request = require('request');
var config = require('./config');

functions = {
    authorize: function(req,res) {
        var header = config.consumerKey+':'+config.consumersecret;
        var encheader = new Buffer(header).toString('base64');
        var finalheader = 'Basic ' + encheader;

        request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'}, 
        headers: {Authorization: finalheader}}, function(error, response, body){
            if(error)
            console.log(error);
            else {
                config.bearertoken=JSON.parse(body).access_token;
                res.json({success: true, data:config.bearertoken});
            }
        })
    },
    search: function(req,res){
        //var searchquery=req.body.query;
        //var encsearchquery=encodeURIComponent(searchquery);
        var bearerheader = 'Bearer ' + config.bearertoken;
        request.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=FBVMC', {headers:{Authorization: bearerheader}}, function(error, body, response){
            if(error)
            console.log(error);
            else {
                res.json({success: true, data: JSON.parse(body.body)});
            }
        })
    }
}

module.exports = functions;