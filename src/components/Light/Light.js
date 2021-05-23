import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Switch from '@material-ui/core/Switch';
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import avatar from "assets/img/devices/light.jpg";

const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
    },
  };

const useStyles = makeStyles(styles);

const Light = (props) => {
    const classes = useStyles();
    const { light, handleLightChange} = props;
    return (
        <div>
        <Card profile>
            <CardAvatar profile>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
            </a>
            </CardAvatar>
            <CardBody profile>
            <h6 className={classes.cardCategory}>{light.name}</h6>
            <h4 className={classes.cardTitle}>Description: {light.description}</h4>
            <Switch
                checked={light.status}
                onChange={handleLightChange}
                color="primary"
                name={light.name}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p className={classes.description}>
                Use this to switch on/Off the {light.name} Light
            </p>
            
            </CardBody>
        </Card>
        </div>
    )
}

Light.propTypes = {
    light: PropTypes.any,
    handleLightChange: PropTypes.func
  };
  

export default Light