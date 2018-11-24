import config from './config';

const getHands = (imageBlob) => {

  const formData = new FormData();
  formData.append('file',imageBlob);

    return fetch(config.ip_server, {
        method: 'POST',
        body: formData,
        processData: false,
        contentType: false,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(response => response.json());

};

export default getHands;
