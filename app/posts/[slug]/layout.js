import { notFound } from "next/navigation";

// Function to generate metadata for SEO purposes
export async function generateMetadata({ params }) {
  const ApiURL = process.env.SERVER_URL;
  const { post } = await getPost(params);

  // Check for the existence of the post
  if (!post) {
    notFound(); // Navigate to the 404 page if post is not found
    return; // No metadata returned for missing posts
  }

  return {
    metadataBase: new URL(process.env.SITE_URL),
    title: post.title, // Optimized title for SEO
    description: post?.banner?.split(" ").slice(0, 30).join(" "), // Shortened description
    openGraph: {
      title: post.title,
      description: post?.banner?.split(" ").slice(0, 30).join(" "),
      url: `${process.env.SITE_URL}/posts/${params.slug}`, // URL for the post
      type: "article", // Set as article for OpenGraph
      siteName: "KIN,A Voluntary Organization",
      locale: "bn_BD",
      images: [
        {
          url: `${ApiURL}/public/images/posts/${post?.post_photo}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      publishedTime: post.date,
      section: "Blog",
      tag: post.title,
      authors: "KIN,A Voluntary Organization",
    },
    twitter: {
      card: "summary_large_image", // Optimized for Twitter
      title: post.title,
      description: post?.banner?.split(" ").slice(0, 30).join(" "),
      images: {
        url: `${ApiURL}/public/images/posts/${post?.post_photo}`,
        alt: post.title,
      },
    },
    robots: {
      index: true, // Allow indexing
      follow: true, // Allow following links
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false, // Allow images to be indexed
        "max-video-preview": -1,
        "max-image-preview": "large", // Large preview for images
        "max-snippet": -1,
      },
    },
  };
}

// Function to fetch post data from the API
async function getPost(params) {
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/api/v1/posts/${params.slug}`,
      { credentials: 'include' }
    );

    if (!res.ok) {
      return { post: null }; // Return null if response is not OK
    }

    const response = await res.json();


    return { post: response };
  } catch (error) {
    return { post: null }; // Return null on error
  }
}



// Layout component to display children or handle post not found
export default async function Layout({ children, params }) {

  const {post} = await getPost(params);

  if (!post) {
    notFound(); // Navigate to the 404 page if no post is found
  }

  return <>{children}</>; // Render children
}
