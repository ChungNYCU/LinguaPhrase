import { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import express from "express";

const app = express();

// Define a POST request handler
app.post(
  "/api/emailWriter",
  async (req: express.Request, res: express.Response) => {
    const { sender, recipient, propose } = req.body;
    const prompt = `Write an email from ${sender} to ${recipient} about ${propose} in 200 words, do not use any familiar with the classic “I hope you’re doing well” and its related family of phrases`;
    // Define the request payload
    const request = {
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 500,
      temperature: 0.5,
      top_p: 1,
      n: 1,
      stream: false,
      logprobs: null,
    };

    // Define the API endpoint URL
    const apiUrl = "https://api.openai.com/v1/completions";

    // Add your API key as a header
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };

    var result: string = "";
    // Send the request to the API
    await axios
      .post(apiUrl, request, { headers })
      .then((response) => {
        result = response.data.choices[0].text;
        console.log(result); // Prints the generated text
      })
      .catch((error) => {
        console.error(error);
      });
    res.status(201).json(result);
  }
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Call the appropriate handler function based on the request method
  switch (req.method) {
    case "POST":
      return app(req, res);
  }

  // If the request method is not allowed, return an error
  res.status(405).json({ message: "Method not allowed" });
}
