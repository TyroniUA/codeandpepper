import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Main() {
  const [resource, setResource] = useState('human');
  const [arrayOfResources, setArrayOfResources] = useState(null);
  const [selectedResouces, setSelectedResources] = useState(null)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    fetchResources()
  }, [])

  useEffect(() => {
    if (arrayOfResources) {
      randomizeAndSelectWinner()
    }
  }, [arrayOfResources])

  useEffect(() => {
    fetchResources()
  }, [resource])

  const randomizeAndSelectWinner = () => {
    setSelectedResources(null)
    if (arrayOfResources && arrayOfResources.length > 2) {
      const firstIndex = Math.floor(Math.random() * arrayOfResources.length);
      let secondIndex = Math.floor(Math.random() * (arrayOfResources.length - 1));
      if(secondIndex === firstIndex){
        secondIndex = Math.floor(Math.random() * (arrayOfResources.length));
      }
      const array = [arrayOfResources[firstIndex], arrayOfResources[secondIndex]];
      const majorKey = resource === 'human' ? 'mass' : 'crew';
      const winner = array[0][majorKey] > array[1][majorKey] ? 0 : 1;
      setSelectedResources(array);
      setWinner(winner)
    }

  }
  const switchResource = () => {
    if (resource === 'human') {
      setResource('starship')
    }
    else {
      setResource('human')
    }
  }

  const fetchResources = async () => {
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${resource}`)
    setArrayOfResources(result.data.result)
  }

  const card = (props, index) => {
    const keys = Object.keys(props);
    return (
      <>
        <CardContent>
          <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {index === winner ? <span style={{ color: "green", fontSize: '20px' }}>Winner!</span> : null}
            </Typography>
          </div>

          <Typography variant="h5" component="div">

          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {resource}
          </Typography>
          {keys.map(key =>
            <Typography variant="body2">
              {key.charAt(0).toUpperCase() + key.slice(1)}: {props[key]}
            </Typography>
          )}
        </CardContent>
      </>
    )
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}>Resource is: {resource}</div>
      <div style={{ display: 'flex', margin: '3vw auto', justifyContent: 'center', gap: '2vw' }}>
        {selectedResouces && selectedResouces.map((element, index) => <Card  >{card(element, index)}</Card>)}
        {!selectedResouces ? <span>No Resources were created</span> : null}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={randomizeAndSelectWinner}>Play Again</Button>
      <Button onClick={switchResource}>Switch Resource</Button>
    </div>

    </div>
  )
}
