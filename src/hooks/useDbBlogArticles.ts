import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { blogArticles, type BlogArticle } from "@/data/blogArticles";

interface DbBlogPost {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string;
  excerpt: string;
  category: string;
  read_time: string;
  image_url: string | null;
  image_alt: string | null;
  content_html: string;
  article_type: "thematic" | "case_study";
  keywords: string[];
  published_at: string;
  updated_at: string;
}

function dbToArticle(p: DbBlogPost): BlogArticle & { isCaseStudy?: boolean; dynamicImage?: string | null } {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    metaTitle: p.meta_title || `${p.title} | Frédéric Ternon`,
    metaDescription: p.meta_description,
    excerpt: p.excerpt,
    content: p.content_html,
    category: p.category,
    readTime: p.read_time,
    publishedAt: p.published_at,
    updatedAt: p.updated_at,
    image: p.image_url || "",
    ogImage: p.image_url || "/images/blog-og.jpg",
    productName: p.title,
    productDescription: p.meta_description,
    benefits: [],
    targetAudience: "Dirigeants de PME/TPE et solopreneurs",
    price: "Gratuit",
    availability: "InStock",
    // extras
    isCaseStudy: p.article_type === "case_study",
    dynamicImage: p.image_url,
  };
}

export function useCombinedBlogArticles() {
  const query = useQuery({
    queryKey: ["blog_posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DbBlogPost[];
    },
    staleTime: 5 * 60 * 1000,
  });

  const dbArticles = (query.data ?? []).map(dbToArticle);
  const dbSlugs = new Set(dbArticles.map((a) => a.slug));
  const staticOnly = blogArticles.filter((a) => !dbSlugs.has(a.slug));
  const combined = [...dbArticles, ...staticOnly].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return { articles: combined, isLoading: query.isLoading, dbSlugs };
}

export function useCombinedArticleBySlug(slug: string | undefined) {
  const { articles, isLoading } = useCombinedBlogArticles();
  const article = slug ? articles.find((a) => a.slug === slug) : undefined;
  return { article, isLoading };
}
