
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {
          id: 1,
          title: 'Makara Peak Bike Park',
          address: '116/122 South Karori Road, Karori',
          info: 'With the largest trail network in the lower North Island, Makara Peak has something for riders of all ages and abilities. There are wide, flowing singletrack with gentle gradients that are perfect for beginners, children and families. Plus there are some of the steepest, narrowest and gnarliest trails that challenge the experts.',
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/c2/21/d6/makara-peak-mountain.jpg',
          intensity: 'high'
      },
      {
          id: 2,
          title: 'Build an App Using Redux and Thunk',
          address: '275 Cuba Street, Te Aro',
          info: 'Redux is a State Management library for React apps. It manages the state of the app in a single object.',
          img: 'https://miro.medium.com/max/312/1*SRL22ADht1NU4LXUeU4YVg.png',
          intensity: 'high'
      },
      {
          id: 3,
          title: 'Hike Up Mount Victoria',
          address: 'Mount Victoria',
          info: 'Walk through historic pine forests and enjoy unbeatable views of the harbour and city.',
          img: 'https://www.newzealand.com/assets/Tourism-NZ/Wellington/d01b9df18c/img-1536305162-3786-21652-711667A8-CBC9-2048-EEBF9CDB7263FE43__CropResizeWzUwMCwzNzUsODAsImpwZyJd.jpg',
          intensity: 'high'
      },
      {
          id: 4,
          title: 'Sweet Axe Throwing Co.',
          address: '58 Kent Terrace, Te Aro',
          info: 'New Zealand\'s most epic group activity.',
          img: 'https://www.sweetaxethrow.com/uploads/1/1/9/7/119772867/published/sweet-axe-snake-lips-axe-transparent.png?1579213639',
          intensity: 'high'
      },
      {
          id: 5,
          title: 'Crocodile-Bikes',
          address: '5/22 Herd Street, Te Aro',
          info: 'Hire a three or six seater bike with your family or friends and cruise around the waterfront from Oriental Bay to Kumutoto.',
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/8d/be/c2/large-cycle-pictured.jpg',
          intensity: 'low'
      },
      {
          id: 6,
          title: 'Maccas Drive Thru',
          address: '5/22 Herd Street, Te Aro',
          info: 'Feeling naughty?',
          img: 'https://media.glassdoor.com/l/57/c2/70/fc/mcdonalds.jpg',
          intensity: 'low'
      },
      {
          id: 7,
          title: 'Te Papa',
          address: '55 Cable Street, Te Aro',
          info: 'The Museum of New Zealand Te Papa Tongarewa is New Zealand\'s national museum.',
          img: 'https://www.newzealand.com/assets/Operator-Database/7d6b32ad87/img-1536180065-2173-16063-p-B3697523-0769-DD45-8F4215BA24FC2B0B-2544003__FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg',
          intensity: 'low' 
      },
      {
          id: 8,
          title: 'Lighthouse Cinema',
          address: '29 Wigan Street, Te Aro',
          info: 'Boutique cinema showing the latest blockbusters as well as catering to some more niche tastes.',
          img: 'https://www.lighthousecinema.co.nz/fileadmin/user_upload/LHC-Cuba.jpg',
          intensity: 'low'
      }
      ]);
    });
};
