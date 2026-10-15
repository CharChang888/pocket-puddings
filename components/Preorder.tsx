"use client";

import { createContext, useActionState, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { joinMailingList, type JoinState } from "@/app/actions";
import { preorder } from "@/lib/content";
import { tornClip } from "@/lib/torn";
import { buttonClass, Tape } from "./ui";

const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

const PreorderContext = createContext<() => void>(() => {});

export function PreorderProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <PreorderContext.Provider value={() => setOpen(true)}>
      {children}
      <PreorderDialog open={open} onClose={() => setOpen(false)} />
    </PreorderContext.Provider>
  );
}

export function PreorderButton({
  children,
  variant = "cocoa",
  className,
  arrow = true,
}: {
  children: ReactNode;
  variant?: "cocoa" | "butter";
  className?: string;
  arrow?: boolean;
}) {
  const openDialog = useContext(PreorderContext);
  return (
    <button type="button" onClick={openDialog} aria-haspopup="dialog" className={className ?? buttonClass(variant)}>
      {children}
      {arrow && (
        <span aria-hidden className="text-xl">
          &rarr;
        </span>
      )}
    </button>
  );
}

function PreorderDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="preorder-title"
      className="m-auto w-[calc(100%-1.5rem)] max-w-4xl overflow-visible bg-transparent p-0 text-ink backdrop:bg-ink/60 backdrop:backdrop-blur-sm open:animate-pop"
    >
      <div className="crumpled relative max-h-[90dvh] overflow-y-auto px-5 pb-10 pt-12 sm:px-10" style={{ clipPath: tornClip(91, undefined, 1.2, 40) }}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-white text-xl font-bold transition-transform hover:rotate-90"
        >
          &times;
        </button>

        <div className="text-center">
          <h2 id="preorder-title" className="text-4xl sm:text-5xl">
            <Tape color="bubblegum" rotate={-2}>
              {preorder.title}
            </Tape>
          </h2>
          <p className="mt-5 text-lg font-medium">{preorder.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <OrderOption />
          <ListOption />
        </div>
      </div>
    </dialog>
  );
}

function OrderOption() {
  const o = preorder.order;
  return (
    <section className="relative flex flex-col border-[3px] border-ink bg-butter p-6 shadow-[6px_6px_0_var(--color-ink)] sm:p-7" style={{ rotate: "-1deg" }}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-ink/60">{o.label}</p>
      <h3 className="mt-2 font-script text-4xl">{o.title}</h3>
      <p className="mt-4 font-bold">{o.pack}</p>
      <div className="mt-2 flex items-end gap-3">
        <span className="text-2xl font-bold text-ink/50 line-through decoration-coral decoration-[3px]" aria-label={`Regular price ${o.fullPrice}`}>
          {o.fullPrice}
        </span>
        <span className="font-script text-6xl leading-none">{o.price}</span>
        <span className="pb-1 text-sm font-bold">{o.priceNote}</span>
        <span className="mb-1 ml-auto rotate-6 rounded-full border-[3px] border-ink bg-coral px-3 py-1 text-sm font-extrabold">20% off</span>
      </div>
      <p className="mt-4 flex-1 leading-relaxed">{o.explainer}</p>
      {paymentLink ? (
        <a href={paymentLink} className={`${buttonClass("cocoa")} mt-6 w-full`}>
          {o.cta}
          <span aria-hidden className="text-xl">
            &rarr;
          </span>
        </a>
      ) : (
        <span className={`${buttonClass("cocoa")} mt-6 w-full cursor-not-allowed opacity-60`} aria-disabled>
          {o.unavailable}
        </span>
      )}
      <p className="mt-3 text-center text-sm font-semibold text-ink/70">
        <span aria-hidden>&#128274; </span>
        {o.secure}
      </p>
    </section>
  );
}

const initialState: JoinState = { status: "idle", message: "" };

function ListOption() {
  const l = preorder.list;
  const [state, formAction, pending] = useActionState(joinMailingList, initialState);

  return (
    <section className="relative flex flex-col border-[3px] border-ink bg-sky p-6 shadow-[6px_6px_0_var(--color-ink)] sm:p-7" style={{ rotate: "1deg" }}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-ink/60">{l.label}</p>
      <h3 className="mt-2 font-script text-4xl">{l.title}</h3>
      <p className="mt-4 flex-1 leading-relaxed">{l.body}</p>

      {state.status === "success" ? (
        <p role="status" className="mt-6 rounded-2xl border-[3px] border-ink bg-white px-5 py-6 text-center font-hand text-3xl">
          {state.message}
        </p>
      ) : (
        <form action={formAction} className="mt-6 flex flex-col gap-3">
          <label htmlFor="mailing-email" className="sr-only">
            Email address
          </label>
          <input
            id="mailing-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={l.placeholder}
            aria-invalid={state.status === "error" || undefined}
            aria-describedby={state.status === "error" ? "mailing-error" : undefined}
            className="w-full rounded-full border-[3px] border-ink bg-white px-5 py-3.5 text-lg font-medium outline-none placeholder:text-ink/40 focus:ring-4 focus:ring-periwinkle"
          />
          <button type="submit" disabled={pending} className={`${buttonClass("butter")} w-full disabled:opacity-60`}>
            {pending ? l.pending : l.cta}
          </button>
          {state.status === "error" && (
            <p id="mailing-error" role="alert" className="text-center text-sm font-bold text-[#b3261e]">
              {state.message}
            </p>
          )}
        </form>
      )}
      <p className="mt-3 text-center text-sm font-semibold text-ink/70">{l.fine}</p>
    </section>
  );
}
