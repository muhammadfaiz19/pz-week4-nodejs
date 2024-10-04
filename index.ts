import dotenv from "dotenv";

dotenv.config();

(() => {
    const PORT = process.env.PORT || 3000;
    console.log(PORT);
    console.log(process.env.SECRET_KEY);
    console.log(process.env.TOKEN);
})();
