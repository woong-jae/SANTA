import request from 'request';
import xml2js from 'xml2js';

const Mountain = function(searchMtNm, searchArNm) {
    const parseString = xml2js.parseString;
    var url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/gdTrailInfoOpenAPI';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.API_KEY; /* Service Key */
    queryParams += '&' + encodeURIComponent('searchMtNm') + '=' + encodeURIComponent(searchMtNm); /* search_mt */
    queryParams += '&' + encodeURIComponent('searchArNm') + '=' + encodeURIComponent(searchArNm); /* search_area */
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* page */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* num of rows */

    request({
        url: url + queryParams,
        method: 'GET'
    }, (error, response, body) => {
        parseString(body, (err, result) => {
            if(err) throw err;
            return result;
        })
    });
}

export default Mountain;