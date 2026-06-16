
CREATE TABLE public.cartographie_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id text UNIQUE NOT NULL,
  email text,
  payment_status text NOT NULL DEFAULT 'pending',
  answers jsonb,
  result jsonb,
  decision_repoussee text,
  cout_statu_quo text,
  source text,
  completed_at timestamptz,
  access_email_sent_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.cartographie_sessions TO service_role;

ALTER TABLE public.cartographie_sessions ENABLE ROW LEVEL SECURITY;

-- Aucune policy : seul service_role (via edge functions) peut lire/écrire.

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_cartographie_sessions_updated_at
BEFORE UPDATE ON public.cartographie_sessions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_cartographie_sessions_stripe_session_id
  ON public.cartographie_sessions(stripe_session_id);
