let PARA = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. 
May I have your name, please? Yes, sure. My name is robin soleimani. 
What is your phone number? It is 9876535362 as mentioned in the book Diary. 
Thank you so much for providing the info!`;
let SENT = PARA.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
console.log(SENT);

let res = 1;

for (let S of SENT){
    if (S.split(' ').length >= 4) {
        let maskedSent = `${res}. ${S.replace(/[6-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(maskedSent);
        res++;
    }
}
