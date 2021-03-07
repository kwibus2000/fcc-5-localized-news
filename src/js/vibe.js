// Bank some good vibe options
const vibes = [
  ' ... en je bent te gek!',
  ' ... fijne dag nog!',
  ' ... en dit krijg je er nog bij!',
  ' ... en dit hondje ook! 🐶'
];

// Kies een willekeurige goede stemming
const vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// toon een goede stemming
document.querySelector('.vibe').append(vibe);
