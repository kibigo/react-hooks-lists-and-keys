import React from "react";

const ColorList = () => {
  
  const colors = [
    "firebricks",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "blue"
  ];

  const colorElements = colors.map((color) => {
    return <li key={color} style={{color:color}}>{color}</li>;
  });
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  )
}


const UserList = () => {

  const users = [
    {id: 1, firstName: 'Duane', lastName: 'Watson'},
    {id: 2, firstName: 'Peter', lastName: 'Johnson'}
  ];

  const userHeading = users.map((user) => {
    return <h1 key={user.id}>{user.firstName} {user.lastName}</h1>;
  });

  return(
    <div>
      <h1>Users</h1>
      <ol>
        {userHeading}
      </ol>
    </div>
  )
}

const SchoolList = () => {

  const schools = [
    {id:1, name:'Kanjuri High School', location: 'Karatina'},
    {id: 2, name:'Bishop Gatimu', location: 'Nyeri'},
    {id:3, name:'Othaya Boys High School', location: 'Othaya'}
  ];

  const orderSchools = schools.map((school) => {
    return <p key={school.id}>{school.name} {school.location}</p>
  });
  return (
    <div>
      <h1>List of Schools in Kenya:</h1>
      <ol>
        {orderSchools}
      </ol>
    </div>
  )
}


const MovieName = () => {

  const movies = [
    {id:1, name:'Shawshank Redemption', year: 1994, company:'Digital'},
    {id:2, name:'Cool Hand Luke', year:1967, company:'Amazon'},
    {id:3, name:'Escape from Alcatraz', year:1979, company: 'Google'}
  ];

  const likeMovies = movies.map((movie) => {
    return <p key={movie.id}>{movie.name} {movie.year} {movie.company}</p>
  });

  return (
    <div>
      <h1>Welcome to Digital Cyber:</h1>
      <ol>
        {likeMovies}
      </ol>
    </div>
  )
}

export {ColorList, UserList, SchoolList, MovieName}
