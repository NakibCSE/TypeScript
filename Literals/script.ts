//Literals : Literals is something like we can say value, if we want to keep thet value fixed later we check it.

let httpMethod: "GET" | "PUT" | "POST" = "GET"; //Here the type has been the literals, user cannto use values other then it

function handleRequest(url: string, method: "GET" | "PUT" | "POST" = "GET") {
  console.log(method + " : calling " + url);
}
handleRequest("https://www.google.com/", "GET");
handleRequest("https://www.google.com/", "POST");

function compare(s1: string, s2: string): 0 | 1 | -1 {
  return s1 === s2 ? 0 : s1 > s2 ? 1 : -1;
}
console.log(compare("ABC", "ABC"));
let resut = compare("BCD", "DDD");
