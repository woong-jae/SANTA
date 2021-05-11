import request from 'request';
import xml2js from 'xml2js';
const parseString = xml2js.parseString;

var url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/gdTrailInfoOpenAPI';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.API_KEY; /* Service Key */
queryParams += '&' + encodeURIComponent('searchMtNm') + '=' + encodeURIComponent(''); /* search_mt */
queryParams += '&' + encodeURIComponent('searchArNm') + '=' + encodeURIComponent('대구'); /* search_area */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* page */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* num of rows */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    parseString(body, (err, result) => {
        if(err) throw err;
        const parsed_mt = result["response"]["body"][0]["items"][0]["item"][0]["mntnm"];
        const parsed_area = result["response"]["body"][0]["items"][0]["item"][0]["areanm"];
        console.log(parsed_mt);
        console.log(parsed_area);
    })
});
