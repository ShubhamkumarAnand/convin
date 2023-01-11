# A web application using ReactJS with the below problem statement

## Main Features of an application where the following functionalities are present -

- User can create, delete and edit a card
- The card must contain name and a video/mp3 link
- Each card can be created under a bucket (eg : Entertainment Videos, Education Videos, Etc )
- The user has the flexibility to Name this bucket according to his/her choice.
- User can move a card from one bucket to an other bucket.
- On clicking on the card a modal with an iframe should open which starts playing the video
- User can delete a single card or multiple card under a single bucket at once
- There should be a separate tab called history which lists the mp3/mp4 links that you have
-played i.e the card name, the link and the time it was played

## Tech stack

1. Frontend: React, Redux, React Router, UI library of your preference (Preferably Antd) ,Redux
Middleware's (e.g. Thunk)
2. Backend: create and use a json server
3. Any additional stack/tools as per your preference.

```text
my-react-project/
  node_modules/
  public/
    index.html
  src/
    actions/
      cards.js  # contains action creators for managing cards
      buckets.js # contains action creators for managing buckets
      history.js # contains action creators for managing history
    components/
      Bucket/
        Bucket.js # component for rendering an individual bucket
        BucketForm.js # component for creating and editing a bucket
        BucketCards.js # component for displaying cards in a bucket
      Card/
        Card.js # component for rendering an individual card
        CardForm.js # component for creating and editing a card
        CardModal.js # component for displaying the modal with the video
      History/
        History.js # component for rendering the history tab
        HistoryItem.js # component for displaying an individual history item
    reducers/
      cards.js  # reducer for managing cards state
      buckets.js # reducer for managing buckets state
      history.js # reducer for managing history state
    utils/
      storage.js  # contains utility functions for interacting with web storage
    index.js
    App.js
  server/
     server.js  # Entry point for JSON Server
     db.json    # mock data
  package.json
  package-lock.json
  README.md

```
