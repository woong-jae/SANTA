import axios from "axios";

export const getMountainInfo = async (req, res) => {
    const { userQuery } = req.params;
    var url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/gdTrailInfoOpenAPI';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=OYcCLCoVVtICqlF7ojMBJxNb02JQOn%2B0nlOpzzfkz1q8cK6ubmFPrZpASFbIGac71y5ZLsuQaNm%2Bye6MPH%2FF%2Fg%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('searchMtNm') + '=' + encodeURIComponent(`${userQuery}`); /* */
    queryParams += '&' + encodeURIComponent('searchArNm') + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
    try {
        const { data } = await axios.get(url + queryParams);

        res.send(data.response.body.items);
    } catch (err) {
        console.log(err);
    }
}