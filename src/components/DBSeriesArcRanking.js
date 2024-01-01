import React, { useState } from 'react';
import axios from 'axios';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../css/DBSeriesArcRanking.css';
import sonGoku from '../dbseriesimgs/songoku.jpg'; 
import redRibbonArmy from '../dbseriesimgs/redribbonarmy.webp'; 
import kingPiccolo from '../dbseriesimgs/kingpiccolo.webp'; 
import saiyanImage from '../dbseriesimgs/saiyansaga.jpg'; 
import freizaImage from '../dbseriesimgs/freizasaga.jpg';
import androidImage from '../dbseriesimgs/androidsaga.png';
import buuImage from '../dbseriesimgs/buusaga.png';
import api from '../api';



const DBSeriesArcRanking = () => {
  const [sortedRankings, setSortedRankings] = useState([
    { id: 'arc1', name: 'Son Goku Saga', image: sonGoku },
    { id: 'arc2', name: 'Red Ribbon Army Saga', image: redRibbonArmy },
    { id: 'arc3', name: 'Piccolo Saga', image: kingPiccolo },
    { id: 'arc4', name: 'Saiyan Saga', image: saiyanImage },
    {id: 'arc5', name: 'Freiza Saga', image: freizaImage },
    { id: 'arc6', name: 'Android Saga', image: androidImage },
    { id: 'arc7', name: 'Buu Saga', image: buuImage },
  
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitArcRankings = async () => {
    try {
      setSubmitting(true);
      const response = await api.post('/api/arcs/naruto', {
        rankings: sortedRankings,
      });
  
      console.log('after');
      console.log(response.data.message); // Arc rankings submitted successfully
      setSubmitting(false);
      setError(null);
      setSubmitted(true); // Show the current rankings after submission
    } catch (error) {
      console.error('API Error:', error);
  
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
  
        // Handle specific status codes if needed
        if (error.response.status === 504) {
          setError('Gateway Timeout: Unable to connect to the server.');
        } else {
          setError(`Error: ${error.response.data.message}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No Response Received:', error.request);
        setError('No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Request Setup Error:', error.message);
        setError(`Request setup error: ${error.message}`);
      }
  
      setSubmitting(false);
    }
  };
  

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedRankings = Array.from(sortedRankings);
    const [removed] = reorderedRankings.splice(result.source.index, 1);
    reorderedRankings.splice(result.destination.index, 0, removed);

    setSortedRankings(reorderedRankings);
  };

  const renderRankingInputs = () => {
    return sortedRankings.map((arc, index) => (
      <Draggable key={arc.id} draggableId={`arc-${arc.id}`} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              border: '1px solid gray',
              padding: '8px',
              margin: '4px',
              background: 'white',
              borderRadius: '4px',
              ...provided.draggableProps.style,
              cursor: 'grab',
            }}
          >
            <img src={arc.image} alt={arc.name} style={{ width: '100px' }} />
            {arc.name}
          </div>
        )}
      </Draggable>
    ));
  };

  return (
    <div>
      {!submitted ? (
        <>
          <h2>DragonBall Series Arc Rankings</h2>
          <p>
            Drag and drop the saga names to rank them in your desired order. Click the "Submit Arc Rankings" button below to save
            your rankings.
          </p>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="arc-rankings">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {renderRankingInputs()}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button
  disabled={submitting}
  onClick={submitArcRankings}
  style={{
    width: '200px', // Set the width to make the button bigger
    height: '50px', // Set the height to make the button bigger
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  }}
>
  Submit Arc Rankings
</button>
        </>
      ) : (
        <>
          <h2>Your Rankings</h2>
          <ol>
            {sortedRankings.map((arc, index) => (
              <li key={arc.id}>{arc.name}</li>
            ))}
          </ol>
       

        </>
      )}
    </div>
  );
};

export default DBSeriesArcRanking;