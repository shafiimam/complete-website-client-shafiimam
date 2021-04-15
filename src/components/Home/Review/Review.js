import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Review = ({ reviewData }) => {

    const { userPhoto, name, company, description } = reviewData;

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="card trans-card" id="clientReview">
            <div className="mt-3 d-flex  align-items-center">
                <img className="mx-3 rounded-circle" src={userPhoto} alt="" width="60" />
                <div>
                    <h6>{name}</h6>
                    <p className="m-0">{company}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default Review;