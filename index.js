// Load http module (built into Node.js)
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end('(Mm-mm-mm) mm-hmm
Mm-hmm, mm (mm-mm-mm)
Mm-hmm, mm
Mm-hmm (mm-mm-mm)
I'm not where I wanna be, but I thank God I'm not where I used to be
I was fucked up, feelin' like the devil had a hold on me, mm
Mama cryin' when the rent due, hmm
You don't know the shit we been through, hm
Wasn't nothin that I could do, watched it rain on me
Took too much losses, we were down, hmm
So, we gon' ball out every time we step out (know what I mean?)
It ain't nothin' that I can't do
Look at all the shit I came through
Lost some niggas on the way, but I'm still right here
Blessings (mm, mm)
Blessings, blessings, blessings (oh, mm)
Blessings (oh, mm)
Blessings, blessings (oh, mm, blessings)
O ri ni! O ri ginger mi
Ko si'ja ni church, adura ni n ki n s'Amin
Ogo to n le gogo, e ma pa mi
B'oshe n wa mi l'Ame', lo-lo n wa mi ni Germany
Ja si, o ri standard ni, Jesu ku ni calvary, oun ni Father mi
Nobody fit gaza mi, Balenciaga kuku ni pa aza mi
Omo Olorun to n fa kpoli
Oluwa lo da ewe ati egbo, my brother, nobody holy
Oga Ade, pay my money
No dey tell me story
Mr. Money, ma pe Kunle Poly
My PJ by designers, na the lifestyle I desire, I'm on fire
Alhamdulillah, I dey go far, no be where I dey yesterday na hin I dey now (ahh, ahh, ahn)
Blessings
Blessings (blessings)
Blessings, blessings (oh, mm), blessings (oh, mm)
Blessings
Blessings (oh, mm, blessings)
I'm not wherе I wanna be, but I thank God I'm not where I used to be
I was fucked up, feelin' like the devil had a hold on me, mm
Mama cryin' when the rent due (rent due)
You don't know the shit we been through (we been through)
Wasn't nothin that I could do, watched it rain on me (mm-mm, mm-hmm)
I watched it rain on me (mm-hmm)
I watched it rain on me');
});

// Port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
