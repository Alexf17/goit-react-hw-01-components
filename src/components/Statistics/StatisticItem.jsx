import PropTypes from "prop-types";
import {Label, Percentage} from './Statistics.styled'

export const StatisticItem = ({ label, percentage }) => {
    return (
        <>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
        </>
    )
}

StatisticItem.propTypes = {
  statics: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
}