import React from "react";
import Gallery from "react-image-gallery";

const Image = ({ src }) => <img src={src} alt="" />;
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    node: <Image src="https://picsum.photos/id/1018/1000/600/" />,
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    node: <Image src="https://picsum.photos/id/1015/1000/600/" />,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    node: <Image src="https://picsum.photos/id/1019/1000/600/" />,
  },
];

const renderItem = (item) => item.node;

const ImageGallery = () => (
  <div
    style={{
      borderRadius: "10px",
      overflow: "hidden",
      // only add this can avoid border radius invalid
      transform: 'translateZ(0)',
    }}
  >
    <Gallery
      items={images}
      renderItem={renderItem}
      showThumbnails={false}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  </div>
);

export default ImageGallery;
