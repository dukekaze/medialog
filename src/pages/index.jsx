import Navbar from "@/components/navbar";
import Content from "@/components/content-section";
import { Inter } from "next/font/google";
import Trending from "@/components/trending";
import TrendingRow from "@/components/trendingRow";
import BlogPost from "@/components/blog-post";
import SinglePost from "@/components/single-post";
import LoadMore from "@/components/load-more";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Content />
      <Trending />
      <BlogPost />
      <LoadMore />
      <Footer />
    </main>
  );
}
