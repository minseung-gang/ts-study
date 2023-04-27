// function

type EatType = (food: string) => void;

interface IEat {
  (food: string): void;
}

// array

type PersonList = string[];

interface IPersonList {
  [index: number]: string;
  // let p6: IPersonList = ["one", "two", "three"];
  // p6[0] >> one(string)
}

// intersection

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[]; //{ artists: [{ name: "Mark" },{name:"Anna"}] }
}
let d: ArtistsData = { artists: [{ name: "Mark" }, { name: "Anna" }] };

type ArtistsResponseType = ArtistsData & ErrorHandling;

interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;
