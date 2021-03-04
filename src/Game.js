import React, { useState, useEffect } from 'react';

import wingsLogo from './img/wingsLogo.png'
import avsLogo from './img/avsLogo.png'
import flyersLogo from './img/flyersLogo.png'
import leafsLogo from './img/leafsLogo.png'


const Game = () => {
    const NHLteams = [
        { city: 'Detroit', teamName: 'Red Wings', logoUrl: wingsLogo, abbre: 'Det', arena: 'Little Caesars Arena' },
        { city: 'Colorado', teamName: 'Avalanche', logoUrl: avsLogo, abbre: 'Col', arena: 'Ball Arena' },
        { city: 'Philladelphia', teamName: 'Flyers', logoUrl: flyersLogo, abbre: 'Phi', arena: 'Wells Fargo Center' },
        { city: 'Toronto', teamName: 'Maple Leafs', logoUrl: leafsLogo, abbre: 'Tor', arena: 'Scotiabank Arena' }
    ]

    return (
       
    );
}

export default Game;

