import { Tables } from "@datatypes.types";
import React from "react";
type ImageProps = {
  url: string | undefined;
} & Tables<"generated_images">;

interface GalleryProps {
  images: ImageProps[];
}

const GalleryComponent = ({ images }: GalleryProps) => {
  console.log(images);
  return <div>Gallery Component</div>;
};

export default GalleryComponent;
