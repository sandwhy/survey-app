import React, {Component} from "react"
import {useSelector} from "react-redux"
import {fetchSurveys} from "../../actions"
import { useDispatch } from "react-redux"

const SurveyList = () => {
    const dispatch = useDispatch()
    dispatch(fetchSurveys())
    const {surveys} = useSelector((state) => state)

    const renderSurveys = () => {
        return surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>
                <div className="card-content">
                  <span className="card-title">{survey.title}</span>
                  <p>
                    {survey.body}
                  </p>
                  <p className="right">
                    Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
                </div>
                <div className="card-action">
                  <a>Yes: {survey.yes}</a>
                  <a>No: {survey.no}</a>
                </div>
              </div>
            )
        })
    }

    return (
        <div>
            {renderSurveys()}
        </div>
    )
}

export default SurveyList