import { useState } from "react";
/* En console.log som inte syns för användaren hade plockat bort*/
console.log("välkommen till min app!")

/* Här har vi en ganska stor app som gör flera olika saker med flera funktioner med flera olika knappar, jag hade brutit ut den i flera olika mindre komponenter.*/

/* flera olika state med namn som inte förklarar vad de gör, jag hade namnget dem tydliga namn. Som visat vad deras uppgift är. */
function App() {
  const [c, setC] = useState(0);
      
  const [t, setT] = useState(["Eat", "Rave", "Reapeat"]);
    const [t2, setT2] = useState("");
  const [ärdengrön, setedengron] = useState(false);

  /* funktions namnen är på svenska utan camelcase och det har inte använts något verktyg som formaterar koden korrekt ex Prettier
  Hade jag gjort om koden hade jag skrivit funktions namnen mer förklarande på engelska och med camelcase, och använt exempelvis prettier för göra koden mer lätt att läsa när den är formaterad rätt */

                         function bakgrundpoffi() {
    alert("You Changed the color");
    setedengron(!ärdengrön);
  }
  /*En oanvänd funktion som aldrig kommer användas, jag hade raderat hela funktion efter som den saknar helt syfte */
  function detngt(){
    const haj = 3;
    if(haj === 4){
      console.log("här ska de bli ngt")
    }
  }


          const gronteskont = {
                          backgroundColor: ärdengrön ? "green" : "white",
    color: ärdengrön ? "white" : "black",
  };
/*Funktions namn som inte beskriver var ngt gör.*/
            function ngtblirannorLunda(event) {
    setT2(event.target.value);
  }
  
  
  
  
  /* Koden innehåller flera alerts och en prompt, detta är inte att rekommendera och stör väldigt mycket upplevelsen av appen, jag hade tagit bort dom om jag hade gjort om koden igen. */
  
  /*Hade bytt ut det här funktionsnamnet till ngt mer beskrivande, wooop förklara inte alls vad den gör. */
  function wooop() {
    alert("You added something");
            if (t2.trim() !== "") {
      
      
              setT([t2, ...t]);
     
     
              setT2("");
    }
  }



         function putsvack(index) {
          alert("You removed something");
        const updatedTasks = t.filter((_, i) => i !== index);
    setT(updatedTasks);
  }




  function raknahar() {
    prompt("You added a count");
    setC((rakna) => rakna + 1);
  }

  return (
    /* Finns flera knappar här som hade kunnat vara egna komponenter och gjort koden kortare. */
    <div
      style={gronteskont}
      className="flex flex-col items-center justify-center gap-4 min-h-screen p-8"
    >
      <div className="flex flex-col items-center gap-2">
    <h1 className="text-2xl font-bold text-gray-800">Att göra lista</h1>
            <input
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      type="text"
          placeholder="Skriv ngt att göra"
                          value={t2}
          onChange={ngtblirannorLunda}
        />
        <button
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transform hover:scale-105 hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out"
          onClick={wooop}
        >
                                                     Add
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {t.map((task, index) => (
          <div
    className="flex justify-between items-center border border-gray-200 rounded-lg p-2"
            key={index}
          >
                      <div>{task}</div>
            <button
  className="bg-lime-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
              onClick={() => putsvack(index)}
            >
              delete
            </button>
          </div>
        ))}
                              </div>
      <button
        className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transform hover:scale-105 hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out"
                                                       onClick={raknahar}
      >
        count is {c}
      </button>
      <button
        onClick={bakgrundpoffi}
className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 font-bold py-2 px-4 rounded"
      >
        Byt bakgrundsfärg
      </button>
    </div>
  );
}

export default App;
