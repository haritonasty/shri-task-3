const devices0 = [
  {
    "id": "F972B82BA56A70CC579945773B6866FB",
    "name": "Посудомоечная машина",
    "power": 950,
    "duration": 3,
    "mode": "night"
  },
  {
    "id": "C515D887EDBBE669B2FDAC62F571E9E9",
    "name": "Духовка",
    "power": 2000,
    "duration": 2,
    "mode": "day"
  },

];
const devices2 = [
  {
    "id": "F972B82BA56A70CC579945773B6866FB",
    "name": "Посудомоечная машина",
    "power": 950,
    "duration": 3,
    "mode": "night"
  },
  {
    "id": "C515D887EDBBE669B2FDAC62F571E9E9",
    "name": "Духовка",
    "power": 2000,
    "duration": 0,
    "mode": "day"
  },
  {
    "id": "02DDD23A85DADDD71198305330CC386D",
    "name": "Холодильник",
    "power": 50,
    "duration": 24
  },
  {
    "id": "1E6276CC231716FE8EE8BC908486D41E",
    "name": "Термостат",
    "power": 50,
    "duration": 24
  },
  {
    "id": "7D9DC84AD110500D284B33C82FE6E85E",
    "name": "Кондиционер",
    "power": 850,
    "duration": 1
  }
];

const devices0Answer = [];
const devices2Answer = [
  {
    "id": "02DDD23A85DADDD71198305330CC386D",
    "name": "Холодильник",
    "power": 50,
    "duration": 24
  },
  {
    "id": "1E6276CC231716FE8EE8BC908486D41E",
    "name": "Термостат",
    "power": 50,
    "duration": 24
  },

];


module.exports = { devices0, devices0Answer, devices2, devices2Answer};