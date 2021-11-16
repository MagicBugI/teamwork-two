export const bicycles = [
    {
        url: 'https://en.author.eu/data/u_rotoskop/2021/magnum_29/magnum_29_10.jpg',
        name: 'AUTHOR MAGNUM 29 2021-22',
        title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
        id: 1,
        price:650
      },
      {
        url: 'https://en.author.eu/data/u_rotoskop/2021/sector_29/sector_29_10.jpg',
        name: 'AUTHOR SECTOR 29 2021-22',
        title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
        id: 2,
        price:550
      },
      {
        url: 'https://en.author.eu/data/u_rotoskop/2021/egoist_29/egoist_29_10.jpg',
        name: 'AUTHOR EGOIST 29 2021-22',
        title: 'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm',
        id: 3,
        price:400
      }
]

export const getBikeById = (id)=>{
    return bicycles.find(bike => bike.id === id);
}