(async function(o){try{const o=await fetch("http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=london&aqi=no",{mode:"cors"});if(!o.ok)throw o;const n=await o.json();console.log(n)}catch(o){const n=await o.json();throw console.log(n.error.message),n}})().then((()=>console.log("finished"))).catch((o=>console.log(o)));