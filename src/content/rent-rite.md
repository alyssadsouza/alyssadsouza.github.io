---
id: "rentrite"
title: "RentRite"
creationDate: "Nov 12, 2023"
tags: 
  - "Random Forests"
  - "numpy"
  - "pandas"
  - "scikit-learn"
  - "Fast API"
  - "React + TS"
repositoryUrl: "https://github.com/ShivamJ07/RentRite"
# tryItOutUrl: "https://rent-rite.vercel.app/"
videoUrl: "https://drive.google.com/file/d/1WTX6H7Ipr7Af-1TmTXb9m_bz2Vx8toSa/preview"
thumbnailUrl: "https://lh3.googleusercontent.com/d/1ZUgG_vduuaTCBxzcCJBw1c33t50iSDDS?authuser=0"
description: "A price prediction model and price trend analysis tool for apartment rentals in major Canadian cities."
---

## What is it?

RentRite is a project I worked on with a friend to create a price prediction model and price trend analysis tool for apartment rentals in major Canadian cities. As students in co-op programs, we often move to new cities for internships, and finding a place to live can be challenging. We wanted to see what kind of informed data we could gather to help ourselves and others make better decisions about where and when to rent.

## How it Works

### General Overview

The project has several key components: data acquisition, model training, an API, and a user-friendly UI.

1. **Data Acquisition**: We manually run a data scraper once a month, which outputs raw and cleaned CSV files to the `data` directory of our GitHub repo. This data is also stored in a database.
2. **Model Training**: After acquiring the latest data, we manually re-train our model using batch processing. The updated model is saved as a `joblib` file.
3. **API**: Hosted on Heroku, our API provides endpoints that make requests to the model on demand.
4. **UI**: Deployed as a Vercel app, our frontend makes requests to the API, allowing users to access the data and predictions in a simple interface.

### User Workflow

Users interact with RentRite through two main workflows:

1. **Price Predictions**: Users can get price predictions for specific properties based on detailed parameters such as location, size, and amenities. This is helpful for property owners trying to maximize their revenue or renters planning their budgets. For example, a user can find out the expected price for a one-bed apartment (600 SqFt, 1 bath, pets allowed, dishwasher) in Liberty Village, Toronto. ![Price Predictions section of the UI](https://lh3.googleusercontent.com/d/1YUbickGVuA_W-C5e2ROmVqicCHTeDSL5?authuser=0)

2. **Market Trends**: Users can get overarching information about rental prices in specific geographic areas. For example, they can find out the average studio prices in Toronto or which condos have the cheapest price per square foot for a 1-bed in Edmonton. We use Tableau to create interactive visualizations based on the parameters specified by the user. ![Market Trends section of the UI](https://lh3.googleusercontent.com/d/14LL5rFMkP46V9V9erpvKNKKr-G9sVpCX?authuser=0)

### API Workflow

The API supports the price prediction workflow:

- The API exposes a random forest scikit-learn model for price predictions, re-trained monthly with new data.
- Endpoints allow users to request predictions based on the most recent data, ensuring accurate and up-to-date results.

### Deployment

We host the API on Heroku, with the `backend` directory in the main branch of our GitHub repo containing the necessary environment settings. The UI is deployed as a Vercel Next.js app from the `frontend` directory.

### Data Acquisition and Model Training Process

On the first of each month, we manually scrape new data, push it to the database, and retrain the model. Here’s how it works:

1. **Data Scraping**:
    - Check if the current month’s data file exists. If not, scrape rental listings from five major Canadian cities: Toronto, Vancouver, Montreal, Winnipeg, Edmonton.
    - Save the raw data to `data/raw_data` and the cleaned data to `data/cleaned_data`.
    - If errors occur, clean up and exit the process.

2. **Database Update**:
    - Convert data rows to database objects (`Building` and `Unit` objects) and save them in bulk.
    - Create new building entries and add units to existing buildings.
    - Handle errors by removing units added in the current session without affecting building entries.

3. **Model Retraining**:
    - Retrain the model with the cleaned data and save the updated `joblib` model file.
    - Maintain an archive of past models for reference.
    - Handle errors to prevent overwriting the current model with faulty data.

## General Thoughts

As some general thoughts:

- Manually running data scraping and model training each month has its challenges, but it ensures that our data is always up to date. That said, updating to an automated process would be a worthwhile next step.
- Using Tableau for visualizations makes the data more accessible and insightful, and it was really easy to integrate into the web app.
- Using a random forest model from scikit-learn for our price predictions made it very effective for data that matches our training set, but definitely limits its effectiveness on outlier data, so reworking to a different type of model would probably greatly improve its success. After learning more about using ML models for data analysis and prediction, I would love to return to this project and experiment to get better results.

For now we've stopped data collection since the time and resources spent on scraping thousands of listings monthly isn't justified for a project that we aren't actively improving. However, with solid improvements to the model side, insights and predictions from RentRite can genuinely help people make better rental decisions, whether they are looking for a new place during their internships or trying to set competitive rental prices, so it's always worth considering returning to. Overall, working on this project taught me a lot about data pipelines, machine learning, and the practical aspects of deploying a full-stack application so I definitely consider it a worthwhile effort.
