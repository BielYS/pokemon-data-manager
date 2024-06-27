import { getAPIData } from "./modules/getAPIData";
import { toCamelCase } from "./utils/camelCase";
import * as fs from "fs";
const url: string = "https://pokeapi.co/api/v2/pokemon/";

export async function pokemonManager() {
    try{
        const data = await getAPIData(url);
        console.log(toCamelCase("biel"));
        console.log(toCamelCase("KEVIN"));
        fs.writeFileSync("pokemonData.json", JSON.stringify(data, null, 2));
        console.log("Data saved to pokemonData.json");
    } catch(error) {
        console.error("Error managing Pokemon data: ", error);
    }
    
}