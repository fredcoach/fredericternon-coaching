ALTER TABLE public.guide_leads
  ADD CONSTRAINT guide_leads_first_name_len CHECK (length(first_name) BETWEEN 1 AND 80),
  ADD CONSTRAINT guide_leads_company_len CHECK (length(company) BETWEEN 1 AND 150),
  ADD CONSTRAINT guide_leads_email_len CHECK (length(email) BETWEEN 3 AND 254),
  ADD CONSTRAINT guide_leads_email_shape CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT guide_leads_slug_len CHECK (length(guide_slug) BETWEEN 1 AND 60);