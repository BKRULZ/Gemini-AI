import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

//i have code for gemini ai in this app.js file. i am having api key and model name. generateContent API is used to generate content.
const apiKey = 'AIzaSyBSAnCLH9LkyuY73DS_WEMCCq0-poEKCx4';
const model_name = 'gemini-2.5-flash';
const api = 'generateContent';

const url = `https://generativelanguage.googleapis.com/v1beta/models/${model_name}:${api}?key=${apiKey}`;

//api call to generate content

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({model : model_name});

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  const chat = model.startChat({
    safetySettings,
    history: [

    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
} 


export default runChat;