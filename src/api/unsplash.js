import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4da7d5d896a7b4c519958d7cee56990275578ac59322a937063871927c50d38a"
  }
});
