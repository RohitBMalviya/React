import React from "react";
import services from "../../appwrite/config";
import { Link } from "react-router-dom";

export default function PostCard({ $id, Title, FeaturedImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={services.getFilePreview(FeaturedImage)} alt={Title} />
        </div>
        <h2 className="text-xl font-bold">{Title}</h2>
      </div>
    </Link>
  );
}
