UPDATE public.blog_posts
SET image_url = REPLACE(image_url, '/storage/v1/object/public/blog-images/', '/functions/v1/blog-image/')
WHERE image_url LIKE '%/storage/v1/object/public/blog-images/%';