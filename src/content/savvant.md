---
id: "savvant"
title: "Savvant"
creationDate: "Feb 18, 2023"
tags: 
  - "NLP"
  - "NLTK"
  - "Cohere API"
  - "Fast API"
  - "React + TS"
repositoryUrl: "https://github.com/alyssadsouza/savvant"
videoUrl: "https://www.youtube.com/embed/Z87lOSmQRqs"
thumbnailUrl: "https://github.com/alyssadsouza/alyssadsouza.github.io/blob/main/src/images/savvant-homepage.png?raw=true"
description: "An NLP app that processes e-commerce reviews with sentiment analysis to help determine if you should buy a product."
---

## What is it?

Savvant was a hackathon submission that I worked on with three friends over the duration of two days. We were thinking about what our experience was like whenever we wanted to purchase something. For most of us, if there was something we were considering buying, and particularly if it was pretty pricey, we would search through handfuls of reviews watch review videos to be sure it was a good decision. We wanted to find a way to simplify that process and make it faster.

We came up with Savvant: an ML app that uses natural language processing and web scraping to access and analyze eCommerce reviews for a particular product, giving a holistic overview to better inform purchasing decisions, all in one search. This project was a hackathon submission, so we were really more focused on creating a working demo and seeing what we could accomplish in the two days we had to work on it. We decided to narrow the scope for the sake of time by scraping and analyzing reviews from Amazon because it was the most comprehensive source of product reviews.

![](https://github.com/alyssadsouza/alyssadsouza.github.io/blob/main/src/images/savvant-product.png?raw=true)

The funny thing about the project is that we didn’t realize it was *mildly illegal* to be scraping reviews from Amazon until our web scraper got blocked from making reviews right after recording our demo (more about that in the section below). So we didn’t even end up with a working demo by the end of it solely for the reason that Amazon blocked our web scraper. However, as a proof-of-concept, this project did stand to be inspiration for future projects, and it was my first decent experience with data pipelines and integrating ML models into a full-stack application. It became a concrete example to refer to when working on [RentRite](https://github.com/ShivamJ07/RentRite).

<h2 id="how-it-works">How it Works</h2>

The project was built as a full stack app. The backend performed the web crawling to extract product reviews, and subsequently fed that data to the model to receive a prediction for the sentiment of each review. We could then deliver the analysis of the product to the user by exposing an endpoint with a [FastAPI](https://fastapi.tiangolo.com/) app. To make this accessible to users we built a frontend in [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/docs/), which let users call our API endpoint from a minimal UI.

As I mentioned, we built one web crawler for Amazon product reviews to narrow the scope of the project because of the time limit. The web crawler was built using [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/#), which is a Python library that extracts data from HTML content. The process of scraping reviews for a queried product worked as follows:

1. The user makes a request for some product, for example: “iphone 14”.
2. That query is used to make a search request on Amazon’s search page `https://www.amazon.ca/s?k={query}` which fetches all the top products relevant to that query. We get the top result and find its asin number (which is the unique identifier associated with each Amazon product).
3. We fetch the customer reviews associated with a product by its asin number at `https://www.amazon.ca/product-reviews/{asin}` and use Beautiful Soup to scrape all the reviews based on their class names.

We used [Cohere](https://docs.cohere.com/reference/sentiment-analysis)’s trained sentiment analysis model to analyze our extracted data, which gave us a set of the positive and negative reviews after analyzing each reviews sentiment. It also gave us a confidence rating for each, so we could determine which of the reviews were the most strongest positive and negative reviews to display to the user. We used the mean of each review’s confidence rating to get an overall confidence for the product review analysis.

To display all of this to a user, we built a minimal frontend with React + TS having two main views: a search homepage and the product reviews result page. We used [React Router](https://reactrouter.com/en/main) for simple routing, and [TailwindCSS](https://tailwindcss.com/) for fast and easy responsive styling. We added a feature to the homepage to get common searches for the day which the user could click on to search for those products as well.

![](https://github.com/alyssadsouza/alyssadsouza.github.io/blob/main/src/images/savvant-homepage.png?raw=true)

Like I mentioned, our web crawler ended up getting blocked from Amazon (whoops!). We hadn't realized at the time, but Amazon's [`robots.txt`](https://www.amazon.ca/robots.txt) file bans web crawlers on many of their pages, including the ones we were querying. So perhaps we should've had some more foresight about, but it did become something I knew to consider when working on [RentRite](https://github.com/ShivamJ07/RentRite) – what exactly the rules were for web scraping and how to avoid getting web crawlers for future projects banned. So overall I saw this project as a success because I learned a lot of new things. I had never actually implemented a web crawler for any project before this, nor had I worked with machine learning models. We ended up winning first overall for our demo, which you can see on the Devpost linked [here](https://devpost.com/software/savvant).
