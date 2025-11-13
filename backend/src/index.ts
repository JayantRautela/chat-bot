import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const client = new GoogleGenAI({});

const main = async () => {
    // const content: Content[]
    const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "What is ai"
    });

    console.log("RESPONSE : ", response.text);
}

main();