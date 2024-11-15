## Setup Instructions

You can view the live app here: [Tich Weather App](https://tich-weather-app.netlify.app/).

### 1. Create the `.env` File
- In the root of the project directory, create a `.env` file.
- Copy the contents of `.env.example` into the `.env` file.
- Replace `your_api_key_here` with your actual API key.

### 2. Obtain an API Key
To get your API key:
1. Visit [WeatherAPI.com](https://www.weatherapi.com/) and create a free account.
2. Log in to your account dashboard after registration.
3. Navigate to the **API Key** section and copy your key.
4. Paste it into the `.env` file in the following format:
   ```plaintext
   REACT_APP_API_KEY=your_actual_api_key
