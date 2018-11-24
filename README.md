# classreport
_Lauzhack 2018 project_

## Table of Contents

- [Installation](#installation)
- [Motivations](#motivations)

## Installation

### Dependencies
*  In order to be able to run the project you need `python v3.5` and `node v10` with `yarn` and `pip`
* You need to create a `config.js` file at the following path `client/src/api/config.js` with this content :

```
export default {
  // Your endpoint for Microsoft Azure
  faceUri: "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect",
  // Your subscriptions key for tbhis service
  faceKey: "xxxxxxxxxxxxxxxxxxxxxxx",
  // The endpoint of your python server used for handraising recognition
  handUri: "http://xxx.xxx.xxx.xxx:5000/hand-raised"
}
```



### Launch the project


Start the __application__ project with:

```sh
cd client
yarn
yarn start
```

Start the __server__ project in an other window with:

```sh
cd server
pip install -r requirements.txt
python server.py
```

## Motivations
The goal was to create a very **intuitive dashboard** in the time available where a speaker (teacher, speaker, etc.) could understand and be informed of the **audience's interactions**. They are categorized into two categories:
- **The hands raised**, allowing to directly conduct polls with this interaction, or to note the participation of people in relation to the timeline of the session
- **People's expressions**, analyzing the following feelings in all people at every moment of the experience: _anger, contempt, disgust, fear, happiness, neutral, sadness, surprise_
