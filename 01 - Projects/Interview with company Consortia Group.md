---
tags:
  - project
---
Hello every one, my name is Nguyen Thanh Tan, im a software engineer and graduated from Van Lan University. 

What is your experience



I have been working with React for the past two years, and in my recent projects, I had the opportunity to work with Electron. For context, Electron is a framework that allows us to build cross-platform desktop applications that run on Linux, macOS, and Windows. I integrated React with Electron to handle the front-end, displaying components and the user interface seamlessly across different operating systems.
	
On the back-end, I implemented a Django API server, which communicated with the Electron app to handle data requests and other server-side functionality. The project had an interesting challenge where my supervisor required a tool to crawl data from various real estate websites across different states in the USA.

Since traditional web browsers restrict embedding and interacting with external websites due to security policies (like cross-origin restrictions), I recommended using Electron for this task. Electron, being a native application, allowed us to bypass browser limitations and access the target websites directly. To handle the web scraping, I also suggested using Puppeteer, a modern JavaScript tool for browser automation, as it integrates well with the tech stack we were using. Puppeteer provided a more streamlined solution compared to Selenium, given that we were primarily working with JavaScript.

This combination of Electron for the desktop environment and Puppeteer for web scraping allowed us to meet the project requirements efficiently, while maintaining a consistent, cross-platform user experience.





In one of my recent project, we built a platform where teachers could upload video courses, and students could enroll and study online. One of the main challenges we faced was handling the video transcoding process, which was I/O-intensive and required converting videos into multiple quality formats to optimize streaming.

Initially, we used Google Cloud’s transcoding service to handle the video processing. While this solution worked well, it became expensive as the platform scaled. To reduce costs and increase flexibility, we decided to implement our own transcoding pipeline.

We used FFmpeg to handle the actual video transcoding. To manage the heavy load of incoming video uploads, we integrated RabbitMQ as a message queue system to distribute the transcoding tasks across multiple worker threads. This allowed us to process videos asynchronously and scale the system efficiently. By designing this custom solution, we were able to significantly cut costs while maintaining performance and scalability.

