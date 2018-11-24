import config from './config';

const getHands = (imageBlob) => {

    const formData = new FormData();
    formData.append('file', imageBlob);

    return fetch(config.handUri, {
        method: 'POST',
        body: formData
    }).then(response => response.json());

};

export default getHands;
