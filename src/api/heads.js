import request from 'request';
import keys from './keys';

const uri = 'https://northeurope.api.cognitive.microsoft.com/face/v1.0/detect';

const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const urlParams = Object.entries(params).map(e => e.join('=')).join('&');

const getHeads = (imageBlob) => {
    
    return fetch(`${uri}?${urlParams}`, {
        method: 'POST',
        body: imageBlob,
        processData: false,
        contentType: false,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': keys.azure
        }
    }).then(response => response.json());

};

export default getHeads;