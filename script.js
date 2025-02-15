// ---- Write code below ---- \\

function dinner()
    let food = prompt("Food");
  let smthStrange = prompt ("Something Strange");
  let adj = prompt("Adjective");
  let animal = prompt("Animal");
  let verb = prompt("Verb");
  let obj = prompt("Object");
  let funQuote1 = prompt("A Funny Quote");
  let funQuote2 = prompt("Another Funny Quote");
  document.getElementById("output").innerHTML = `
    <p>The dinner party started with a dish of ${food} that smelled like ${smthStrange}. 
    Suddenly, a ${adj} ${animal} appeared and started ${verb}ing on the table! 
    The host grabbed a ${obj} and yelled "${funQuote1}!" 
    We all laughed and said "${funQuote2}." It was unforgettable!</p>
    `;
}

function mystery()
{
  const adj = prompt("Adjective");
  const place = prompt("Place");
  const sound = prompt("Sound");
  const silName = prompt("A Silly Name");
  const obj = prompt("An Object");
  const noun = prompt("A Noun");
  const name = prompt("A Name");
  const jobTitle = prompt("A Job Title");
  const verb = prompt("Verb");
  const sub = prompt("A Substance");
  const food = prompt("Food");
  document.getElementById("output").innerHTML = `
  <p>On a(n) (ADJECTIVE) night in the grand (PLACE), a loud (SOUND) revealed Lord (SILLY NAME 1) lying beside a (OBJECT), muttering, "It was the (NOUN)!"
  Detective (NAME), questioned the (JOB TITLE), who was caught (VERB)ing near the scene. But the truth was stranger than fiction. 
  It turns out Lord (SILLY NAME 1) had slipped on (SUBSTANCE) while trying to steal a plate of (FOOD).
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
  `;
}