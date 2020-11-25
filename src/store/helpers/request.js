import axios from 'axios';
import {apiDefault} from '@/constants';

export async function sendRequest(url, type, data, cleanRequestSupData = {}) {
    const currentURL = `${apiDefault}${url}`;
    let requestData = cleanRequestSupData;
    let params = null;
    let headers = {};
    headers['Authorization'] = "Bearer KY6EqQa5wE56G43Tf-aEBjw1x3TDjUNgAwHgYq16jXY"

    if (type.toUpperCase() == 'GET' || type.toUpperCase() == 'DELETE') {
        params = data;
    } else {
        headers['Content-Type'] = 'application/json'
        requestData.request = data;
    }

    const response = await axios({
        url: currentURL,
        method: type,
        params: params,
        data: requestData,
        headers
    })
    return {response, json: response.data};

}