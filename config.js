// ============================================================================
// Sunshine Gadgets — configuration
// ----------------------------------------------------------------------------
// This is the ONLY file you need to edit to connect real services.
// Both apps (buyer + admin) import their settings from here.
//
// Note what's NOT here: MarzPay's API key/secret, and the owner's payout
// phone number. Those are deliberately kept out of this file (and out of
// the browser entirely) — they live only in the Edge Functions' server-side
// environment variables. See SETUP.md, step by step.
// ============================================================================

// Supabase → Project Settings → API
export const SUPABASE_URL = "https://hzcjcnjxvrwllurmqwin.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Y2pjbmp4dnJ3bGx1cm1xd2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzOTQzNDgsImV4cCI6MjEwMzk3MDM0OH0.q97DoRnACmkIiCdxjA5ILyjWGmtI56laPaU0Kd_e6nI";

// These three point at the Edge Functions deployed from supabase/functions/.
// They're already correct for this project once you deploy those functions —
// nothing to fill in here.
const FUNCTIONS_BASE = `${SUPABASE_URL}/functions/v1`;
export const CREATE_PAYMENT_URL = `${FUNCTIONS_BASE}/create-payment`;
export const ORDER_STATUS_URL = `${FUNCTIONS_BASE}/order-status`;
