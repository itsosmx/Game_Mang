import axios from "axios";
const URL = {
  best: "https://whatoplay.p.rapidapi.com/platform",
  new: "https://whatoplay.p.rapidapi.com/new",
  search: "https://whatoplay.p.rapidapi.com/search",
  details: "https://whatoplay.p.rapidapi.com/game",
  reviews: "https://whatoplay.p.rapidapi.com/game/critics",
};

function bestGameByPlat(platform, count = 20) {
  try {
    axios
      .get(URL.best, {
        params: {
          platform,
          count,
        },
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_API_HOST,
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
      })
      .then((response) => {
        console.log(response.data)
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
}
async function newGameByPlat(platform) {
  try {
    await axios
      .get(URL.new, {
        platform,
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_API_HOST,
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
      })
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
}
async function searchGame(game_name) {
  try {
    await axios
      .get(URL.search, {
        game: game_name,
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_API_HOST,
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
      })
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
}
async function gameDetails(game_id) {
  try {
    await axios
      .get(URL.details, {
        game_id,
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_API_HOST,
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
      })
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
}
async function gameReviews(game_id) {
  try {
    axios
      .get(URL.reviews, {
        game_id,
      })
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
}

export {
  bestGameByPlat,
  newGameByPlat,
  searchGame,
  gameDetails,
  gameReviews,
};
