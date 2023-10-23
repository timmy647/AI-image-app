# AI Generative Image Web App

![AI Generative Image Web App](/ai_img.png?raw=true "Screenshot")

## Overview

The **AI Generative Image Web App** is a creative platform that allows users to generate images using state-of-the-art AI models, particularly DALL·E AI. It empowers users to generate unique and imaginative images and share them with the community. This project is built to spark creativity and explore the capabilities of AI-generated art.

## Features

- **AI Image Generation**: Create captivating and artistic images using DALL·E AI, a powerful generative model.

- **Community Sharing**: Share your AI-generated images with the community, get feedback, and explore the artistry of fellow users.

- **Artistic Exploration**: Dive into the world of AI artistry, with endless possibilities for generating imaginative visuals.

## Technologies Used

- **React and Tailwind CSS**: The web app is built with React for the frontend and Tailwind CSS for an elegant and responsive design.

- **Express.js**: Express.js powers the backend server, managing user data, image uploads, and interactions with the OpenAI API.

- **Cloudinary**: Cloudinary is used for image storage and management, making it easy to store and serve AI-generated images.

- **MongoDB**: MongoDB is employed for database storage, handling user profiles, image metadata, and community interactions.

- **OpenAI API**: The OpenAI API is used to integrate DALL·E AI for image generation capabilities.


## Acknowledgments

We extend our thanks to OpenAI for their incredible AI models, including DALL·E, which has made this project possible. We also appreciate the efforts of the React, Tailwind CSS, Express.js, and MongoDB communities for their contributions to this project.

## Contributing

If you'd like to contribute to the AI Generative Image Web App, please follow these steps:

1. Fork the repository.

2. Clone the forked repository to your local machine:

   ```
   git clone https://github.com/your-username/ai-generative-image-web-app.git
   ```

# Backend

The backend is powered by Nodejs with Cloudinary, MongoDB and OpenAI API.

## How to run

Create a .env file in the server folder and fill out the following configuration to help connect with your API.
    

    OPENAI_API_KEY=''
    MONGODB_URL=''
    CLOUDINARY_CLOUD_NAME=''
    CLOUDINARY_API_KEY=''
    CLOUDINARY_API_SECRET=''

    
Then, enter the following at the terminal to download the required dependencies and run the backend at localhost:8080.

    npm install
    npm start

# Frontend

The frontend is implemented with React and Tailwind CSS.

## How to run

Then, enter the following at the terminal to download the required dependencies and run the frontend at localhost:5173.
    
    npm install
    npm run dev
    
## Acknowledgments

We would like to extend our gratitude to Adrian Hajdin, the JavaScript Mastery, whose tutorial and guidance have helped shape this remarkable project. If you're   interested in exploring more of Adrian's work, be sure to check out his GitHub repository at [Adrian Hajdin - JS Mastery](https://github.com/adrianhajdin).
