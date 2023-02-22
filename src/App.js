import React from "react";
import ImageGallery from "react-image-gallery";
import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  const images = [
    {
      original:
        "https://images.pexels.com/photos/831889/pexels-photo-831889.jpeg?auto=compress&cs=tinysrgb&w=1280",
      thumbnail:
        "https://images.pexels.com/photos/831889/pexels-photo-831889.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description 1",
    },
    {
      original:
        "https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg?auto=compress&cs=tinysrgb&w=1280",
      thumbnail:
        "https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description 2",
    },
    {
      original:
        "https://images.pexels.com/photos/1630128/pexels-photo-1630128.jpeg?auto=compress&cs=tinysrgb&w=1280",
      thumbnail:
        "https://images.pexels.com/photos/1630128/pexels-photo-1630128.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description 3",
    },
    {
      original:
        "https://images.pexels.com/photos/2273664/pexels-photo-2273664.jpeg?auto=compress&cs=tinysrgb&w=1280",
      thumbnail:
        "https://images.pexels.com/photos/2273664/pexels-photo-2273664.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description 4",
    },
    {
      original:
        "https://images.pexels.com/photos/572740/pexels-photo-572740.jpeg?auto=compress&cs=tinysrgb&w=1280",
      thumbnail:
        "https://images.pexels.com/photos/572740/pexels-photo-572740.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description 5",
    },
  ];

  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      autoPlay={true}
      slideInterval={5000}
    />
  );
};

export default App;
