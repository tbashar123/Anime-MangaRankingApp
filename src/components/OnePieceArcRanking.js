import React, { useState } from 'react';
import axios from 'axios';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../css/OnePieceArcRanking.css'; // Update the CSS import path
import eastBlue from '../onepieceimgs/eastblue.webp'; 
import alabasta from '../onepieceimgs/alabasta.webp';
import skyIsland from '../onepieceimgs/skyisland.webp';
import water7 from '../onepieceimgs/water7.webp';
import thrillerBark from '../onepieceimgs/thrillerbark.webp';
import summitWar from '../onepieceimgs/summitwar.webp';
import fishManIsland from '../onepieceimgs/fishmanisland.webp';
import dressRosa from '../onepieceimgs/dressrosa.webp';
import wholeCakeIsland from '../onepieceimgs/wholecakeisland.webp';
import wanoCountry from '../onepieceimgs/wanocountry.webp';

const OnePieceArcRanking = () => {
  const [sortedRankings, setSortedRankings] = useState([
    { id: 'arc1', name: 'East Blue Saga', image: eastBlue },
    { id: 'arc2', name: 'Alabasta Saga', image: alabasta },
    { id: 'arc3', name: 'SkyIsland Saga', image: skyIsland },
    { id: 'arc4', name: 'Water7 Saga', image: water7 },
    { id: 'arc5', name: 'ThrillerBark Saga', image: thrillerBark },
    { id: 'arc6', name: 'SummitWar Saga', image: summitWar },
    { id: 'arc7', name: 'FishManIsland Saga', image: fishManIsland },
    { id: 'arc8', name: 'DressRosa Saga', image: dressRosa },
    { id: 'arc9', name: 'WholeCakeIsland Saga', image: wholeCakeIsland },
    { id: 'arc10', name: 'WanoCountry Saga', image: wanoCountry },
    
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitArcRankings = async () => {
    try {
      setSubmitting(true);
      const response = await axios.post('/api/arcs/onepiece', {
        rankings: sortedRankings,
      });

      console.log(response.data.message); // Arc rankings submitted successfully
      setSubmitting(false);
      setError(null);
      setSubmitted(true); // Show the current rankings after submission
    } catch (error) {
      console.error('API Error:', error);

      // Handle error responses
      setError(error.message || 'Failed to submit rankings');
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
          <h2>One Piece Arc Rankings</h2>
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

export default OnePieceArcRanking;
