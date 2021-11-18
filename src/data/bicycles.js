export const bicycles = [
    {
        url: 'https://en.author.eu/data/u_rotoskop/2021/magnum_29/magnum_29_10.jpg',
        name: 'AUTHOR MAGNUM 29 2021-22',
        title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
        id: 1,
        price:650,
        type:'Roads bikes',
        mark:'Santa Cruz'
      },
      {
        url: 'https://en.author.eu/data/u_rotoskop/2021/sector_29/sector_29_10.jpg',
        name: 'AUTHOR SECTOR 29 2021-22',
        title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
        id: 2,
        price:550,
        type:'Single Speed',
        mark:'Treck'
      },
      {
        url: 'https://en.author.eu/data/u_rotoskop/2021/egoist_29/egoist_29_10.jpg',
        name: 'AUTHOR EGOIST 29 2021-22',
        title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
        id: 3,
        price:400 ,
        type:'Croos-Country',
        mark:'Treck'
      },
      { 
      url: 'https://en.author.eu/data/u_rotoskop/2021/magnum_29/magnum_29_10.jpg',
      name: 'AUTHOR EGOIST 29 2021-22',
      title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
      id: 4,
      price:650 ,
      type:'Croos-Country',
      mark:'Treck'
      },
      {
        url: 'https://en.author.eu/data/x_db_produkty/12434/main/ua42925502_orion_29_seda_2.jpg',
        name: 'AUTHOR ORION 29 2020',
        title: 'TRIPPLE BUTTED ALLOY FRAME  |  RST F1RST 29 AIR REMOTE LOCK OUT FORK  |  SHIMANO SLX/ XT COMPONENTS',
        id: 5,
        price:550,
        type:'Croos-Country',
        mark:'Treck'
      },
      {
        url: 'https://en.author.eu/data/u_rotoskop/2021/magnum_29/magnum_29_10.jpg',
        name: 'AUTHOR MAGNUM 29 2021-22',
        title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
        id: 6,
        price:750,
        type:'Roads bikes',
        mark:'Santa Cruz'
      }

]     

export const getBikeById = (id)=>{
    return bicycles.find(bike => bike.id === id);
}

export const getBikesPreview =()=>{
  return [bicycles[0] , bicycles[1] , bicycles[2]];
}