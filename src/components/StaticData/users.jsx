const persons = [
  {
    _id: 1,
    name: "Abik Mushyakho",
    email: "abik@gmail.com",
    password: "Abik123",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    followers: 0,
    following: 0,
  },
  {
    _id: 2,
    name: "Ram",
    email: "ram@gmail.com",
    password: "Abik123",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    followers: 0,
    following: 0,
  },
  {
    _id: 3,
    name: "Harimaya",
    email: "hari@gmail.com",
    password: "Abik123",
    image:
      "https://media.gettyimages.com/photos/one-business-woman-looking-at-camera-picture-id1278529214?s=612x612",
    followers: 0,
    following: 0,
  },
];
const posts = [
  {
    _id: 1,
    title: "Nature streets",
    description: "Wonderful nature streets",
    image:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    likes: 5,
    uploaderId: 1,
    comments: [
      {
        _id: 1,
        personId: 1,
        body: "Wow",
      },
      {
        _id: 1,
        personId: 2,
        body: "Awsome",
      },
      {
        _id: 1,
        personId: 3,
        body: "Fantastic",
      },
    ],
  },
  {
    _id: 2,
    title: "Night Moon and tree",
    description: "Beautiful night moon and trees",
    likes: 8,
    uploaderId: 2,
    image:
      "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
    comments: [
      {
        _id: 2,
        personId: 1,
        body: "Fantastic",
      },
    ],
  },
  {
    _id: 3,
    title: "Hand and tree",
    description: "Plantation of trees",
    likes: 2,
    uploaderId: 2,
    image:
      "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",

    comments: [
      {
        _id: 2,
        personId: 1,
        body: "Fantastic",
      },
    ],
  },
  {
    _id: 4,
    title: "Nature walking",
    description: "Walking in the nature and yellow leaf",
    likes: 4,
    uploaderId: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    comments: [
      {
        _id: 2,
        personId: 1,
        body: "Fantastic",
      },
    ],
  },
  {
    _id: 5,
    title: " Nature road",
    description: "Beautiful road with nature",
    likes: 0,
    uploaderId: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtwA5sV0wOvrX0yLPI_oPS6dTAVGX2F390-bNtktfSAnLAigRNw6jcdMGgp1XOWq8CLg&usqp=CAU",
    comments: [
      {
        _id: 2,
        personId: 1,
        body: "Fantastic",
      },
    ],
  },
];

export { persons, posts };
