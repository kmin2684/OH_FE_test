import { home } from "../data_types/data_types";

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const GetAveragePrice = (communityId: string, homes: any ) => {
    let homesFiltered = homes.filter((home: { communityId: string; }) => home.communityId === communityId);

    if (homesFiltered.length === 0) {
        return 'no homes for sale';
    } 
    let sum = homesFiltered.map((item: { price: number; }) => item.price).reduce((prev: number, curr: number) => prev + curr, 0);
    let average = sum/homesFiltered.length;

    return formatter.format(average);
}

export function SortByName (a: {name:string}, b:{name:string}) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  };
