import React from 'react'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import {GoCheck} from 'react-icons/go'
import './UpdateSuccessCard.css'

const UpdateSuccessCard = () => {
  return (
    <div className="depositsuccesswrappe">
        <div className="depositsuccessclose">
        <IoIosCloseCircleOutline className="depositsuccess"/>
        </div>
        <div className="depositsuccessmaincontainer">
        <div className="despositsuccesscheckwork">
            <GoCheck className="depositsuccesscheckspa"/>
        </div>
        <h1>Success!</h1>
        <p>You've updated your Saving Goals List.Good Luck in achieving your target!</p>
        </div>
    </div>
  );
}

export default UpdateSuccessCard
