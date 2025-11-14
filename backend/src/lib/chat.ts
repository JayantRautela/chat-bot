import Groq from "groq-sdk";

const client = new Groq({ apiKey: process.env.GRQO_API_KEY });

export const getResponse = async (message = "Explain me what is javascript") => {
    const messages = [{}];
    messages.push({
        role: 'system',
        content: `You are a smart personal assistant. 
            Your function is to generate responses based on the data you have. 
            Only provide responses in text format in plain english. 
            Only return the answer and not the question.
            Current Date and Time = ${Date.now().toLocaleString()}
            
            For example: 
            Q. What is the capital of India?
            A. The capital of India is Delhi.
            Q. Who was the first prime minister of India?
            A. THe first Prime Minister of India was Jawahar Lal Nehru.
            Q. What is the name of the spcae agency of America?
            A. The name of the space agency of America is NASA(National Aeronautics and Space Administration).
        `
    }, {
        role: 'user',
        content: message
    });
    try {
        const response = await client.chat.completions.create({
            model: 'llama-3.1-8b-instant',
            messages: messages
        });

        console.log(response.choices[0].message.content);
    } catch (error) {
        console.log("Error generating response :- ", error);
        return "Error generating response";
    }
}