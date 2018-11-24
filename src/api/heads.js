import request from 'request';
import keys from './keys';

const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const getHeads = (image) => {
    
    console.log(image);

    const options = {
        uri: 'https://northeurope.api.cognitive.microsoft.com/face/v1.0/detect',
        qs: params,
        data: image,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': keys.azure
        }
    };

    const promise = new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
            resolve(jsonResponse);
        });
    });

    return promise;

};

export default getHeads;