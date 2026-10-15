-- Run this once in the Supabase SQL editor.
create table if not exists public.mailing_list (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'preorder-popup',
  created_at timestamptz not null default now()
);

-- Only the server (service role key) may read or write; no public policies.
alter table public.mailing_list enable row level security;
