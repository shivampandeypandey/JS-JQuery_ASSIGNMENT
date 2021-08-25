let PARA = `Thank you so much for contacting us. Dreamland guest relations. 
You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani.
What is your phone number? It is 9876535362 as mentioned in the book Diary. 
Thank you so much for providing the info!`;
let SENTENCE = PARA.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")

let res = 1;

for (let Sent of SENTENCE){
    if (Sent.split(' ').length >= 4){ 
        let masked = `${res}. ${Sent.replace(/[6-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(masked);
        res++;
    }
}
