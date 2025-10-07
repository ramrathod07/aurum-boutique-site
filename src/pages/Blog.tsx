import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Diamond Quality",
      excerpt: "Understanding the 4 Cs and how to choose the perfect diamond for your jewellery piece.",
      author: "Emma Wilson",
      date: "March 15, 2024",
      category: "Education",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Care for Your Fine Jewellery",
      excerpt: "Essential tips and tricks to keep your precious pieces looking brilliant for generations.",
      author: "David Chen",
      date: "March 10, 2024",
      category: "Care Tips",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "2024 Jewellery Trends: What's Hot",
      excerpt: "Discover the latest trends in luxury jewellery design and what celebrities are wearing.",
      author: "Sarah Martinez",
      date: "March 5, 2024",
      category: "Trends",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Art of Handcrafted Jewellery",
      excerpt: "Go behind the scenes to see how master craftsmen create each unique piece.",
      author: "Michael Roberts",
      date: "February 28, 2024",
      category: "Craftsmanship",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Choosing the Perfect Engagement Ring",
      excerpt: "A comprehensive guide to selecting a ring that perfectly captures your love story.",
      author: "Emily Brown",
      date: "February 20, 2024",
      category: "Guides",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Gemstone Guide: Beyond Diamonds",
      excerpt: "Explore the world of colored gemstones and their unique properties and meanings.",
      author: "James Taylor",
      date: "February 15, 2024",
      category: "Education",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            The Lumière Journal
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Insights, tips, and stories from the world of fine jewellery.
            Stay informed about trends, care, and craftsmanship.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden hover:shadow-luxury transition-all duration-300 animate-scale-in border-border/50">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-primary/30 to-accent/20 h-64 md:h-auto" />
            <CardContent className="p-8 flex flex-col justify-center">
              <span className="text-primary text-sm font-medium mb-2">Featured Article</span>
              <h2 className="font-playfair text-3xl font-bold mb-4">
                {posts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {posts[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {posts[0].date}
                </div>
              </div>
              <Link to={`/blog/${posts[0].id}`}>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </CardContent>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-luxury transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 h-48 relative overflow-hidden">
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
