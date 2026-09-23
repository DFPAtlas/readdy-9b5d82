import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase/client';

export interface Person {
  id: string;
  school_id: string;
  role: string;
  given_name: string;
  family_name: string;
  year_group: string | null;
  form: string | null;
  email: string | null;
  auth_user_id: string | null;
}

const PERSON_COLUMNS =
  'id, school_id, role, given_name, family_name, year_group, form, email, auth_user_id';

/** The signed-in Supabase auth user, or null. */
export async function getSessionUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user ?? null;
}

/**
 * Resolves the signed-in user to their `person` row.
 *
 * Deliberate scope note. The phase brief allowed a second step that links an
 * auth user to an invited parent row by matching email. That step has to write
 * to `person` with elevated privileges, which needs a server-side function, and
 * it is a product decision — "if the school's records hold this email, that is
 * who you are" — that should be settled on purpose rather than by accident.
 * It is NOT implemented here: an unlinked user is shown /app/no-access instead.
 *
 * Row-level security lets a signed-in parent read their own person row, so this
 * runs with the public key and no service role.
 */
export async function getCurrentPerson(): Promise<Person | null> {
  const user = await getSessionUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('person')
    .select(PERSON_COLUMNS)
    .eq('auth_user_id', user.id)
    .is('deleted_at', null)
    .maybeSingle();

  if (error) throw error;
  return (data as Person | null) ?? null;
}

/**
 * Person, or null. The caller decides where a null goes — in a single-page app
 * there is no server to redirect from, so the guard in the app layout does it.
 */
export async function requirePerson(): Promise<Person | null> {
  return getCurrentPerson();
}

/** Clears the session and returns the user to the public site. */
export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}