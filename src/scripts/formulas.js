const chromaticScale = [
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
];
const chromaticScaleSharps = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const chromaticScaleFlats = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const majorScaleFormula = [2, 2, 1, 2, 2, 2];

function majorScale(root) {
  var scaleBase;
  switch (root) {
    case "C":
      scaleBase = [...chromaticScale];
      break;
    case "Db":
      scaleBase = [...chromaticScaleFlats];
      break;
    case "D":
      scaleBase = [...chromaticScaleSharps];
      break;
    case "Eb":
      scaleBase = [...chromaticScaleFlats];
      break;
    case "E":
      scaleBase = [...chromaticScaleSharps];
      break;
    case "F":
      scaleBase = [...chromaticScaleFlats];
      break;
    case "Gb":
      scaleBase = [...chromaticScaleFlats];
      break;
    case "G":
      scaleBase = [...chromaticScaleSharps];
      break;
    case "Ab":
      scaleBase = [...chromaticScaleFlats];
      break;
    case "A":
      scaleBase = [...chromaticScaleSharps];
      break;
    case "Bb":
      scaleBase = [...chromaticScaleFlats];
      break;
    case "B":
      scaleBase = [...chromaticScaleSharps];
      break;
  }

  var scale = [root];
  var currentIndex = scaleBase.indexOf(root);

  majorScaleFormula.forEach((step) => {
    currentIndex += step;
    scale.push(scaleBase[currentIndex % scaleBase.length]);
  });

  return scale;
}

function randomNote(scale, range, lastNote) {
  var possibleNotes = [];
  if (range == "0.5") {
    for (var i = 0; i < Math.ceil(scale.length / 2); i++) {
      possibleNotes.push(scale[i] + "4");
    }
  }
  if (range == "1") {
    for (var i = 0; i < scale.length; i++) {
      possibleNotes.push(scale[i] + "4");
    }
  }
  if (range == "2") {
    for (var i = 0; i < scale.length; i++) {
      possibleNotes.push(scale[i] + "4");
      possibleNotes.push(scale[i] + "3");
    }
  }
  var returnNote = undefined;
  while (returnNote == undefined || returnNote == lastNote) {
    returnNote =
      possibleNotes[Math.floor(Math.random() * possibleNotes.length - 1)];
  }
  return returnNote;
}

export {
  chromaticScale,
  chromaticScaleFlats,
  chromaticScaleSharps,
  majorScale,
  randomNote,
};
