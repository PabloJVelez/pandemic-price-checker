1. Add the following new columns to Reported Stores:

   - name of the individual you spoke with at the business
   - date of the transaction or occurencce

2. Implement site-wise caching

3. Add middleware for firebase authentication failures and error handling on sign-on, log-out, and creating an account

4. Implement field validation on all fields upon report submission

5. Implement search-filter field validation

6. Implement pagination on Reported Stores page

   - prevent call to server to refresh page on next tab

7. Implement 'My Account' feature: Your Profile tab

8. Implement 'My Account' feature: Your Settings tab

9. Add additional view for 'My Account feature: Help tab

10. Implement 'My Account' feature: Report an Issue tab

    - integrate SendGrid

11. Implement dark theme

12. Implement form feature to add a description upon creating report.

13. Add new feature: Make store name clickable on the Reported Stores page.

    - A click should create a modal popup
    - User submitted 'Description' upon creating a report should now be visible

14. Set up Firebase Firestore to receive images upon image upload.

15. Implement Upload Image button to take an image and send to Firestore.

    - Form should then note that 'File has been successfully uploaded' next to the 'Choose file' button

16. Remove Item Photo column from main Reported Store chart. Instead, the image upload should appear on the
    store name modal popup.

17. Implement a username to sign up with on login.

18. Fix 'Submitted by' column to populate with the UserId

19. Add ability to track user's auth status

20. Implement 'Reported Stores' navbar tab to open up same view WITHOUT creating-a-report feature if user is unauthenticated

21. Add Geolocation to automatically fill in the form with address data (maybe Google maps api)

22. Setup CORS

23. Integrate TravisCI

24. Add webhooks for automation tests upon git push

25. Contanerize front/back with docker

26. Create new docker image that contains both front/back together

27. Use Morgan for http request logging

28. Implement custom logs for events within each api call for ease of debugging

29. Create slackbot to display generated logs, notify devs on break

30. Create smoke tests

31. Create npm script for running smoke scripts on server start as an optional flag

32. Prevent git push upon smoke test failure by integrating tests on CI/CD pipeline

33. Store user data on Postgres table

34. Implement 'Forgot a Password' feature

35. Implement way to 'clear' the search filter on the results
    - right now only way to clear is to do a reload
