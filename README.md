# ClassReport
_Lauzhack 2018 project, made by Ulysse Ramage, Jean Chambras, Julien Malka and Gaspard Peduzzi_

## Table of Contents

- [Installation](#installation)
- [Motivations](#motivations)
- [Technical Considerations](#tech)

## Installation

### Dependencies :gear:
*  In order to be able to run the project you need `python v3.5` and `node v10` with `npm` and `pip3`
* You need to create a `config.js` file at the following path `client/src/api/config.js` with this content :

```
export default {
  // Your endpoint for Microsoft Azure
  faceUri: "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect",
  // Your subscriptions key for this service
  faceKey: "xxxxxxxxxxxxxxxxxxxxxxx",
  // The endpoint of your python server used for handraising recognition
  handUri: "http://xxx.xxx.xxx.xxx:5000/hand-raised"
}
```



### Launch the project :rocket:

Start the __server__ project with:

```sh
cd server
./getModels.sh
pip3 install -r requirements.txt
python3 server.py
```

Start the __application__ project in an other window with:

```sh
cd client
npm install
npm run start
```



## Motivations :mortar_board:
The goal was to create a very **intuitive dashboard** in the time available where a speaker (teacher, speaker, etc.) could understand and be informed of the **audience's interactions**. They are categorized into two categories:
- **The hands raised**, allowing to directly conduct polls with this interaction, or to note the participation of people in relation to the timeline of the session
- **People's expressions**, analyzing the following feelings in all people at every moment of the experience: _anger, contempt, disgust, fear, happiness, neutral, sadness, surprise_ :relieved: :neutral_face: :worried:

## Tech

This project uses state of the art methods in the fields of computer vision and machine learning to be able to identify emotions of the students and raising hand gestures. 

For the latter, we've been using OpenPose to compute a pose estimation of the students in the room and hence know if they're raising their hand.


<center><img src="https://i.imgur.com/jW90QXM.png"></center>

<center><img src="https://thumbs.gfycat.com/DazzlingDisguisedEnglishsetter-size_restricted.gif"></center>
