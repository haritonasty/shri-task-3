const validAll = [
  {
    "id": "1F972B82BA56A70CC579945773B6866FB",
    "name": "Посудомоечная машина",
    "power": 950,
    "duration": 3,
    "mode": "night"
  },
  {
    "id": "2C515D887EDBBE669B2FDAC62F571E9E9",
    "name": "Духовка",
    "power": 2000,
    "duration": 2,
    "mode": "day"
  },
  {
    "id": "302DDD23A85DADDD71198305330CC386D",
    "name": "Холодильник",
    "power": 50,
    "duration": 24
  }
];
const invalidAll = [
  {
    "id": "F972B82BA56A70CC579945773B6866FB",
    "name": "Посудомоечная машина",
    "power": 950,
    "duration": -2,
    "mode": "night"
  },
  {
    "id": "C515D887EDBBE669B2FDAC62F571E9E9",
    "name": "Духовка",
    "power": 10,
    "duration": 2,
    "mode": "deedefegfre"
  },
  {
    "id": "02DDD23A85DADDD71198305330CC386D",
    "name": "Холодильник",
    "power": 0,
    "duration": 24
  },
  {
    "id": "1E6276CC231716FE8EE8BC908486D41E",
    "name": "Термостат",
    "power": -3,
    "duration": 24
  }
];


module.exports = {
  validAll,
  invalidAll
};