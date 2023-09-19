# AI-image-app
A platform to allow users to generate images from DALLE AI and share them with the community.

# Backend
The backend is powered by Nodejs with Cloudinary, MongoDB and OpenAI API.

## How to run
Create a .env file in the server folder and fill out the following configuration to help connect with your API.
```
OPENAI_API_KEY=''
MONGODB_URL=''
CLOUDINARY_CLOUD_NAME=''
CLOUDINARY_API_KEY=''
CLOUDINARY_API_SECRET=''
```
Then, enter the following at the terminal to download the required dependencies and run the backend at localhost:8080.
```
npm install
npm start
```

# Frontend
The frontend is implemented with React and Tailwind CSS.

## How to run
Then, enter the following at the terminal to download the required dependencies and run the frontend at localhost:5173.
```
npm install
npm run dev
```
