import { useEffect, useState } from "react"
import axios from "axios"
import './ReviewForm.css'
import { BASE_URL } from "../globals"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 


const ReviewForm = ({pieceId, setReviews, setShowReviewForm}) => {

    const createReview = async(url, object) => {
      
        const response = await axios.post(url, object)
        setReviews(prevReviews => {
            console.log("Previous Reviews:", prevReviews);
            const updatedReviews = [...prevReviews, response.data];
            console.log("Updated Reviews:", updatedReviews);
            return updatedReviews;
        });
        setShowReviewForm(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        formJson.userId = localStorage.getItem('userId')
        formJson.piece = pieceId
        let endpointUrl = `${BASE_URL}/reviews`
        createReview(endpointUrl, formJson)
    }

return (
    <Form className="createReviewForm" method = "post" onSubmit = {handleSubmit}>
        <FormGroup>
            <Label for="exampleEmail"> Name </Label>
            <Input
            id="exampleName"
            name="userName"
            placeholder="Enter your name"
            type="text"
            />
        </FormGroup>  
        <FormGroup>
            <Label for="exampleText">
            Review
            </Label>
            <Input
            id="exampleText"
            name="text"
            placeholder="Write your comments here"
            type="textarea"
            />
        </FormGroup>
        <Button type = "submit">
            Submit
        </Button>
    </Form>
)
}

export default ReviewForm