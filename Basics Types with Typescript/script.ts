//Number type
function compare(n1: number, n2: number) {
  if (n1 > n2) {
    console.log("N1 is bigger");
  } else {
    console.log("N2 is bigger");
  }
}

compare(1, 2);
//compare("1", 2);   // Immediately give error

//String type
function concat(s1: string, s2: string) {
  console.log(s1 + s2);
}
concat("Nakib ", "Khan");
//concat(1, "Khan"); //this is not gonna work


//Boolean type
let flg: boolean = true;

