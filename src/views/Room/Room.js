import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardHeader from "components/Card/CardHeader.js";

import AC from 'components/AC/AC'
import Light from 'components/Light/Light'
import Fan from 'components/Fan/Fan'
import Plug from 'components/Plug/Plug'
import Heater from 'components/Heater/Heater'
import rooms from 'variables/room'


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

const Room = (props) => {
  // console.log(props)
  const classes = useStyles();
  const [acs, setAcs] = useState(rooms[0].devices.acs)
  const [lights, setLights] = useState(rooms[0].devices.lights)
  const [fans, setFans] = useState(rooms[0].devices.fans)
  const [plugs, setPlugs] = useState(rooms[0].devices.plugs)
  const [heaters, setHeaters] = useState(rooms[0].devices.heaters)

  const fetchHeaters = () => {
    let currentRoom = rooms.filter(room => {
      if (`/admin${room.path}` === props.location.pathname) {
        return true
      }
    })
    // console.log(currentRoom)
    if (currentRoom[0].devices && currentRoom[0].devices.heaters) {
      setHeaters(currentRoom[0].devices.heaters)
    } else {
      setHeaters([])
    }
  }
  const fetchAcs = () => {
    // console.log("In fetchAcs")
    let currentRoom = rooms.filter(room => {
      if (`/admin${room.path}` === props.location.pathname) {
        return true
      }
    })
    // console.log(currentRoom)
    if (currentRoom[0].devices && currentRoom[0].devices.acs) {
      setAcs(currentRoom[0].devices.acs)
    } else {
      setAcs([])
    }
  }

  const fetchLights = () => {
    let currentRoom = rooms.filter(room => {
      if (`/admin${room.path}` === props.location.pathname) {
        return true
      }
    })
    if (currentRoom[0].devices && currentRoom[0].devices.lights) {
      setLights(currentRoom[0].devices.lights)
    } else {
      setLights([])
    }
  }

  const fetchFans = () => {
    let currentRoom = rooms.filter(room => {
      if (`/admin${room.path}` === props.location.pathname) {
        return true
      }
    })
    if (currentRoom[0].devices && currentRoom[0].devices.fans) {
      setFans(currentRoom[0].devices.fans)
    } else {
      setFans([])
    }
  }

  const fetchPlugs = () => {
    let currentRoom = rooms.filter(room => {
      if (`/admin${room.path}` === props.location.pathname) {
        return true
      }
    })
    if (currentRoom[0].devices && currentRoom[0].devices.plugs) {
      setPlugs(currentRoom[0].devices.plugs)
    } else {
      setPlugs([])
    }
  }

  useEffect(() => {
    fetchAcs()
    fetchLights()
    fetchFans()
    fetchPlugs()
    fetchHeaters()
  }, [])

  const handleACChange = (event) => {
    var newArr = acs.filter((ac) => {
      if (ac.name === event.target.name) {
        ac.status = event.target.checked
        return ac
      }
      return ac
    })
    setAcs(newArr)
    // console.log(event.target.name, event.target.checked)
  };

  const handleLightChange = (event) => {
    var newArr = lights.filter((light) => {
      if (light.name === event.target.name) {
        light.status = event.target.checked
        return light
      }
      return light
    })
    setLights(newArr)
    // console.log(event.target.name, event.target.checked)
  };

  const handleFanChange = (event) => {
    var newArr = fans.filter((fan) => {
      if (fan.name === event.target.name) {
        fan.status = event.target.checked
        return fan
      }
      return fan
    })
    setFans(newArr)
    // console.log(event.target.name, event.target.checked)
  };

  const handlePlugChange = (event) => {
    var newArr = plugs.filter((plug) => {
      if (plug.name === event.target.name) {
        plug.status = event.target.checked
        return plug
      }
      return plug
    })
    setPlugs(newArr)
    // console.log(event.target.name, event.target.checked)
  };

  const handleHeaterChange = (event) => {
    var newArr = heaters.filter((heater) => {
      if (heater.name === event.target.name) {
        heater.status = event.target.checked
        return heater
      }
      return heater
    })
    setHeaters(newArr)
    // console.log(event.target.name, event.target.checked)
  };

  return (
    <div>
      <GridContainer>
      {
        acs.length && (
          <GridItem xs={12} sm={12} md={3}>
          <CardHeader color="primary" onClick={fetchAcs}>
            <h4 className={classes.cardTitleWhite}>ACs in the room</h4>
            <p className={classes.cardCategoryWhite}>Registered list of ACs</p>
          </CardHeader>
          {
            acs.map((ac, index) => {
              // console.log(index)
              return(
                <AC key={index} ac={ac} handleACChange={handleACChange}/>
              )
            })
          }
        </GridItem>
        ) 
      }
      {
        lights.length && (
          <GridItem xs={12} sm={12} md={3}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Lights in the room</h4>
            <p className={classes.cardCategoryWhite}>Registered list of Lights</p>
          </CardHeader>
          {
            lights.map((light, index) => {
              // console.log(index)
              return(
                <Light key={index} light={light} handleLightChange={handleLightChange}/>
              )
            })
          }
        </GridItem>
        )
      }
      {
        fans.length && (
          <GridItem xs={12} sm={12} md={3}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Fans in the room</h4>
            <p className={classes.cardCategoryWhite}>Registered list of Fans</p>
          </CardHeader>
          {
            fans.map((fan, index) => {
              // console.log(index)
              return(
                <Fan key={index} fan={fan} handleFanChange={handleFanChange}/>
              )
            })
          }
        </GridItem>
        )
      }
      {
        plugs.length && (
          <GridItem xs={12} sm={12} md={3}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Plugs in the room</h4>
            <p className={classes.cardCategoryWhite}>Registered list of Plugs</p>
          </CardHeader>
          {
            plugs.map((plug, index) => {
              // console.log(index)
              return(
                <Plug key={index} plug={plug} handlePlugChange={handlePlugChange}/>
              )
            })
          }
        </GridItem>  
        )
      }
      {
        heaters.length && (
          <GridItem xs={12} sm={12} md={3}>
          <CardHeader color="primary" onClick={fetchAcs}>
            <h4 className={classes.cardTitleWhite}>Heaters in the room</h4>
            <p className={classes.cardCategoryWhite}>Registered list of ACs</p>
          </CardHeader>
          {
            heaters.map((heater, index) => {
              // console.log(index)
              return(
                <Heater key={index} heater={heater} handleHeaterChange={handleHeaterChange}/>
              )
            })
          }
        </GridItem>
        ) 
      }
      </GridContainer>
    </div>
  );
}

Room.propTypes = {
  location: PropTypes.any,
};

export default Room