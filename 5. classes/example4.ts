// class => object

// {mark: "male", jade: "male"}
// {chloe: "female, alex: "male, anna: "female"}

class Students {
  [index: string]: "male" | "female"; // Index Signature
}
const ClassA = new Students();

ClassA.mark = "male";
ClassA.jade = "male";

console.log(ClassA); // Students { mark: 'male', jade: 'male' }
