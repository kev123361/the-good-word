var request = require("request");
var oauth = require("oauth");

// const oauth_token = "1956087834638225.Cu6B68-bE-vO0lqDacod0K9sMnU";
// const access_token = "EAAbzDTCId5EBAKkY9DwJ0zLIrED1RGJ9JlqKl01beBUgMKiWxqkZAjeTGTC7kLZByqrJEwbsnFt8YXBBG4ccIHStTdqVTnpeBQBYiUSLD0gewxgdhMaTfEfmBbfDrITWTZCMRsfFdIqCJvIXJFxDlwr85I8yfMwNrUAzkbIl09gFz1HZBfMd8APDWUyJPIYZD";

// request.get('https://graph.facebook.com/v2.12/gtakpsi/events?oauth_token=graph.facebook.com/v2.12/gtakpsi/events&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1518839549&oauth_nonce=6mEIC8&oauth_version=1.0&oauth_signature=HFRjCCoxMQcCz2/4kaV60jAY2vc=',
// 	function (err, res, body) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		if (res) {
// 			console.log(res);
// 		}
// ;})

// console.log(request);

var token;


request.get('https://graph.facebook.com/v2.12/oauth/access_token?client_id=1956087834638225&client_secret={PUT SECRET HERE}&grant_type=client_credentials', function (err, res, body) {
	if (err) {
		console.log(err);
		console.log("Make sure you've put the app secret in the url.");
	}
	if (body) {
		token = JSON.parse(body)["access_token"];
		request.get(`https://graph.facebook.com/v2.12/gtakpsi/events?access_token=${token}`, function (err, res, body) {
			if (err) {
				console.log(err);
			}
			if (res) {
				console.log(res.body);
			}
			if (body) {
				console.log(res.body);
			}

		});
	}
});




