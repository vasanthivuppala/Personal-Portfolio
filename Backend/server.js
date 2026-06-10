const express = require("express");
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
console.log("Server started");

app.get("/api/dsa", async (req, res) => {

  try {

    const cfResponse = await axios.get(
      `https://codeforces.com/api/user.info?handles=${process.env.CODEFORCES_USERNAME}`
    );

    const cfUser = cfResponse.data.result[0];

const submissionsResponse = await axios.get(
  `https://codeforces.com/api/user.status?handle=${process.env.CODEFORCES_USERNAME}`
);

const solvedProblems = new Set();

submissionsResponse.data.result.forEach((submission) => {

  if (submission.verdict === "OK") {

    solvedProblems.add(
      `${submission.problem.contestId}-${submission.problem.index}`
    );

  }

});


const leetcodeResponse = await axios.post(
  "https://leetcode.com/graphql",
  {
    query: `
     query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }

  userContestRanking(username: $username) {
    rating
  }
      }
    `,
    variables: {
      username: process.env.LEETCODE_USERNAME
    }
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
);

const leetcodeStats =
  leetcodeResponse.data.data.matchedUser.submitStats.acSubmissionNum;

  const easySolved =
  leetcodeStats.find(
    item => item.difficulty === "Easy"
  )?.count || 0;

const mediumSolved =
  leetcodeStats.find(
    item => item.difficulty === "Medium"
  )?.count || 0;

const hardSolved =
  leetcodeStats.find(
    item => item.difficulty === "Hard"
  )?.count || 0;

const totalSolved =
  leetcodeStats.find(
    item => item.difficulty === "All"
  )?.count || 0;

const contestRating =
  Math.round(
    leetcodeResponse.data.data
      .userContestRanking?.rating || 0
  );
  

    const data = {

   leetcode: {
  solved: totalSolved,
  easy: easySolved,
  medium: mediumSolved,
  hard: hardSolved,
  rating: contestRating
},
      codechef: {
        solved: 154,
  rating: 1177,
  globalRank:92015,
  countryRank: 70899
},

    codeforces: {
  solved: solvedProblems.size,
  rating: cfUser.rating || 0,
  rank: cfUser.rank || "Unrated",
  maxRating: cfUser.maxRating || 0,
  maxRank: cfUser.maxRank || "Unrated",
  contribution: cfUser.contribution || 0
}

    };

    res.json(data);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to fetch data"
    });

  }

});
app.post("/api/contact", async (req, res) => {

  const { name, email, message } = req.body;

  try {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");
console.log(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Contact - ${name}`,

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
    });

    res.status(200).json({
      success: true
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});