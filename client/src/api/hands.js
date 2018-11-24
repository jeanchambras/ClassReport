import config from './config';

const getHands = (imageBlob) => {

    return fetch(config.ip_server, {
        method: 'POST',
        body: imageBlob,
        processData: false,
        contentType: false,
        headers: {
            'Content-Type': 'application/octet-stream',
        }
    }).then(response => response.json());

};

export default getHands;
