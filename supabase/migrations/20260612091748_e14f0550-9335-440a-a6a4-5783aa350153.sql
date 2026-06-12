CREATE TABLE public.guide_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  guide_slug TEXT NOT NULL DEFAULT 'roue-hamster',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.guide_leads TO anon, authenticated;
GRANT ALL ON public.guide_leads TO service_role;

ALTER TABLE public.guide_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert a guide lead"
  ON public.guide_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX guide_leads_created_at_idx ON public.guide_leads (created_at DESC);
CREATE INDEX guide_leads_email_idx ON public.guide_leads (email);