import axios from 'axios';

// Backend URL
const backEndURL = 'http://localhost:5000/reviews';

// Method to add new review in the database for selected course
const addReviewByCourseName = (review) => {
    axios.post(backEndURL + '/add-review', review)
    .then((response) => {
    })
    .catch((error) => {
        console.log(error)
    })
}

// Method to delete the review from the database for selected course
const deleteReviewByID = (reviewID) => {
    axios.delete(backEndURL + '/delete-review/' + reviewID)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

export { deleteReviewByID, addReviewByCourseName }