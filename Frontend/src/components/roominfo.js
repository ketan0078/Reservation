const rooms=[
  {
    id:1,
    num:1,
    num2:1,
    description:'highly ventilated',
    name:'mariana',
    capacity:4,
    price:2500,
    floor:7,
    url:'https://i.pinimg.com/originals/5a/48/d0/5a48d0b12ab079a255cdf88d0faeb031.jpg',
    info:'All our guestrooms are elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.'
  
  }
  ,
  {
      id:2,
      num:2,
      num2:1,
      description:'quality infrastructure',
      name:'gloria',
      capacity:1,
      price:1800,
      floor:4,
      url:'https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/02/Luxury-Rooms-Metropolitan-Jaipur-2-1024x683.jpg',
      info:'Our king size four poster provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.'
    },
  {
        id:3,
        num:3,
        num2:1,
      description:'posh',
      name:'seral',
      capacity:2,
      price:1500,
      floor:3,
      url:'https://pix7.agoda.net/hotelImages/745/745346/745346_16092221550046818466.jpg',
      info:'Our king size sleigh bedded also provides views over landscaped gardens. It has ample storage, a seating area, digital safe, minibar and luxurious duck down bedding.'
    },
    {
      id:4,
      num:4,
      num2:1,
      description:'cool surrounding',
      name:'puriata',
      capacity:5,
      price:2000,
      floor:3,
      url:'https://cloudstorage.mosaic-collection.com/loeipalace/hotel-photos/deluxe-king-2.jpg',
      info:'Our Deluxe king size room has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding. This room can also be configured with an extra roll-away bed for families of 3'
    },
    {
        id:5,
        num:5,
        num2:1,
      description:'highly fascinating colours',
      name:'flatinane',
      capacity:5,
      price:1900,
      floor:5,
      url:'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/68/2016/11/21024039/Grand-Sukhumvit-Hotel-Bangkok-Thailand-Accor-Deluxe-KGA-22.jpg',
      info:'Our Deluxe Twin/Large Double also provides views over landscaped gardens. It has a seating area, digital safe, minibar and luxurious duck down bedding. This room can be configured with either 2 single beds or zip and linked to provide a large double bed.'
    },
   {
      id:6,
      num:6,
      description:'good for kids',
      name:'solvane',
      capacity:4,
      price:2300,
      floor:2,
      url:'https://www.cedargrovemotel.com/images/content/room-photo-01.jpg',
      info:'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.'
    },
    {
      id:7,
      num:7,
      num2:1,
      description:'good for one night stay',
      name:'mavericia',
      capacity:3,
      price:4500,
      floor:6,
      url:'https://www.midtownhotel.com/files/4206/2017JeffCutlerPhoto-MidtownHotel-5365-HDR_copy.jpg',
      info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower'
    },
    {
      id:8,
      num:8,
      num2:1,
      description:'highly entertaining with game zone just by side ',
      name:'glovirana',
      capacity:2,
      price:3000,
      floor:1,
      url:'https://dnfcu5xv4w1i7.cloudfront.net/theloganhotel.com-907673629/cms/cache/v2/5b3ba226c486a.jpg/1920x1080/fit/80/8e040d9a9e692539b57ff010d86d55f6.jpg',
  
      info:'Designed to inspire rest and relaxation, our sleek, modern guest rooms create a feeling of home with peaceful color tones and mountain chic décor. Each room features a king-sized bed or two queen-sized beds, air conditioning and full-size bathroom with granite counter tops and marble floors. Deluxe rooms come fully equipped with state-of-the-art amenities including a Samsung smart TV, iHome docking station, USB ports, Keurig Coffee Brewer, mini-fridge, humidifier, in-room safe, plush robes and slippers, and Wi-Fi. All rooms are non-smoking and views vary from beautiful mountain scenery to the iconic Vail Village and our own Pool One.'
    },
   {
      id:9,
      num:9,
      num2:1,
      description:'for foodies, with cafe just by side',
      name:'perciant',
      capacity:2,
      price:2400,
      floor:5,
      url:'https://dnfcu5xv4w1i7.cloudfront.net/theloganhotel.com-907673629/cms/cache/v2/5b3ba64c57b67.jpg/1920x1080/fit/80/cf2efa92007545b1b0caee17241aae23.jpg',
      info:'Luxury One Bedroom Suites feature a bedroom with king-sized bed, an oversized bathroom with double vanity and marble floors; and a separate sitting area with gas fireplace, and a wet bar. Each suite also offers spectacular views of Vail Mountain.'
    },
    {
      id:10,
      num:10,
      num2:1,
      description:'budget friendly',
      name:'coral',
      capacity:3,
      price:2200,
      floor:2,
      url:'https://www.visitphilly.com/wp-content/uploads/2017/12/loews-philadelphia-hotel-guestroom-courtesy_loews_1920x1080px-2200x1237.jpg',
      info:'Smart hospitality with amazing mountain views, fine fabrics, art and wooden furnishings, these rooms offer Pirin Mountain view. Relax in the cozy double or twin bed or enjoy a glass of wine on your private balcony and unwind'
    },
    {
      id:11,
      num:11,
      num2:1,
      description:'good for moderate expenses',
      name:'flambiant',
      capacity:5,
      price:2000,
      floor:3,
      url:'https://images7.alphacoders.com/463/463342.jpg',
  
      info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower.'
    },
    {
      id:12,
      num:12,
      num2:1,
      description:'most expensive one with almost all facilities!!!',
      name:'glamouren',
      capacity:3,
      price:5500,
      floor:4,
      url:'https://www.princehotels.com/tokyo/wp-content/uploads/sites/9/2019/07/12_tokyo-prince-hotel-rooms-4-8FDeluxeTwinRoom-noon-.jpg',
  
      info:'Experience the beauty of an Executive Room at PREMIER. Spacious rooms decorated in contemporary style with wooden furnishing offering views of the town of Bansko and hotel surrounding area. '
  
    },{
      id:13,
      num:13,
      num2:1,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      name:'mariguana',
      capacity:4,
      price:2500,
      floor:7,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-1.jpeg?raw=true',
      info:'All our guestrooms are elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.'
    
    }
    ,
    {
        id:14,
        num:14,
        num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'gloricia',
        capacity:1,
        price:1800,
        floor:4,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-12.jpeg?raw=true',
        info:'Our king size four poster provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.'
      },
    {
          id:15,
          num:15,
          num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'sentinum',
        capacity:2,
        price:1500,
        floor:3,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-2.jpeg?raw=true',
        info:'Our king size sleigh bedded also provides views over landscaped gardens. It has ample storage, a seating area, digital safe, minibar and luxurious duck down bedding.'
      },
      {
        id:16,
        num:16,
        num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'vedurus',
        capacity:5,
        price:2000,
        floor:3,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-3.jpeg?raw=true',
        info:'Our Deluxe king size room has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding. This room can also be configured with an extra roll-away bed for families of 3'
      },
      {
          id:17,
          num:17,
          num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'floraine',
        capacity:5,
        price:1900,
        floor:5,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-4.jpeg?raw=true',
        info:'Our Deluxe Twin/Large Double also provides views over landscaped gardens. It has a seating area, digital safe, minibar and luxurious duck down bedding. This room can be configured with either 2 single beds or zip and linked to provide a large double bed.'
      },
     {
        id:18,
        num:18,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'silana',
        capacity:4,
        price:2300,
        floor:2,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-5.jpeg?raw=true',
        info:'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.'
      },
      {
        id:19,
        num:19,
        num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'maveric',
        capacity:3,
        price:4500,
        floor:4,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-6.jpeg?raw=true',
        info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower'
      },
      {
        id:20,
        num:20,
        num2:1,
        description:'highly entertaining with game zone just by side ',
        name:'titanus',
        capacity:2,
        price:3000,
        floor:5,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-11.jpeg?raw=true',
    
        info:'Designed to inspire rest and relaxation, our sleek, modern guest rooms create a feeling of home with peaceful color tones and mountain chic décor.'
      },
     {
        id:21,
        num:21,
        num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'petriart',
        capacity:2,
        price:2400,
        floor:1,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-7.jpeg?raw=true',
        info:'Luxury One Bedroom Suites feature a bedroom with king-sized bed, an oversized bathroom with double vanity and marble floors; and a separate sitting area with gas fireplace, and a wet bar. Each suite also offers spectacular views of Vail Mountain.'
      },
      {
        id:22,
        num:22,
        num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'carvan',
        capacity:3,
        price:2200,
        floor:3,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-8.jpeg?raw=true',
        info:'Smart hospitality with amazing mountain views, fine fabrics, art and wooden furnishings, these rooms offer Pirin Mountain view. Relax in the cozy double or twin bed or enjoy a glass of wine on your private balcony and unwind'
      },
      {
        id:23,
        num:23,
        num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'glora',
        capacity:5,
        price:2000,
        floor:2,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-9.jpeg?raw=true',
    
        info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower.'
      },
      {
        id:24,
        num:24,
        num2:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        name:'fab',
        capacity:3,
        price:5500,
        floor:3,
        url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-10.jpeg?raw=true',
    
        info:'Experience the beauty of an Executive Room at PREMIER. Spacious rooms decorated in contemporary style with wooden furnishing offering views of the town of Bansko and hotel surrounding area. '
    
      }
  
  
  
  
  ]
  export default rooms