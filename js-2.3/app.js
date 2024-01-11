let user = prompt("enter your name");
let gender = prompt("enter your gender")

if (gender === "k" || gender === "K" ) {
    console.log(`salam cenab ${user}`);
}
else if (gender === "q" || gender === "Q" ) {
    console.log(`salam xanim ${user}`);
}
else {
    console.log("invalid gender")
}