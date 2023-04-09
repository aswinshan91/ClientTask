# ClientTask

Implemented React with typescript.

** Stories Covered in Project: **

1.Problem statement for front end task was for the website page and it has been adopted to a mobile UI with limited screen area

2. Created a 2-column layout with Expand and Collapsable drawer (with user details and 2 links e.g., Dashboard and Blogs) and a content section. Drawer has to be collapsable to access the main sections.

3. Make an API call every time the app is loaded and call to fetch the user details and fill the sidebar user section and display the name in profile.

4. Implement 2 routes (Dashboard and Blogs) to change the content in the content section.

5. On Blogs page, fetch posts data and display a list with the segment of All, Latest and Archieved.

6. in Details Screen, Bydefault edit for content is disable, if you want edit the content and update, click edit action and edit the content and submit for updated the text.

7. Clicking Edit should load that item in a form and saving after changing any text should make a PUT API call with the updated payload. 
Details edit only enable after click edit button below the textbox.

8. After edit the content, when click submit action to call the post api for content update and navigate back to reload the dashboard list.

9. Implement a simple unit test on sidebar to make sure that user detail is fetched. 

**Implemented Features:**

1. .env

2. Strings referred from Constant File.

3. Using Axios to fetch the RESTFUL Api details.

4. Used Ant Design in React Native Components

5. API based random and static Images used in project UI

6. Accordion Component used for side bar which allows expand and collapse the list.

7. Tab Component used for show all, latest, archieved content in Blogs Section.

8. Unit test demonstrated in dashboard.

9. List Component for display the items in Dashboard Screen.

10. Drawer Navigation and Stack Navigation implemented.

11. Exception Handling provided.

12. Seperate stylesheet for UI styles.

13. Extensively commented the code.

Throught Process: 

The project target was to demonstrate as many features as possible rather than to exactly replicate the reference UI screen provided.

**Instruction:**

After clone from git repo -  

Install the node modules using **yarn install**

then move to ios folder to install pod -** pod install**

to run the application in iOS and android use - **yarn start**.

**UI Screenshot:**

![Simulator Screenshot - iPhone 8 - 2023-04-08 at 20 50 06](https://user-images.githubusercontent.com/130089402/230732673-7be3e85a-d8ec-4e2d-bcba-0b92cf4ee54c.png)

![Simulator Screenshot - iPhone 8 - 2023-04-08 at 22 08 10](https://user-images.githubusercontent.com/130089402/230732726-2a0f7062-fbe8-4fc4-9a5f-1b565ac7ce23.png)

![Simulator Screenshot - iPhone 8 - 2023-04-08 at 22 08 14](https://user-images.githubusercontent.com/130089402/230732735-0c670292-b220-4c72-94a3-4ede35cf4a83.png)

![Simulator Screenshot - iPhone 8 - 2023-04-08 at 20 49 39](https://user-images.githubusercontent.com/130089402/230732759-9f6a0641-a358-46f0-b2f1-9ebecb391962.png)

![Simulator Screenshot - iPhone 8 - 2023-04-08 at 20 49 42](https://user-images.githubusercontent.com/130089402/230732769-119e2a19-68d3-4a56-9861-1a32bbe99dfb.png)

![Simulator Screenshot - iPhone 8 - 2023-04-08 at 20 49 45](https://user-images.githubusercontent.com/130089402/230732777-7e1ed355-f049-4500-9936-046600c94293.png)

![Simulator Screenshot - iPhone 8 - 2023-04-08 at 20 50 10](https://user-images.githubusercontent.com/130089402/230732793-d461e3eb-4397-4381-93a6-135e58f2dff3.png)

<img width="552" alt="Screenshot 2023-04-08 at 8 59 55 PM" src="https://user-images.githubusercontent.com/130089402/230732819-63702f7f-beea-471a-992f-1ca2ad165860.png">










