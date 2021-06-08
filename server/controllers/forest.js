import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getTrailInfo = async (req, res) => {
    const { userQuery } = req.params;
    var url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/gdTrailInfoOpenAPI';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + `=${process.env.CULTURE_INFO_KEY}`; /* Service Key*/
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

export const getForestStory = async (req, res) => {
    const { userQuery } = req.params;

    var url = 'http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + `=${process.env.TRAIL_INFO_KEY}`; /* Service Key*/
    queryParams += '&' + encodeURIComponent('mntnNm') + '=' + encodeURIComponent(`${userQuery}`); /* */
    queryParams += '&' + encodeURIComponent('mntnHght') + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent('mntnAdd') + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent('mntnInfoAraCd') + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent('mntnInfoSsnCd') + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent('mntnInfoThmCd') + '=' + encodeURIComponent(''); /* */
    try {
        const { data } = await axios.get(url + queryParams);

        res.send(data.response.body.items);
    } catch (err) {
        console.log(err);
    }

}