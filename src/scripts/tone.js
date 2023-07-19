import * as Tone from "tone";

var piano = undefined;

async function startTone() {
  await Tone.start();
  piano = new Tone.Synth().toDestination();
}

function playNote(note) {
  piano.triggerAttackRelease(note, "4n");
}

export { playNote, startTone };
