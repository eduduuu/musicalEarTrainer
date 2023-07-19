import { useState } from "react";
import {
  chromaticScaleFlats,
  majorScale,
  chromaticScale,
  randomNote,
} from "../scripts/formulas.js";
import { startTone, playNote } from "../scripts/tone.js";

const Notes = () => {
  const [mode, setMode] = useState("scale");
  const [start, setStart] = useState(false);
  const [range, setRange] = useState("1");
  const [currentNote, setCurrentNote] = useState("");
  const [notesGuessedIscorrect, SetNotesGuessedIscorrect] = useState(undefined);
  const [scale, setScale] = useState(majorScale("C"));
  const [tries, setTries] = useState(0);
  const [notesGuessed, setNotesGuessed] = useState(0);

  return (
    <section className="container">
      <h2>Encontre a nota</h2>
      <div className="row gap-3 mt-5">
        <button
          className="btn btn-info col"
          onClick={() => {
            setMode("scale");
          }}
        >
          Escala Maior
        </button>
        <button
          className="btn btn-info col"
          onClick={() => {
            setMode("chromatic");
            setScale(chromaticScaleFlats);
          }}
        >
          Notas Cromáticas
        </button>

        {mode == "scale" ? (
          <>
            <div className="col">
              <ScaleSelect />{" "}
            </div>
            <div className="col">
              <span>Quantidade:</span>
              <select
                name=""
                className="form-select"
                onChange={(e) => {
                  setRange(e.target.options[e.target.selectedIndex].value);
                }}
                value={range}
              >
                <option value="0.5">1/2 oitava</option>
                <option value="1">1 oitava</option>
                <option value="2">2 oitava</option>
              </select>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="row mt-5">
        {!start ? (
          <button
            className="btn btn-success"
            onClick={() => {
              startTone();
              setCurrentNote(randomNote(scale, range, currentNote));
              setStart(true);
            }}
          >
            Começar
          </button>
        ) : (
          <div>
            <div className="row text-center gap-3">
              <button
                className="btn btn-warning col"
                onClick={() => {
                  playNote(mode == "scale" ? scale[0] + "4" : "C4");
                }}
              >
                Tocar um {mode == "scale" ? scale[0] : "C"} para referência
              </button>
              <button
                className="btn btn-warning col"
                onClick={() => {
                  playNote(currentNote);
                }}
              >
                Tocar a nota
              </button>
            </div>
            <div className="row mt-3">
              <p>Escolha a nota:</p>
            </div>
            <div className="row gap-3">
              <ScaleNotesButtons />
            </div>
            <div className="row mt-3 justify-content-center">
              {notesGuessedIscorrect != undefined ? (
                <div
                  className={
                    (notesGuessedIscorrect ? "alert-success" : "alert-danger") +
                    " col-5 alert"
                  }
                >
                  {notesGuessedIscorrect ? "Você acertou" : "Você errou"}
                  {"  --  " + notesGuessed + "/" + tries + "  acertos."}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );

  function ScaleSelect() {
    return (
      <div className="col">
        <span>Escala:</span>
        <select
          name="scaleRoots"
          className="form-select"
          onChange={(e) => {
            setScale(
              majorScale(e.target.options[e.target.selectedIndex].value)
            );
          }}
          value={scale[0]}
        >
          {chromaticScaleFlats.map((root) => {
            return (
              <option value={root} key={root}>
                {root}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  function ScaleNotesButtons() {
    return (
      <>
        {scale.map((note) => {
          return (
            <button
              className="col btn btn-secondary"
              key={note}
              onClick={(e) => {
                setTries(tries + 1);
                playNote(e.target.innerText + "4");
                setCurrentNote(randomNote(scale, range, currentNote));
                SetNotesGuessedIscorrect(
                  e.target.innerText ==
                    currentNote.substring(0, currentNote.length - 1)
                    ? true
                    : false
                );
                setNotesGuessed(
                  e.target.innerText ==
                    currentNote.substring(0, currentNote.length - 1)
                    ? notesGuessed + 1
                    : notesGuessed
                );
              }}
            >
              {note}
            </button>
          );
        })}
      </>
    );
  }
};

export default Notes;
