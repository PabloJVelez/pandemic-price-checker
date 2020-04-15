1. Add the following new columns to Reported Stores:

   - name of the individual you spoke with at the business
   - date of the transaction or occurencce

2. Implement site-wise caching

3. Implement field validation on all fields upon report submission

4. Implement search-filter field validation

5. Implement pagination on Reported Stores page

   - prevent call to server to refresh page on next tab

6. Implement 'My Account' feature: Your Profile tab

7. Implement 'My Account' feature: Your Settings tab

8. Add additional view for 'My Account feature: Help tab

9. Implement 'My Account' feature: Report an Issue tab

   - integrate SendGrid

10. Implement dark theme

11. Implement form feature to add a description upon creating report.

12. Add new feature: Make store name clickable on the Reported Stores page.

    - A click should create a modal popup
    - User submitted 'Description' upon creating a report should now be visible

13. Set up Firebase Firestore to receive images upon image upload.

14. Implement Upload Image button to take an image and send to Firestore.

    - Form should then note that 'File has been successfully uploaded' next to the 'Choose file' button

15. Remove Item Photo column from main Reported Store chart. Instead, the image upload should appear on the
    store name modal popup.

16. Implement a username to sign up with on login.

17. Fix 'Submitted by' column to populate with the UserId

18. Add Geolocation to automatically fill in the form with address data (maybe Google maps api)

19. Add webhooks for automation tests upon git push

20. Contanerize front/back with docker

21. Create new docker image that contains both front/back together

22. Use Morgan for http request logging

23. Implement custom logs for events within each api call for ease of debugging

24. Create slackbot to display generated logs, notify devs on break

25. Create smoke tests

26. Create npm script for running smoke scripts on server start as an optional flag

27. Prevent git push upon smoke test failure by integrating tests on CI/CD pipeline

28. Store user data on Postgres table

29. Implement 'Forgot a Password' feature

30. Implement way to 'clear' the search filter on the results
    - right now only way to clear is to do a reload
