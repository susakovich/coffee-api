# Coffee API

The Coffee API is a RESTful API that provides information about different types of coffee. The API allows users to retrieve a list of coffees with their respective type, country origin, year of introduction, color, and description. In the future, the API will also include a recipe on how to make each coffee.

## How It's Made:

**Tech used:** Node.js, Express.js

<p>Since I love coffee so much, I decided to create my own API. It is currently minimal, but I plan to add recipes, information on how much caffeine each coffee contains, and other features in the future.</p>
<p>The API can be used by developers to build coffee-related applications, such as coffee ordering and delivery platforms, recipe sharing websites, and coffee review platforms. It is designed to be easy to use and can be accessed using HTTP requests.</p>

<p>For each type of coffee, the following information is available:</p>

<p>`id`: A unique identifier for the coffee.</p>
<p>`type`: The type of coffee (e.g. hot, iced, beverage).</p>
<p>`country of origin`: The country where the coffee was first introduced.</p>
<p>`introduced`: The year the coffee was first introduced.</p>
<p>`color`: The color of the coffee.</p>
<p>`description`: A description of the coffee, including its ingredients and how it's prepared.</p>

## Installation

<p>Clone the repository. ( git clone https://github.com/YOUR_USERNAME/coffee-api.git )<p/>
<p>Navigate to the root directory of the project.</p>
<p>Install dependencies with npm install.<p/>
<p>Start the server with npm start.<p/>
<p>The server should now be running on http://localhost:3000.<p/>

## Endpoints

<p>Description: Returns a list of all available coffee drinks</p>
<p>`/api/coffees`</p>
<p>Method: GET</p>

<hr>
<p>Description: Returns information about a specific coffee drink by name</p>
<p>`/api/:coffeeName`</p>
<p>Method: GET</p>

## Lessons Learned:

<p>Throughout the process of creating my coffee API, I learned a lot about software development and project management. One of the biggest lessons I learned was the importance of thorough planning and documentation. Before starting the actual coding, I spent a lot of time researching and defining the API's endpoints, data models, and authentication methods. This helped me avoid major issues and confusion down the line.</p>

<p>Another lesson I learned was the importance of testing and debugging. Even though I tried my best to anticipate potential errors and bugs, there were still unexpected issues that arose during development. Through the process of debugging and fixing these issues, I gained valuable experience in troubleshooting and problem-solving.</p>

<p>Overall, creating this coffee API was a challenging yet rewarding experience. It allowed me to apply my programming skills in a real-world setting and learn new technologies and tools along the way. I'm excited to continue working on this project and improving it further.</p>
