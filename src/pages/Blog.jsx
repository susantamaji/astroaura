import React from 'react';
import BlogHeader from "../components/BlogHeader";
import BlogSearch from "../components/BlogSearch";
import BlogCard from "../components/BlogCard";

function Blog() {
  return (
    <div>
       <BlogHeader />
       <BlogSearch />
       <BlogCard />
    </div>
  )
}

export default Blog