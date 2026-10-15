"use server";

import { getSupabaseAdmin } from "@/lib/supabase";

export type JoinState = { status: "idle" | "success" | "error"; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function joinMailingList(_prev: JoinState, formData: FormData): Promise<JoinState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) {
    return { status: "error", message: "That email looks a little squished. Try again?" };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("Mailing list signup failed: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set.");
    return { status: "error", message: "Sign-ups are temporarily unavailable. Please try again soon." };
  }

  const { error } = await supabase.from("mailing_list").insert({ email, source: "preorder-popup" });

  if (error && error.code !== "23505") {
    console.error("Mailing list signup failed:", error.message);
    return { status: "error", message: "Something went wrong on our end. Please try again." };
  }

  return {
    status: "success",
    message: error ? "You were already on the list. We like the enthusiasm." : "You're on the list! Pudding news incoming.",
  };
}
