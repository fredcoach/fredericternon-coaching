-- Lock down cartographie_sessions: only service_role (edge functions) can access.
-- Explicit restrictive policies block anon/authenticated even if grants were widened later.

REVOKE ALL ON public.cartographie_sessions FROM anon, authenticated;

CREATE POLICY "Block anon access to cartographie_sessions"
ON public.cartographie_sessions
AS RESTRICTIVE
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);