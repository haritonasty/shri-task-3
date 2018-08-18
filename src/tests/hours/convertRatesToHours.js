const Rate = require('../../main/components/rate');
const hoursSets = require('./hoursSets');

const maxPower = 300;

const ratesInput = [
  {
    "from": 7,
    "to": 10,
    "value": 6.46
  },
  {
    "from": 10,
    "to": 17,
    "value": 5.38
  },
  {
    "from": 17,
    "to": 21,
    "value": 6.46
  },
  {
    "from": 21,
    "to": 23,
    "value": 5.38
  },
  {
    "from": 23,
    "to": 7,
    "value": 1.79
  }
];
const ratesValid = Rate.createRates(ratesInput);


const devices0 = [];
const devices0Answer = [
  {
    "devices": [],
    "id": 0,
    "power": 300,
    "value": 1.79
  },
  {
    "devices": [],
    "id": 1,
    "power": 300,
    "value": 1.79
  },
  {
    "devices": [],
    "id": 2,
    "power": 300,
    "value": 1.79
  },
  {
    "devices": [],
    "id": 3,
    "power": 300,
    "value": 1.79
  },
  {
    "devices": [],
    "id": 4,
    "power": 300,
    "value": 1.79
  },
  {
    "devices": [],
    "id": 5,
    "power": 300,
    "value": 1.79
  },
  {
    "devices": [],
    "id": 6,
    "power": 300,
    "value": 1.79
  },
  {
    "devices": [],
    "id": 7,
    "power": 300,
    "value": 6.46
  },
  {
    "devices": [],
    "id": 8,
    "power": 300,
    "value": 6.46
  },
  {
    "devices": [],
    "id": 9,
    "power": 300,
    "value": 6.46
  },
  {
    "devices": [],
    "id": 10,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 11,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 12,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 13,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 14,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 15,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 16,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 17,
    "power": 300,
    "value": 6.46
  },
  {
    "devices": [],
    "id": 18,
    "power": 300,
    "value": 6.46
  },
  {
    "devices": [],
    "id": 19,
    "power": 300,
    "value": 6.46
  },
  {
    "devices": [],
    "id": 20,
    "power": 300,
    "value": 6.46
  },
  {
    "devices": [],
    "id": 21,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 22,
    "power": 300,
    "value": 5.38
  },
  {
    "devices": [],
    "id": 23,
    "power": 300,
    "value": 1.79
  }
];

const devices2 = [
  {
    "id": "1F972B82BA56A70CC579945773B6866FB",
    "name": "Посудомоечная машина",
    "power": 50,
    "duration": 24,
    "possibleHours": hoursSets.undefinedSet
  },
  {
    "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
    "name": "Духовка",
    "power": 100,
    "duration": 24,
    "possibleHours": hoursSets.undefinedSet
  }
];

const devices2Answer = [
  {
    "devices":  [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 0,
    "power": 150,
    "value": 1.79
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 1,
    "power": 150,
    "value": 1.79
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 2,
    "power": 150,
    "value": 1.79
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 3,
    "power": 150,
    "value": 1.79
  },
  {
    "devices":[
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 4,
    "power": 150,
    "value": 1.79
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 5,
    "power": 150,
    "value": 1.79
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 6,
    "power": 150,
    "value": 1.79
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 7,
    "power": 150,
    "value": 6.46
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 8,
    "power": 150,
    "value": 6.46
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 9,
    "power": 150,
    "value": 6.46
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 10,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 11,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 12,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 13,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 14,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 15,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 16,
    "power": 150,
    "value": 5.38
  },
  {
    "devices":[
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 17,
    "power": 150,
    "value": 6.46
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 18,
    "power": 150,
    "value": 6.46
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 19,
    "power": 150,
    "value": 6.46
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 20,
    "power": 150,
    "value": 6.46
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 21,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 22,
    "power": 150,
    "value": 5.38
  },
  {
    "devices": [
      {
        "id": "1F972B82BA56A70CC579945773B6866FB",
        "name": "Посудомоечная машина",
        "power": 50,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      },
      {
        "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
        "name": "Духовка",
        "power": 100,
        "duration": 24,
        "possibleHours": hoursSets.undefinedSet
      }
    ],
    "id": 23,
    "power": 150,
    "value": 1.79
  }
];


module.exports = { maxPower, ratesInput, ratesValid, devices0, devices2, devices0Answer, devices2Answer };