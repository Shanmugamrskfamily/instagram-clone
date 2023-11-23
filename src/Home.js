// Home.js

import React, { useState } from 'react';
import './Home.css';
import Post from './Post';
import Suggestions from './Suggestions';
import Sidenavbar from './Sidenavbar';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      user: "James",
      postImage: "https://images.alphacoders.com/127/thumbbig-1278913.webp",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Radhika",
      postImage: "https://c02.purpledshub.com/uploads/sites/41/2018/08/22-ideas-606ea9b.jpg?w=1410&webp=1",
      likes: 20,
      timestamp: "1d",
    },
    {
      user: "Aarazo kurna",
      postImage: "https://upload.wikimedia.org/wikipedia/commons/6/60/Statsbiblioteket_l%C3%A6sesalen-2.jpg",
      likes: 40,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage: "https://dims.apnews.com/dims4/default/6fc030f/2147483647/strip/true/crop/7728x4570+0+0/resize/1440x852!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6e%2Fdd%2Fecce6907a4f3a2325120514abbc8%2Ffb901bbe76dc465bb663240d284187cc",
      likes: 14,
      timestamp: "2hr",
    },
  ]);

  
  const storyData = [
    { user: "User1", image: 'https://pxbar.com/wp-content/uploads/2023/09/boy-dpz-instagram.jpg' },
    { user: "User2", image: "https://i.pinimg.com/originals/c2/ce/bd/c2cebdfbb36b94edaaadb0132634d515.jpg" },
    { user: "User3", image: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-beautiful-girl-with-beautiful-flowers-on-her-head-image_2916531.jpg" },
    { user: "User4", image: "https://pxbar.com/wp-content/uploads/2023/09/girls-dp-for-instagram.jpg" },
    { user: "User5", image: "https://pxbar.com/wp-content/uploads/2023/09/instagram-profile-picture-for-girls-1.jpg" },
    
    
  ];

  return (
    <div className='home'>
      <div className="row">
        <div className="col-lg-2 ">
          <div className='home-navigation'>
            <Sidenavbar/>
          </div>
        </div>

        
        <div className="col-lg-7">
          <div className='story-images bg-white '>
            
            {storyData.map((story, index) => (
              <img key={index} src={story.image} alt={story.user} />
            ))}
          </div>
          <div className="home-timeline mt-5">
            <div className="timeline__posts">
              {posts.map((post, index) => (
                <Post
                  key={index}
                  user={post.user}
                  postImage={post.postImage}
                  likes={post.likes}
                  timestamp={post.timestamp}
                />
              ))}
            </div>
          </div>
        </div>

       
        <div className="col-lg-3 mt-5">
          <div className="home-suggestion d-none d-sm-inline">
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
