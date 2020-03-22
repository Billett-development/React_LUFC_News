import React, { useState, useEffect } from "react";


import { Grid, Segment } from "semantic-ui-react";

import '../Styles/_Home.scss';

export default function HomePosts() {
  // useState() is a hook used to store local state data
  // here we set 'date' which is our constant and 'setData' which we are using to define 'data'
  const [data, setData] = useState([]);

  // useEffect() is a function that handles actions when something affects your component
  // So we want to fetch our API when certain things affect our component
  useEffect(() => {

    // Here we define the function getData which fetches our API data
    function getData() {
      
      // Select API endpoint
      fetch("http://www.lufcnews.co.uk/wp-json/wp/v2/posts?_embed")
        // Turn the data into something we can use I.E. JSON
        .then(response => response.json())
        // Set the data in the state
        .then(data => setData(data));
      // See the data in the console
      console.log(data);
    }
    // Call the function
    getData();
    // So here we need to set a dependency. The dependency is used to call useEffect. If we didn't
    // do this then the useEffect would be called every time something is affected in our app.
    // E.G. a button being clicked or a function being called. Here we have put data as our
    // dependency which means that the function will be called every time the data is changed.
    // This creates a fetching loop because when we call the function the data is re-fetched
    // causing the useEffect to be called again. This isn't really a good practice as we are fetching
    // and re-rendering constantly.
  }, [data]);

  // We create a constant called posts which grabs the data, spreads the array and creates a JSX
  // element for each item.
  const posts = data.map(d => (
    <Grid.Column
      mobile={12}
      tablet={4}
      computer={4}
      className={"post-column"}
      style={{
        backgroundImage: `url(${d._embedded["wp:featuredmedia"]["0"].source_url}})`
      }}
    >
      <div className={"post-column-text-container"}>
        <a className={"post-column-text"}>{d.title.rendered}</a>
      </div>
    </Grid.Column>
  ));

  // This is our return function where we render everything
  return (
    <Segment className={"news__articles"}>
      <Grid
        container
        columns={2}
        stackable
        className={"news__aritcles-1"}
      >
        {posts}
      </Grid>
    </Segment>
  );
}
