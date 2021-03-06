const ads = [{
    id: 1,
    title: 'Volkswagon Beetle for sale',
    imageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    category: 'cars',
    location: 'Richmond, London',
    price: '£3000',
}, {
    id: 2,
    title: 'Ford Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1565985975612-3a33aa67353f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZCUyMGZpZXN0YXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cars',
    location: 'Bournemouth',
    price: '£999',
}, {
    id: 3,
    title: 'Audi A4',
    imageUrl: 'https://images.unsplash.com/photo-1611758433285-3ea014b434eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaSUyMGxvbmRvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cars',
    location: 'Birmingham',
    price: '£3000',
}, {
    id: 4,
    title: 'Tesla Model S',
    imageUrl: 'https://images.unsplash.com/photo-1562178235-7ba56b202338?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHRlc2xhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cars',
    location: 'London',
    price: '£20000',
}, {
    id: 5,
    title: 'A flying Delorean',
    imageUrl: 'https://images.unsplash.com/photo-1571876390453-7196f023a67d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVsb3JlYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cars',
    location: 'Glasgow',
    price: '£9000',
}, {
    id: 6,
    title: 'Citroen 2CV',
    imageUrl: 'https://images.unsplash.com/photo-1582758561326-1f830f86ad7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8MmN2fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cars',
    location: 'Cardiff',
    price: '£8000',
}, {
    id: 7,
    title: 'Renault elf',
    imageUrl: 'https://images.unsplash.com/photo-1579462127229-b42e9ca0eddf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVuYXVsdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cars',
    location: 'London',
    price: '£6500',
}, {
    id: 8,
    title: 'Opel Corsa',
    imageUrl: 'https://images.unsplash.com/photo-1579631962852-306c90e1c91f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbCUyMGNvcnNhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cars',
    location: 'Oxford',
    price: '£3600',
},
{
    id: 9,
    title: 'Tuk tuk',
    imageUrl: 'https://images.unsplash.com/photo-1501139187767-79e3d8121ea8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHVrJTIwdHVrfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'cars',
    location: 'Cornwall',
    price: '£2800',
},
{
    id: 10,
    title: 'VW Van',
    imageUrl: 'https://images.unsplash.com/photo-1569346306867-b2c7a6b22099?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dmFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'cars',
    location: 'London',
    price: '£9000',
},
{
    id: 11,
    title: 'Landrover Discovery Sport',
    imageUrl: 'https://images.unsplash.com/photo-1519581472129-9abf8d19f696?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHJvdmVyJTIwZGlzY292ZXJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'cars',
    location: 'Lake District',
    price: '£18000',
},
{
    id: 12,
    title: 'Volvo',
    imageUrl: 'https://images.unsplash.com/photo-1580667433411-0dc7b8e90cce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZvbHZvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'cars',
    location: 'Birmingham',
    price: '£6000',
},
{
    id: 13,
    title: 'Citroen DS',
    imageUrl: 'https://images.unsplash.com/photo-1607640275417-9bea7de92976?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0cm9lbiUyMGRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'cars',
    location: 'Norfolk',
    price: '£7000',
},
{
    id: 14,
    title: 'Ford Coupe',
    imageUrl: 'https://images.unsplash.com/photo-1613520293053-34c2cf2c067b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvcmQlMjBjb3VwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'cars',
    location: 'London',
    price: '£7000',
},
{
    id: 15,
    title: 'Very large four bedroom, two bathroom house in Beckton E16',
    imageUrl: 'https://images.unsplash.com/photo-1519263225643-c2abb3eca8f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTIwbG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'properties',
    location: 'Newham, London',
    price: '£525,000.00',
},
{
    id: 16,
    title: 'Studio for sale',
    imageUrl: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRpbyUyMGFwYXJ0bWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'properties',
    location: 'Croydon, London',
    price: '£170,000.00',
},
{
    id: 17,
    title: '2 bedroom flat in Edgeware',
    imageUrl: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fDIlMjBiZWRyb29tJTIwZmxhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'properties',
    location: 'Edgware, London',
    price: '£500,000.00',
},

{
    id: 18,
    title: 'Intelligent labrador needs a new home',
    imageUrl: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhYnJhZG9yJTIwcHVwc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'pets',
    location: 'Battersea, London',
    price: '£2,000.00',
},
{
    id: 19,
    title: 'Chickens',
    imageUrl: 'https://images.unsplash.com/photo-1441122456239-401e92b73c65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'pets',
    location: 'Ilford, London',
    price: '£150.00 ',
},
{
    id: 19,
    title: 'Guinea Pig',
    imageUrl: 'https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpbmVhJTIwcGlnfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'pets',
    location: 'Ilford, London',
    price: '£20.00 ',
},
{
    id: 20,
    title: 'Friendly turltes for sale',
    imageUrl: 'https://images.unsplash.com/photo-1545823812-e46f1ed2896e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dHVydGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'pets',
    location: 'Archway, London',
    price: '£140.00 ',
},
{
    id: 21,
    title: 'Happy goldfish',
    imageUrl: 'https://images.unsplash.com/photo-1573405652561-8642544388f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z29sZGZpc2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'pets',
    location: 'Bow, London',
    price: '£3.00 ',
},
{
    id: 22,
    title: 'Free Rabbits',
    imageUrl: 'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmFiYml0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'pets',
    location: 'Battersea, London',
    price: '£0.00 ',
},
{
    id: 23,
    title: 'Sofa for sale',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'for-sale',
    location: 'Putney, London',
    price: '£400.00 ',
},
{
    id: 23,
    title: 'Portable television',
    imageUrl: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dHZ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'for-sale',
    location: 'Kew, London',
    price: '£100.00 ',
},
{
    id: 24,
    title: 'Fridge',
    imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZGdlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'for-sale',
    location: 'Brentford, London',
    price: '£500.00 ',
},
{
    id: 25,
    title: 'Window Cleaner wanted',
    imageUrl: 'https://images.unsplash.com/photo-1561236478-a10a7659d498?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE0fHxqb2J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'jobs',
    location: 'Central London',
    price: '£500.00 p/w',
},
{
    id: 26,
    title: 'Musician wanted',
    imageUrl: 'https://images.unsplash.com/photo-1591869460459-2adbf467f09b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG11c2ljaWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'jobs',
    location: 'Central London',
    price: '£800.00 p/w',
}
];

module.exports = ads;
