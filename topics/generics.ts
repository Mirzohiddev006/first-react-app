function simple<T1 extends number | string, T2 extends string | number>(t1: T1, t2: T2) {
  return [t1, t2] as const;
}

let result = simple("boburbek", 10);
const a = result[0];
const b = result[1];
console.log(a);
console.log(b);

/* Challenge-1 */
// function connector<A, B>(a: A, b: B) {
//   return { a, b };
// }
// const a = 10;
// const b = "pdp-";
// const result = connector(a, b); // { a: number, b: string }
// console.log(result);

/* Challenge-2 */
// function greeting<To extends "Mark" | "Kent", From extends "Niko" | "Jeo">(to: To, from: From) {
//   return `Hi ${to} from ${from}` as const;
// }
// const g1 = greeting("Kent", "Jeo");
// // greeting("Mark" | "Kent", "Niko" | "Jeo") // "Hi ${to} from ${from}"

/* Challenge-3 */

export interface Item {
  id: number;
  name: string;
  items: Item[];
}
const items: Item = {
  id: 1,
  name: "html",
  items: [
    {
      id: 11,
      name: "head",
      items: [
        {
          id: 111,
          name: "title",
          items: []
        },
        {
          id: 112,
          name: "link",
          items: []
        }
      ]
    },
    {
      id: 12,
      name: "body",
      items: [
        {
          id: 121,
          name: "div",
          items: [
            {
              id: 1211,
              name: "div",
              items: []
            }
          ]
        },
        {
          id: 122,
          name: "div",
          items: []
        }
      ]
    }
  ]
};

console.log(items);
