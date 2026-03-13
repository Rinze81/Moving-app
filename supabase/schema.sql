create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.shared_spaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  access_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.properties (
  id uuid primary key,
  shared_space_id uuid not null references public.shared_spaces(id) on delete cascade,
  title text,
  real_estate_company text,
  monthly_rent_text text,
  monthly_rent_value numeric,
  management_fee_text text,
  management_fee_value numeric,
  deposit_text text,
  key_money_text text,
  brokerage_fee_text text,
  guarantor_fee_text text,
  fire_insurance_text text,
  key_exchange_text text,
  other_fee_text text,
  area_text text,
  area_value numeric,
  nearest_station text,
  station_walk_text text,
  station_walk_value numeric,
  destination_name text,
  destination_duration_text text,
  destination_duration_value numeric,
  destination_distance_text text,
  destination_distance_value numeric,
  destination_transport_memo text,
  age_text text,
  age_value numeric,
  free_rent_text text,
  floor_text text,
  bath_toilet_separate boolean,
  second_floor_or_more boolean,
  property_url text,
  memo text,
  favorite boolean not null default false,
  status text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key,
  shared_space_id uuid not null references public.shared_spaces(id) on delete cascade,
  title text,
  category text,
  detail text,
  due_date date,
  completed boolean not null default false,
  highlight_days_before integer,
  warning_days_before integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.purchases (
  id uuid primary key,
  shared_space_id uuid not null references public.shared_spaces(id) on delete cascade,
  title text,
  category text,
  amount_text text,
  amount_value numeric,
  memo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key,
  shared_space_id uuid not null references public.shared_spaces(id) on delete cascade,
  title text,
  body text,
  color text,
  text_size text,
  collapsed boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists properties_shared_space_id_idx on public.properties(shared_space_id);
create index if not exists tasks_shared_space_id_idx on public.tasks(shared_space_id);
create index if not exists purchases_shared_space_id_idx on public.purchases(shared_space_id);
create index if not exists notes_shared_space_id_idx on public.notes(shared_space_id);
create index if not exists shared_spaces_access_code_idx on public.shared_spaces(access_code);
create index if not exists tasks_due_date_idx on public.tasks(shared_space_id, due_date);

drop trigger if exists set_shared_spaces_updated_at on public.shared_spaces;
create trigger set_shared_spaces_updated_at
before update on public.shared_spaces
for each row
execute function public.set_updated_at();

drop trigger if exists set_properties_updated_at on public.properties;
create trigger set_properties_updated_at
before update on public.properties
for each row
execute function public.set_updated_at();

drop trigger if exists set_tasks_updated_at on public.tasks;
create trigger set_tasks_updated_at
before update on public.tasks
for each row
execute function public.set_updated_at();

drop trigger if exists set_purchases_updated_at on public.purchases;
create trigger set_purchases_updated_at
before update on public.purchases
for each row
execute function public.set_updated_at();

drop trigger if exists set_notes_updated_at on public.notes;
create trigger set_notes_updated_at
before update on public.notes
for each row
execute function public.set_updated_at();

alter table public.shared_spaces enable row level security;
alter table public.properties enable row level security;
alter table public.tasks enable row level security;
alter table public.purchases enable row level security;
alter table public.notes enable row level security;

create or replace function public.request_shared_slug()
returns text
language sql
stable
as $$
  select nullif((current_setting('request.headers', true)::json ->> 'x-shared-space-slug'), '');
$$;

create or replace function public.request_shared_code()
returns text
language sql
stable
as $$
  select nullif((current_setting('request.headers', true)::json ->> 'x-shared-space-code'), '');
$$;

create policy "shared_spaces_select_via_slug_or_code"
on public.shared_spaces
for select
using (
  slug = public.request_shared_slug()
  or access_code = public.request_shared_code()
);

create policy "shared_spaces_insert_via_slug_or_code"
on public.shared_spaces
for insert
with check (
  slug = public.request_shared_slug()
  or access_code = public.request_shared_code()
);

create policy "shared_spaces_update_via_slug_or_code"
on public.shared_spaces
for update
using (
  slug = public.request_shared_slug()
  or access_code = public.request_shared_code()
)
with check (
  slug = public.request_shared_slug()
  or access_code = public.request_shared_code()
);

create policy "shared_spaces_delete_via_slug_or_code"
on public.shared_spaces
for delete
using (
  slug = public.request_shared_slug()
  or access_code = public.request_shared_code()
);

create policy "properties_access_via_parent_shared_space"
on public.properties
for all
using (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
)
with check (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
);

create policy "tasks_access_via_parent_shared_space"
on public.tasks
for all
using (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
)
with check (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
);

create policy "purchases_access_via_parent_shared_space"
on public.purchases
for all
using (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
)
with check (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
);

create policy "notes_access_via_parent_shared_space"
on public.notes
for all
using (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
)
with check (
  exists (
    select 1
    from public.shared_spaces s
    where s.id = shared_space_id
      and (s.slug = public.request_shared_slug() or s.access_code = public.request_shared_code())
  )
);
