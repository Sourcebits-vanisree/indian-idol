// var json = JSON.parse('{"home": { "backgroubdImage":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/Home_BackGround.png","heroImage":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/Icon_Home_Center.png","dynamic_menu":[{"button_img_url":"https:\/\/devqa-emsdata.s3.amazonaws.com\/winning\/5323Rst4HorIK3OFykzB8U1HYBizc5KXXKaRhk8hb3SdD3nZYmr7p4qnRyzPCbXX2UZjitMVLyimqMTZ9Ly46qxn5bVmvVau97LR.png","target_url":"leaderboard.html"},{"button_img_url":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/Icon_Sing_Along.png","target_url":"fan_adda.html"},{"button_img_url":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/Icon_Top14.png","target_url":"3"}]},"vote":{"backgroundImage":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/HOMEPAGE.png","headText":"<br/><p style=margin: -3px 0px;color:#fff><span style=background-color:yellow;color:#000;font-size:26px;padding: 0px 16px;font-weight: 800;>VOTE</span>&nbsp;&nbsp;FOR YOUR</p> <p style=font-size:23px;color:#fff>FAVORITE <span style=background-color:#fff;color:#000;font-size:26px>IDOL</p><p style=`color:#fff;font-size:17px`>Click on contestant image to vote</p>","font":"15px","color":"#fff","voteEpisodeId":"1","maxVotes":"40","startTime":"2018/11/16 11:00","endTime":"2018/11/16 20:00","contestants":[{"cid":"0","name":"testing1","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/ankush.png"},{"cid":"1","name":"testing2","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/kunal.png"},{"cid":"2","name":"testing3","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/nilanjana.png"},{"cid":"3","name":"testing4","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/nitin.png"},{"cid":"4","name":"testing4","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/renu.png"},{"cid":"5","name":"testing4","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/salman.png"},{"cid":"6","name":"testing4","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/soumya.png"},{"cid":"7","name":"testing4","image":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/vibhor.png"}],"voteText":"VOTE NOW"},"beforewaitingpage":{"backgroundImage":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/HOMEPAGE.png"},"afterwaitingpage":{"backgroundImage":"https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/sampledata/HOMEPAGE.png"}}');
var json;
// $.getJSON( "https://s3.ap-south-1.amazonaws.com/devqa-emsdata/vote/config/votes-6.json" )
//  .done(function( data ) {
//  	debugger;
//  	json = data;
//  	})
//  .fail(function( jqxhr, textStatus, error ) {
//   var err = textStatus + ", " + error;
//   console.log( "Request Failed: " + err );
// });
 $.ajax({
 crossDomain: true,
 type: "GET",
 url: "https://s3.ap-south-1.amazonaws.com/qa-ems-app-data/vote/config/votes-6.json?"+$.now(),
 contentType: 'application/json; charset=utf-8',
 dataType: 'json',
 async: false,
 success: function (data) {
 	json= data;
}
})