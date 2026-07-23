CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL DEFAULT '5 min',
  image_url TEXT,
  image_alt TEXT,
  content_html TEXT NOT NULL,
  article_type TEXT NOT NULL DEFAULT 'thematic' CHECK (article_type IN ('thematic','case_study')),
  keywords TEXT[] NOT NULL DEFAULT '{}',
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.blog_posts TO anon, authenticated;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read blog posts" ON public.blog_posts FOR SELECT TO anon, authenticated USING (true);
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts (published_at DESC);

CREATE TABLE public.blog_topics_queue (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('thematic','case_study')),
  title_hint TEXT NOT NULL,
  angle TEXT,
  keywords TEXT[] NOT NULL DEFAULT '{}',
  persona_hint TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','done','skipped')),
  position INTEGER NOT NULL DEFAULT 0,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.blog_topics_queue TO service_role;
ALTER TABLE public.blog_topics_queue ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Block client access to blog_topics_queue" ON public.blog_topics_queue AS RESTRICTIVE FOR ALL TO anon, authenticated USING (false) WITH CHECK (false);
CREATE TRIGGER update_blog_topics_queue_updated_at BEFORE UPDATE ON public.blog_topics_queue FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX idx_blog_topics_queue_next ON public.blog_topics_queue (type, status, position);

CREATE TABLE public.blog_settings (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  paused BOOLEAN NOT NULL DEFAULT false,
  last_published_at TIMESTAMPTZ,
  timezone TEXT NOT NULL DEFAULT 'Europe/Paris',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.blog_settings TO service_role;
ALTER TABLE public.blog_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Block client access to blog_settings" ON public.blog_settings AS RESTRICTIVE FOR ALL TO anon, authenticated USING (false) WITH CHECK (false);
CREATE TRIGGER update_blog_settings_updated_at BEFORE UPDATE ON public.blog_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
INSERT INTO public.blog_settings (id) VALUES (1);
