BackEnd Server:
https://business-on-bot-backend-rouge.vercel.app/

Get All Users:
https://business-on-bot-backend-rouge.vercel.app/users

Get All Posts:
https://business-on-bot-backend-rouge.vercel.app/posts

Search By Name:
https://business-on-bot-backend-rouge.vercel.app/user/:name

NO SQL DATABASE SO NO REALTIONAL DATABASE

User Attributes:
1. _id: A unique identifier assigned to the user.
2. firstName: The given name of the user.
3. lastName: The family name of the user.
4. email: The email address associated with the user.
5. password: The encrypted password of the user.
6. picturePath: The path or web address leading to the user's profile picture.
7. friends: A list containing details about the user's connections.
8. location: The city or area where the user lives.
9. occupation: The job or profession of the user.
10. viewedProfile: The ID of the profile that the user has seen.
11. impressions: A numerical value representing interactions or engagement.
12. createdAt: The timestamp indicating when the user's account was created.
13. updatedAt: The timestamp indicating when the user's account was last modified.
14. __v: A version identifier used by MongoDB for tracking document revisions.

Post Attributes:
1. id: A unique identifier assigned to the post.
2. userId: The ID of the user who authored the post.
3. firstName: The first name of the user who created the post.
4. lastName: The last name of the user who authored the post.
5. location: The place associated with the post.
6. description: A brief text describing the content of the post.
7. picturePath: The path or web address leading to the primary image in the post.
8. userPicturePath: The path or web address leading to the profile picture of the post's author.
9. likes: Information about the likes received by the post.
10. comments: Details about the comments made on the post.
11. createdAt: The timestamp indicating when the post was created.
12. updatedAt: The timestamp indicating when the post was last modified.
13. __v: A version identifier used by the database system for tracking document versions.

